#!/bin/bash

SESSION_NAME="xo"
REPO_DIR="$HOME/xouston"
GIT_REPO_URL="https://github.com/dr1m11/xouston"

# Экспортируем переменную окружения
export SERVER_IP="${SERVER_IP}"

echo "Starting deployment script"

tmux_send() {
    tmux send-keys -t $SESSION_NAME "$1" C-m
}

tmux kill-session -t $SESSION_NAME

echo "Cloning/updating repository"
if [ ! -d "$REPO_DIR" ]; then
    git clone $GIT_REPO_URL $REPO_DIR
fi

cd $REPO_DIR && git pull origin main

tmux new-session -d -s $SESSION_NAME
tmux_send "npm install"
tmux_send "npm run deploy"