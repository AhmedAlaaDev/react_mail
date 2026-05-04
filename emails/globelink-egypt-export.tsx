import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "react-email";
import type { CSSProperties } from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const emailWidth = 720;

const brand = {
  ink: "#20216e",
  page: "#f2f3ff",
  white: "#ffffff",
};

const heroImageUrl =
  "https://globelinkegypt.com/wp-content/uploads/2026/04/Group-4.png";


const logo = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQBS16Sek3G3SoSueMnRlKR6AcdX_7TiRq9SivBiPmHLbDw?e=ptLNwV&download=1";

const barcelona = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQBvdKN8ihfTQ7b7TTuz1ewrAeMNqYYslKGTiIZBNZEVI2Y?e=br8eTy&download=1";

const calender = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQD540WmXED5Rb_h53-zEGOlAbkbrBp0HbYPdES1u3V5lls?e=dhcA7a&download=1";

const route = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQCyTiFsp0ZsSLQDhNUAFx-cAeM9irSVMsss3ERRCBYJMRc?e=jIJRBM&download=1";

const benefits = [
  {
    title: "The Barcelona Shortcut",
    body: "Our strategic hub in Barcelona is the fastest bridge to Brazil, Mexico, and the USA offering transit times that leave the competition behind.",
    iconSrc: "inline-barcelona",
    iconAlt: "Network icon",
  },
  {
    title: "Your Schedule, Not Ours",
    body: "With Fixed Weekly Sailings, you don't have to wait for a full container to start selling. If your goods are ready, we're ready.",
    iconSrc: "inline-calendar",
    iconAlt: "Calendar icon",
  },
  {
    title: "From Your Door to the World",
    body: "Our dedicated trucking network covers every corner of Egypt. We'll pick up your cargo from your premises and handle the rest--documentation, customs, and everything in between.",
    iconSrc: "inline-route",
    iconAlt: "Route icon",
  },
] as const;

export const GlobelinkEgyptExportEmail = () => (
  <Html>
    <Preview>LCL exports: the world is closer than you think.</Preview>
    <Head />
    <Body style={styles.body}>
      <Container style={styles.canvas}>
        {/* ── HERO ── */}
        <Section style={{ padding: 0, margin: 0 }}>
          <Row>
            <Column>
              <div
                style={{
                  position: "relative",
                  width: `${emailWidth}px`,
                  height: "381px",
                  margin: 0,
                  padding: 0,
                  overflow: "hidden",
                  backgroundColor: brand.white,
                  display: "block",
                }}
              >
                <Img
                  src={logo}
                  alt="Globelink Egypt logo"
                  width="127"
                  height="33"
                  style={styles.customLogo}
                  draggable={false}
                />
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: brand.ink,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "8px",
                    fontWeight: 400,
                    position: "absolute",
                    left: "310px",
                    top: "50px",
                    zIndex: 10,
                    whiteSpace: "nowrap",
                    display: "block",
                    margin: 0,
                  }}
                >
                  IN UNITY, WE LINK THE GLOBE
                </span>
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: brand.ink,
                    fontSize: "28px",
                    lineHeight: "32px",
                    fontWeight: 900,
                    letterSpacing: 0,
                    display: "block",
                    margin: 0,
                    position: "absolute",
                    left: "0px",
                    top: "190px",
                    zIndex: 5,
                  }}
                >
                  LCL Exports
                  <br />
                  The World Is Closer
                  <br />
                  Than You Think
                </span>

                {/* Hero image */}
                <div
                  style={{
                    position: "absolute",
                    left: "289px",
                    bottom: "0px",
                    width: "431px",
                    height: "408px",
                    zIndex: 4,
                  }}
                >
                  <Img
                    src={heroImageUrl}
                    width="431"
                    height="408"
                    alt=""
                    style={{
                      display: "block",
                      width: "431px",
                      height: "408px",
                    }}
                  />
                </div>
              </div>
            </Column>
          </Row>
        </Section>

        {/* ── BODY CONTENT ── */}
        <Section style={styles.content}>
          <Text style={styles.paragraph}>
            Hello,
          </Text>
          <Text style={styles.paragraph}>
            They say the world is getting smaller, but for a growing business,
            it can still feel like a massive, complicated place.
          </Text>
          <Text style={styles.paragraph}>
            At Globelink Egypt, we don't see borders; we see opportunities. We
            believe that a small shipment from Alexandria should have the same
            global reach as a massive container from Shanghai.
          </Text>
          <Text style={styles.emphasis}>
            Whether you're sending a single pallet of textiles to Italy or
            testing a new market in Brazil, we've built the "shortcut" for your
            success:
          </Text>

          <Section style={styles.cards}>
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </Section>

          <Section style={styles.destinationBlock}>
            <Text style={styles.question}>
              Where do you want to grow today?
            </Text>
            <Text style={styles.region}>
              <strong>Europe:</strong> Italy, Spain, the Netherlands.
              <br />
              <strong>Far East:</strong> Singapore.
              <br />
              <strong>Middle East:</strong> Jebel Ali.
            </Text>
          </Section>

          <Text style={styles.paragraph}>
            The world is waiting for what you've built. Let's go get it.
          </Text>
          <Text style={styles.signoff}>
            Best Regards,
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

/* ── Benefit Card ── */
const BenefitCard = ({
  title,
  body,
  iconSrc,
  iconAlt,
}: {
  title: string;
  body: string;
  iconSrc: string;
  iconAlt: string;
}) => (
  <Section style={styles.card}>
    <Row>
      <Column style={styles.iconColumn}>
        {iconSrc === "inline-barcelona" ? (
          <BarcelonaIcon />
        ) : iconSrc === "inline-calendar" ? (
          <CalendarIcon />
        ) : iconSrc === "inline-route" ? (
          <RouteIcon />
        ) : (
          <Img
            src={`${baseUrl}${iconSrc}`}
            width="60"
            height="60"
            alt={iconAlt}
            style={styles.cardIcon}
          />
        )}
      </Column>
      <Column>
        <Text style={styles.cardTitle}>
          {title}
        </Text>
        <Text style={styles.cardBody}>
          {body}
        </Text>
      </Column>
    </Row>
  </Section>
);



/* ── Styles ── */
const BarcelonaIcon = () => (
  <Img
    src={barcelona}
    alt="Barcelona Network icon"
    width="56"
    height="56"
    style={styles.cardIcon}
    draggable={false}
  />
);

const CalendarIcon = () => (
  <Img
    src={calender}
    alt="Calendar icon"
    width="56"
    height="56"
    style={styles.cardIcon}
    draggable={false}
  />
);

const RouteIcon = () => (
  <Img
    src={route}
    alt="Route icon"
    width="56"
    height="56"
    style={styles.cardIcon}
    draggable={false}
  />
);

const styles: Record<string, CSSProperties> = {
  body: {
    margin: 0,
    backgroundColor: "#ffffff",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  canvas: {
    width: "100%",
    maxWidth: `${emailWidth}px`,
    margin: "0 auto",
    backgroundColor: brand.page,
    color: brand.ink,
  },
  content: {
    padding: "48px 52px 24px",
  },
  paragraph: {
    margin: "0 0 22px",
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "22px",
  },
  emphasis: {
    margin: "0 0 34px",
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: 900,
  },
  question: {
    margin: "0 0 18px",
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "18px",
    fontWeight: 900,
  },
  region: {
    margin: 0,
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "22px",
  },
  signoff: {
    margin: 0,
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "19px",
  },

  /* ✅ SVG inline style */
  customLogo: {
    width: "127px",
    height: "33px",
    display: "block",
    transition: "transform 0.25s ease, filter 0.25s ease",
    marginTop: "50px",
  },
  
  cardBody: {
    margin: "0",
    color: brand.ink,
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15px",
    lineHeight: "22px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px 28px",
    marginBottom: "16px",
    border: "none",           // remove the white border entirely
  },
  cardTitle: {
    margin: "0 0 4px",        // was likely "0 0 16px" or similar — change to 4px
    color: brand.ink,
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15px",
    lineHeight: "18px",
    fontWeight: 900,
  },
  cardIcon: {
    width: "56px",
    height: "56px",
    display: "block",
  },
  iconColumn: {
    width: "76px",
    paddingRight: "12px",
    verticalAlign: "middle" as const,
  },

};

export default GlobelinkEgyptExportEmail;
