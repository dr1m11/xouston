import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { SITE, type Locale } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Xouston — full-cycle software development studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const seo = await getTranslations({
    locale,
    namespace: "seo",
  }).catch(() => null);

  const title = seo?.("home_title") ?? SITE.name;
  const tagline =
    (locale as Locale) === "en"
      ? "Mobile, web, DevOps & dedicated developers"
      : "Mobile, web, DevOps и аутстаффинг разработчиков";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #FAFAFA 0%, #EEF2FF 50%, #DBEAFE 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 90px",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "36px",
            fontWeight: 700,
            color: "#0F172A",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#2563EB" }}>XO</span>
          <span>Xouston</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "62px",
              fontWeight: 700,
              color: "#0F172A",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "920px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#64748B",
              lineHeight: 1.3,
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "90px",
            fontSize: "22px",
            color: "#2563EB",
            fontWeight: 600,
          }}
        >
          xouston.com
        </div>
      </div>
    ),
    { ...size }
  );
}