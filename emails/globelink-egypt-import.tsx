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

const emailWidth = 720;

const logo = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQBS16Sek3G3SoSueMnRlKR6AcdX_7TiRq9SivBiPmHLbDw?e=tRbt0s&download=1";

const market = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQD6uzeBx7z1Qqt6-jtDyXNpAePuZcXX-P0u3H5neguobXo?e=vKoez8&download=1";

const house = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQAOYRHCRkaoSZWd5hWDszcIAU9jAMfH42LIxIh-7i57NRY?e=VNQAy0&download=1";

const ex = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQAX-yVyqjcOQLDUM4o7JOdNAfLz3nFSk01_nAGvbDVI5XA?e=tkGrHP&download=1";

const di = "https://mesco221-my.sharepoint.com/:u:/g/personal/ahmed_alaa_corporate-mg_com/IQC-MuPnnSGIRLepWpo90ZTxAQYUzyKt2bjzq5w9i9rOAD4?e=p2iXnk&download=1";

const brand = {
  ink: "#20216e",
  lime: "#bfd530",
  page: "#f2f3ff",
  white: "#ffffff",
  container: "#3b327f",
};

const serviceCards = [
  {
    title: "Market-Leading Speed",
    body: "Get your cargo from India in just 17-20 days!",
    icon: "speed",
  },
  {
    title: "Exclusive USA Service",
    body: "We are the only provider offering a direct service from the USA to Egypt, ensuring more safety and less handling.",
    icon: "usa",
  },
  {
    title: "Direct from China",
    body: "We offer direct routes from Ningbo and Shenzhen with highly competitive rates.",
    icon: "china",
  },
  {
    title: "Strategic Warehousing",
    body: "Our Merghem Bonded Warehouse provides secure storage outside the ports to simplify your logistics.",
    icon: "warehouse",
  },
] as const;

export const GlobelinkEgyptImportEmail = () => (
  <Html>
    <Preview>LCL imports: the fast lane for your supply chain.</Preview>
    <Head />
    <Body style={styles.body}>
      <Container style={styles.canvas}>
        {/* ── HERO ── */}
        <Section style={{ padding: 0, margin: 0 }}>
          <Row style={{ width: "100%" }}>
            {/* Left Column: Logo, Tagline, Headline */}
            <Column style={styles.heroLeftColumn}>
              <div style={{ padding: "50px 40px 50px 0" }}>
                <Img
                  src={logo}
                  alt="Globelink Egypt logo"
                  width="127"
                  height="33"
                  style={styles.customLogo}
                  draggable={false}
                />
                <Text
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: brand.ink,
                    fontSize: "9px",
                    lineHeight: "14px",
                    letterSpacing: "6px",
                    margin: "18px 0 28px 0",
                  }}
                >
                  IN UNITY, WE LINK THE GLOBE
                </Text>
                <Text
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: brand.ink,
                    fontSize: "28px",
                    lineHeight: "34px",
                    fontWeight: 900,
                    margin: 0,
                  }}
                >
                  LCL Imports
                  <br />
                  The World Is Closer
                  <br />
                  Than You Think
                </Text>
              </div>
            </Column>

            {/* Right Column: Hero Image */}
            <Column style={styles.heroRightColumn}>
              <Img
                src="https://globelinkegypt.com/wp-content/uploads/2026/04/Group-3.png"
                width="280"
                height="380"
                alt="Globelink Import Hero"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Column>
          </Row>
        </Section>

        {/* ── BODY CONTENT ── */}
        <Section style={styles.content}>
          <Text style={styles.paragraph}>
            Hello,
          </Text>
          <Text style={styles.paragraph}>
            In business, time is money. That's why GlobeLink Egypt has created
            the "fast lane" for your LCL Imports, ensuring your goods arrive
            safely and on time.
          </Text>
          <Text style={styles.question}>
            What Makes Our Import Service Different?
          </Text>

          <Section style={styles.cards}>
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </Section>

          <Text style={styles.paragraph}>
            Keep Your Supply Chain Moving. We handle the details — from pickup
            to customs coordination — so you can focus on growing your business.
          </Text>
          <Text style={styles.signoff}>
            Best Regards,
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

/* ── Service Card ── */
const ServiceCard = ({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: (typeof serviceCards)[number]["icon"];
}) => (
  <Section style={styles.card}>
    <Row>
      <Column style={styles.iconColumn}>
        <ServiceIcon icon={icon} />
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

/* ── Icons ── */
const ServiceIcon = ({
  icon,
}: {
  icon: (typeof serviceCards)[number]["icon"];
}) => {
  if (icon === "usa")
    return (
      <Img
        src={ex}
        alt="USA Export icon"
        width="56"
        height="56"
        style={styles.cardIcon}
        draggable={false}
      />
    );
  if (icon === "china")
    return (
      <Img
        src={di}
        alt="Direct China icon"
        width="56"
        height="56"
        style={styles.cardIcon}
        draggable={false}
      />
    );
  if (icon === "warehouse")
    return (
      <Img
        src={house}
        alt="Warehouse icon"
        width="56"
        height="56"
        style={styles.cardIcon}
        draggable={false}
      />
    );
  return (
    <Img
      src={market}
      alt="Market Speed icon"
      width="56"
      height="56"
      style={styles.cardIcon}
      draggable={false}
    />
  );
};

/* ── Styles ── */
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
    letterSpacing: 0,
  },
  question: {
    margin: "0 0 22px",
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "18px",
    fontWeight: 900,
  },
  cards: {
    margin: "0 0 28px",
  },
  
  iconColumn: {
    width: "76px",
    paddingRight: "12px",
    verticalAlign: "middle",
    textAlign: "center" as const,
  },
 
  signoff: {
    margin: 0,
    color: brand.ink,
    fontSize: "15px",
    lineHeight: "19px",
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
    margin: "0 0 4px",
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
  customLogo: {
    width: "127px",
    height: "33px",
    display: "block",
  },
  heroLeftColumn: {
    width: "50%",
    backgroundColor: brand.white,
  },
  heroRightColumn: {
    width: "50%",
    backgroundColor: brand.white,
    textAlign: "center" as const,
  },
};

export default GlobelinkEgyptImportEmail;
