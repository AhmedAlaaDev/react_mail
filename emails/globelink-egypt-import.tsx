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
    <Head>
      <style>{`
        /* ── Reset ── */
        * { box-sizing: border-box; }

        /* ── Hero layout: desktop (≥601px) ── */
        .hero-outer {
          position: relative;
          width: 100%;
          max-width: ${emailWidth}px;
          height: 381px;
          overflow: hidden;
          background-color: ${brand.white};
          display: block;
        }

        .hero-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 300px;
          height: 100%;
          padding: 50px 0 0 0;
          z-index: 5;
        }

        .hero-logo {
          display: block;
          width: 130px;
          height: 52px;
          margin-bottom: 16px;
        }

        .hero-tagline {
  position: relative;
  top: -45px; /* move UP */
  
  font-family: Arial, Helvetica, sans-serif;
  color: ${brand.ink};
  font-size: 9px;
  line-height: 14px;
  letter-spacing: 6px;
  white-space: nowrap;
  display: block;

  margin-left: 370px;
  margin-bottom: 60px;
}

        .hero-headline {
          font-family: Arial, Helvetica, sans-serif;
          color: ${brand.ink};
          font-size: 28px;
          line-height: 34px;
          font-weight: 900;
          margin: 0;
          display: block;
        }

        .hero-image-wrap {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 431px;
          height: 408px;
          z-index: 4;
          overflow: hidden;
        }

        .hero-image-wrap img {
          display: block;
          width: 431px;
          height: 408px;
        }

        /* ── Mobile hero (≤600px) ── */
        @media only screen and (max-width: 600px) {
          .hero-outer {
            height: auto !important;
            padding: 28px 20px 0 !important;
          }

          .hero-left {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
          }

          .hero-logo {
            width: 110px !important;
            height: auto !important;
          }

          .hero-tagline {
            font-size: 8px !important;
            letter-spacing: 3px !important;
            white-space: normal !important;
            margin-bottom: 16px !important;
          }

          .hero-headline {
            font-size: 24px !important;
            line-height: 30px !important;
          }

          .hero-image-wrap {
            position: relative !important;
            right: auto !important;
            bottom: auto !important;
            width: 100% !important;
            height: auto !important;
            margin-top: 20px !important;
            text-align: center;
          }

          .hero-image-wrap img {
            width: 100% !important;
            max-width: 340px !important;
            height: auto !important;
            margin: 0 auto !important;
          }
        }

        /* ── Content area ── */
        .content-section {
          padding: 48px 52px 24px !important;
        }

        @media only screen and (max-width: 600px) {
          .content-section {
            padding: 28px 20px 20px !important;
          }
        }

        /* ── Service cards ── */
        .card-row td {
          vertical-align: middle;
        }

        .card-icon-col {
          width: 50px;
          padding-right: 10px;
          vertical-align: middle;
        }

        @media only screen and (max-width: 600px) {
          .card-icon-col {
            width: 44px !important;
          }
          .card-title {
            font-size: 13px !important;
            line-height: 16px !important;
          }
          .card-body-text {
            font-size: 12px !important;
            line-height: 15px !important;
          }
        }

        /* ── Typography ── */
        .para {
          margin: 0 0 22px !important;
          color: ${brand.ink};
          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          line-height: 22px;
        }

        .question {
          margin: 0 0 22px !important;
          color: ${brand.ink};
          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          line-height: 18px;
          font-weight: 900;
        }

        .signoff {
          margin: 0;
          color: ${brand.ink};
          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          line-height: 19px;
        }

        @media only screen and (max-width: 600px) {
          .para {
            font-size: 14px !important;
            line-height: 20px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>LCL imports: the fast lane for your supply chain.</Preview>
    <Body style={styles.body}>
      <Container style={styles.canvas}>
        {/* ── HERO ── */}
        {/*
          react-email's <Section> / <Row> / <Column> render as <table> cells,
          which can't do position:absolute reliably across email clients.
          We use a single-cell table with a raw <div> inside for the desktop
          overlay layout, while the CSS @media block linearises it on mobile.
        */}
        <Section style={{ padding: 0, margin: 0 }}>
          <Row>
            <Column>
              {/* MSO conditional: desktop clients see the table-based layout */}
              {/* eslint-disable-next-line react/no-danger */}
              <div
                className="hero-outer"
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: `${emailWidth}px`,
                  height: "381px",
                  overflow: "hidden",
                  backgroundColor: brand.white,
                  display: "block",
                }}
              >
                {/* Left text block */}
                <div
                  className="hero-left"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "300px",
                    height: "100%",
                    padding: "50px 0 0 0",
                    zIndex: 5,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="127"
                    height="33"
                    viewBox="0 0 127 33"
                  >
                    <image
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAhCAYAAADwOXSUAAAQAElEQVR4AexbCXhUVbKuOvd2p8OasKc7O2ERVAgBBhEhAXFBQVwQl6ej48gMsgVUFEekVRwFxYRFVB5PFJdxRAf3FUkQQQUCASQIhKQ7SydAgCRAlr73nnp1OgGS0CC4zbzveb7z97m3TlWdpeqsNxHw6wXs0cNtj4lJPS/WNWF8jHPC69GuiduinRMPR0VMMPjdH+OcWMrpuljnpPlxzgnDk5zjmgWtDgFSEATl/Z141j3wKxjfLSIjp7aJjUq95lhF2UryG5ukhMVsvFtA0gVAFIYAOr/biKgjpwMlyVsIMPGCy/wyg5L1j/ckhKwvvCg0Y0ty2Gff9Y9btbFf34wt/YauzU4asWZzn6szNve5bM2GxAFrN/aL/2JTUus9zJ+Rkax0suqzbvv/e0bxC/YAOnnkxrj2D9Glf5k0jRUkaQTrDz6aOSMQEWqatbA+vHVc3rd/nLx1EGWXj3NUtlro31/zNcoKr13352masQHJWGVJ60MC+T6C/JR0Wm8KI9cmrJziIy2XibAjN361oX/sjh097MCeFNB9xh/CZHDranbq0WOMHWCMBo3CGC2Z8wHcAoIGt0hKGmdLSJgUotJT+cZoin4cyeDWG/M0zld89XVAlZ7KDw3oxM9uUccTqDe/Q32oq1d9WUxX+apsJa9Y6tqdDG5dwC8SCLkT2tnQ9lcgXCYJRrFabiz/njlaLVuam8al5oYPH+V7l2eFLwTBQiT5JwK6kBHK4ga3wODURLY6pw0jEoGTZ5CbpbReJ5vx3v4ax50fb0lsx3QWa8h68jk21u2Id03ssrfj4RFHyw7dcfSwa2yCy9W/u2tGW9VpY8aM0eJcnc4vcJVfHhdxJOqkZOBJtbVVQkR57zJfsxuNKv2uQ6XNr43uVHFex473NWcOlR/SOSK6t6LXocVor7PiyjhX5QXd2k1vyTwQFRVznso7WNLshuOI6xSZFB39YFh8RGSiJ+LwsMjIigjFq9Cjvbu5qmOhq/KShE6T23XpWBGrdMY4o/4QH/9AK8WjkBB9pHv5vuZXx7sqE+LDH2jV2ekaEBd1eKDLNaMN52Nn54RIlhta6Cof/EsYH6OiJkX4q2kqSJjFnR7DhZxNJJtNeoZdXXo48aKDkSxnIkAeAWwDxPWcrmYlnyHgp4CwivE182zl1MP0CiCwOG0U2QkuAJRPOYhSN/zQXzW2Ub566dH+nhbSrLzBkvqbAuE1EPgoEKUZkj6ukdVPdI6siM/L6xkiSb/VtGihReYQJXccse3v6eivEvf6Ad7l8tJJyhmWJV9ApH+FasZdynhEIa0tsMYx/VVpyQXSsuZaUi7j9w+qNf8daoZEw389vy/jJXGBlPSEAmk0uplOkSbQ3TyAntEl9Ttebm1IRSc/QaohzUdNXetpChoqpZxP0lpiVtUOT4bA6AbDMEdbEl6wiC4z7NVR3K7plgEP6UZ114ROk9oZZJsmpXzZIrxMwM8MSqFm0V9Q0kQ2WKtzUHcoKq4qY/jI0myW26ChPp4s28UpfbL7pCRtGTw0KfvylKTskclJW0Yl98kewfSUNR9k9xUYwpUWTwPiRi7rMIPF+fd4JAhjhxlbU21cxc6C0DhglU0fhpaVSoStCXERatotmoAHAHATAV1uSnmt/0BNCAQJvJcJBZv9dna8P7HiPECYareLK1CIh5n9KBtsIprHrtX9Qud3FXfb7LbJcd3DEzWBswDIZOccLCx7Z5XJqBQ6zu7Vr8f5Cv0GDnSDXfiYfi6xBxvxhoLIivNYiKvFv0Eil9PSFNqdAHgVCPGplGI5y8FPDmqaMzV5gwS4ky0QmM7OoIy4swxGOSIWIMIbefltnhyZ/N0jQ/tsuWdwn03vpPTfWMryxAga3W6QQxK/2zMkafMTEuEmQFzCeg6cykyqcy/MzExu3jCvW7fpLQjwYqbFo6AXWoSHub3Frdbk+3wv22yYqgttli7EdrTLRnLMH4jCEj2kpEuA0AcEcwpK5r+WW5C2w+tLWyxIzGeaIKldQgSRAQEAzTDNFkV7qrhcKuO6lgCKapum+evzUUordHf23rC923Nb7fpqA2eFUH3e2SUIh7kvBlkWjWo4/TcURkAH13sUEY1FoL0A1tKC0nk5P8P4hA695g/s7Tdxo5uuiw3K5q4A3IcAG5jvY0SxmDs4tblDe6agIC2vAeM5PQ7rs8UbIhwLAfBNRg00CUTYyta6otFMZBw1I7gOLs7bCxJzqqpAqLU6uoNzqL9GOg3DKrEMs9yUGLRfBBqRiOACATttNtvuhkUi4E7O2w1ILr+0nIE8hE5Mu80CYx4RuIG3Rkj4LTtbLnBAgFB2mtF+Mp6qscxZx3TZn8nnFAWiWhq/BaKrreraYYhoO1UBdSOkmwigJRH+j9e3YL3iCdpIAFB5Z0TPyGnhSDAcCNRIOh1vFVdmOwp82kZiZEHJc6O9xQv/trdowcqcvAUFpxM6W/rA3t8Uc4PWIkIjJ+J3YiPUHK1xnOIUSrdAIE0DQPS3FkJezcZ8GATOBgGvSiGeq671D4AgweJdBhFn8FRXC0FUqzwgtinzqEhgkxa1k5bswHLHuE7FKKQeHx7eoi4bBNPDpSmjpCGdkihAV3lnCy4yV0dcQYBsS7qBALo0leUaqWVMtbgUNFETG3uHQ/GwgErOHccsox+P+qEsyUr599R4FBEzNNSmeYvbpuWWLgwyPZ8qdK4UbsB+IChtKMcdegwIi779/JvyhnQ/UhnTfZzfgQ15nlZxpLqZz5dmivArWc8DgLANCMpBMODUYBNaMVvWx77TVRjYDeCtQNvVcdEE8zzu5BhAUcRGDtSHefMQcVZc963D2eh3c7mFJOFacoT2qtNORzldwHuC4bHdw6/P97X+iN/POWot8EshcCWX35f3FSkEpDdSQrAZAN/n2cEFlhxHRlhicrJb5zbDOQV1VIl3TehKAvpzJ3TAwJSOPK2fBCs8iIh7kHAV7zoPxbkOXhDnmtQrMnJS/5hO96REuyYMOx3iIqdcqHbkrOPsohTKi9WR8CQ/wQ4eAdvcbuAxepJcVJR2CIW2DpB4o0jXGQ7ttiPOTsk2WT5EAo0Fws4ocF1ze7Od9VIh/J6Q4LrvolhXam9yiAMk8Cvu5ChA8V+xzvUjo51ThleVl1+PCGNZJhQB1oYIPTCrEQDvHai7d1evgUR4Pue1YgezWYJszAsEqAPKeO+uiosU4iMPdTbNKtUelc33I7K7Kjs+cuoFhLYwRQwGXa/macjgozJ+y84VDoAsCw2DiST+KQBfBaQ+ZMG4/F3lXURDjh97drkmtK2xV42UgPcKgvYawnIN6cWmELwOcQcZBHIUY45F8mkFYcmFhPg/bJJlp4OUpvuIriX+WF1UvrrVk0hx7O0x6j0AhKMCxVq77tgceG/6Y7cy2QgvMJl9F2YIKZaz/EtsvMEC4QOWfadlh7ZlnA9sKD73w+0mWM8hiIfRkl10IVci4CtEcL6UtJjb8Qqn84CwExI8bwn8zArRDFABwUWIf+X+WgKAfyd+Z77VmrTVr/kYCihu5ja8qGCRuM00ZRtQASGCUNytymYnmY5o9mAyAXApwAFViqwSmQbg8S3apfH0D4DbuT1Mq6NDfeC3Q5qOryHi+9yuYYw/nZPxQ1Brwz0WJaUMlwKFhVDRFJJ3n1zedi5sgwQo4U46cAIAuYC4AQEYKj0VBFim6xAKZxH0Dkec7FxJgNCpnp0AMAt0+OTiXuv3Q5Dg8aSX+7H6VWGDBzj7ZRb4jHvwXSFgjqWbc/OLn91WUVHJNoRNyCcS7sjVRDKb2/wDGFCeV7RgD/dDOmjicW7HO1z2l4j0DwA5U6t1LOHZpVjTrBoQuJ7l/8H9xXcUxM/4AQLO1YRcml8yr4CEls12fAOAPmV8q4AAeXZJR+pl3+Rpek2gbFPuJguKBWImd/snIM1SINiNQrzNclv8/oCzUahRmyEAF3PfL+c2/UA27TAIXEWIn1tkHNhblJarEb7EepaxfK2AcwjRCW3y/WAsFAI/AkkjeYqZ1xSSYBYh2KoMvvxA426rCXSH/y+8+RuvS/OeYLCFmg+3DA9Z92PVUte4Zg0NFoCD2LmE4ufOyydJb9WA+Z16Px18viVV+YXzv/KWhD3S3lX95/huWyflF89fXli4SJ2xKSfH7c8vTlvh9aXfdQIlaTPzStI2KZ27ffPKCoqfXcFr9dQW4eF39R9UMt1buuDjvMNzKlT+rl1zj3iK05afkK3TM8Fbkr40z7eggHmo0Jf2fkFJ+l8a8niK01/ZmT/PW9BUtjR9dl7xs1+yzhc9vrQ5PMp/yC9JW+vxzXvQ40t/Lzd3YS3rhJwDi496StNe8ZSkjS8ofna1csQCX/qiwpL0tML9C/cqHtUG1uH2cnsCnaaIwRAfP651fMTEvrw+X62Qt+fAFTrahrKBY9hzeIdNa9mz1yBRHQDXACBflkCow4bDFK9NOJJtwj5EwcGylj/0UlPgMEvThlqanmLoWnId9CGmTb9E1tgibLZKP5whsLFxX43jAgB5nSTqWseKPMvgG2jK9y/vte1YHe3Hft0yK2uJkZmZaQbh5EmBxxAPTzgBaBQyM92mcpQVK1ZYjTLqXprIc4/V0Y//NslXZZ3gaZLXkH7imfU0kuH347ERnXU1lAnwMA3ptMaPDx/XWtbYUywBU4DgfpR4L0q4Vz3z1NMTBKxCDZcD4nIU4hUFAHoNEDYiYSIC3g+kIDmlALiHHkZpPSlBPi0BGfQ065xbB5rLo3YOEd1UXi540xKoZNCf9VlJ8YLoj5yZgggaAPDSIldYunw1ZcC2In7/PZ5FD5zW+LJ1M7YhVALBN8hnGjbqCknwVuCZyMOG7s1T/nACuFwCXaGgntmQ3dggPyCQWu/eAqK3Wcc7CkhiJddpJeev4MH0NiD+ixDek4gfMD4kwE94JOcYBtZtmJi5aVy3OTHGj9adJOg6zgtjsOHhbV7nl1zaa+sefv89nmUPnNb4amPkLV602utbtNjre+45L6eFpc897+Vnnva3k8QBQHBjIwDcwOVeDBK8zFcvp2Tr0Dai9tlW7RyP2UJbPomAHwDCXnYEr0D0BADg5fdWYIlRsc57bo513dM7mc+jUB/U93u/hD+zk9zG5boYRcAzjxS4KKXX1hxgj6tn/T05ix44YXx1URGnzuHOiffFOCc+diZoAi5CDT8FgU82BdNfBN4RxromTYlzTZzZEAdL7A9VltVON6qOTAdJ9zKmkIRJJOXEAIgmEMF97DyzOL2Nl4bIzMwd5Ca3yNjY93xDGBN5xrmDEcmG3sFlLxKa9dylfbbksNPQWbQXYjulxkZ3nDwsKmLK5ccR2WHKheo7hZJPZmdLcE2PjHFNS4mJSL0u3jn10riIe2OS+Ns9cIh3To6Oi5gyOD5ycpfjNKdzXLOoqMnnx7qmDUhwTYqMc07pFuNKHaoQG5maHB0xOamr89526nNxZ+e0qKiIkoeKpQAACX1JREFUqZeovIZQsp073teBi/jN4gnj11QeikHCYShwkEAYcCYAio48cssEYmlTcM0PEsrOBPJ6tsZQQhzEGKjABruYgK8gicZz3uVA0Jn5Y08BIq/52k6J9i2bNuWJodkfXkRo3S8QbiWEDoiwVgLOsfzGy0N6bctn+bOOJHAgCvEwAjwChDMUNIHXNNf8bZURPbsrrjKk/+9gWU+wA7otKR+XZD51oDR0dDf+Fk+Esbx3ucuSePehktB4VbANm/USJqYSWTcAaFEW4DUk6XGQMJMsegRA/L2GzL/FdzqSxEfGPwiQU8GimczzGONRfn4YpBxv2QJneaXyN0HA+Bk7+nV6ND1r9H2zt42aNnN79NRZO9relbqnqGfi4ecFwaNNAUjziYi/fsrxkj/lNgVJeQ0RNx3oLSGtxzVJsxUI4WUCKuSWhTI0RrBoIlAGILy27N2vjh4R8npLWo+y4Uczsx1B8H4B3CKkduWlA77fB+caiDqxCN+2oVcIWqJAAlaDI7TCJh3Jkmga13EACLGFO+d5EKAui/qjBfcaIbVDiLAAAQySeC3joiQe9UhyCABeioBHCfEAG5OdAqMAaAsBLgMCdYQcbaE5ChBVnV8HhK+Z3gYJNS7jE4n4NlraOTky/MwgPt5zZQhVmZdFxR/7c/cLy/uc37e85wVJh9tcnLJ/x90Pelbt9S1a1xT5hW3XCZDbEbjaRF14U9cEEIkE53HjugPifpZfb9n1HWhRB6b14DoLxmkibXGEmG+kL9sgbGhNZ92PcCcOYhQgiWeAcDaUh32d0jNH3YufRsePkdFkB97i9c1/Q4HPwusMg5pzc65AoGiB4h8aWHPauqqWakBzhCZmINMkaGXN2oT5AGE1gKwmpEGHsOUIdoKLuZ75IDFDk6LuewIBp7SWz/KvCQHvIeAhIEiQdirzlsx/B0msQoB9IMhr0/WPCnxpH+SXzPPCbxiEo2J/b6HBWCLowpXhkQV24CtCAeLzawatOwJBg1tKHTcCoDrXSwgSCKA967yJp8fZcc6JI9Gw+KoX72ZWHhH8GyRy+d52Hf0fP7pwa0RYe/8cZlH8fIuHbxHiVERaktI364eUlKDncmY/20h2JBwZGzH12Vjn1Kd4H5CsSTOakLoCwV4J1heihsrL97fqRpoWw2PzkBBaLs8Spt9/0AE25JkJ13FpA6U0pxJgd0D4MsS0qVmCyQBcV5vQtDbdXdP4KxsmEs84iFBuM+2n6VP4zYMQSMO4wYO4ZO57AP6p5EpmH9tfsRvOENq18xcJxM+ZZQcjaCSADgR0lUX0FONhfuYvYUFZFbEqvvuRPfc/ltO5Y0TtFCS6hIl7WGY6kXg0OTEhY3CfLQeY9vMjgfpL396S5M1SyjEWyu4EshkrDgXECl1oFbIZxZiWOc4y5TzToCctaTxuWXQ7+PUorzdsHxB+yfxV3EZ1vZzHzpmxq2zuCcOy40dJU6ZWS+slkiyHmIsoPra3braf5f4jouDz+WACanW8NgS4jyu5d8SI3MCV4XF60zSLb8YszfySnedtADjTFKw6lZcAXh4AtKZ6jr+37+j/fsxtRTURkVUjEICrhLORtL+iw3hjWN8sPhIGvUU7Ln5OKTt3LY/y1wlhLAi8XQr6UNdkBdMrWVFHU0JHUYVe/vq2VBJOZ0d8kwh1IHBZUuM2uKVDaJlAuAEJ1B15Zq2lZ7PsiYjcjwD4Fi8HMxHgTilxot1vy1Q3gvAfEgQ3rGfjulAVe/uZjHmCvaDg+cO6Jl5HxH8yMej0z/QfjfwhZ+vwUSUHu/SsUGf3pbwO3mIPdTw3pG/W9p+3tgcvmh3cQoS8wpL5X6n1vrh4YVFIC3MXT83b2eu687p/HTR3tC8qmr8thPQcNl57Rkf2yZzQ2iq+1gbg+/2DQHCIS6jmAVS2b98zx/j5RCSAY4Dye77zz/CUpmcW7Uvb3nBmOMH4b3wQgMCNOlkDBGwjdNGIdjL31KfcwlIPO0A6dyZ/2cKf4gCFnbsf/bp3/8qlBHJcFeIzme9lZw3s+Y3q2FML/EUo5CCCu6Mjpnxeh9QZteWOcE3DN7n9GUQ01jCNdzhvjSHMjwhQ/Y1ihq7b/qk+ntRXgdjorAZ4AuHxX0/8v5QIriwyTkRueIS0rEEZWX0SThDP+LDCiipsw9e5OJtH7H+zM9Wckb1xZrVAWEkk5zbvdOzT4f23bB7B67rbDT/FiRprPv3bPgL6HojU1XUYEITxmtxMUq1o07F6J7f9QUQxk515P3dMNNevUgh4DAgfiips8UMjtQglQLCdeeu+/3Om326ZLFfAjztB6Lzj56cgkZedI+w1e9h7PH6Q59JnQbT9NBIbH4saiSLoKOBKbsDUVRv78Xm1UW7Ql0xwmx7fvj0k8DGB+BAgntUdO3fap0Lg0lWrlheO7JvFg/5XNXqg7lWm/z008EZpaNdIQ1yrgCGhz+aXtC/O4n1M4f4FeQa0fhkM/+0a0hCw226tsvSXC/a19qh2BpTU/4T45WtCGrf7IUxtfANUjyesEmtxsY30SWhr9U2AGOTH1tzaYaL+kNTE0/HxrZWzBOH6dUmCjcxn1saFMK01gfyjpvnfytycODNjU1J3txvYURrzNXz7YlNei1ff3dB54WsbWk+esetLZ2QtfwTCfQ15Gj5zGd9pCC/lFe3LAfjtps0D/M3bW5ZeUnQwrfg4CgqeOsxXryYEApLP567yHFhcmsff3j2ep0vr1nP3KbNR7qGFlYpP8QdEAz9u6SlPL9+775n9Ho/7tCNafYP3+eaV8Tf3Q5mZ7vqyAwp+sx+hkVjCU9eHXCIxApEI2DbQnPjTLE+PMwCttUNGJn6fkZW4ipeDlZlZvf+l0tWbEj/KyOq9NiMrcacurF0A/g9btPJP73NR2e3utOyuk/62e1FICI4XiOpPhw4GlPMPAnq5hFdFqPgC4JfbxbPq3+M59IAYlJS1ETTHJERtFiijwMmAwKs4QChT+KME8VmYUgDkSCIYpVJEuJwABgJQN3agFoDIa79YCBrdYmtmjY7uUDTXFdtuKdiPjpXC3lXXtK58wO5vIxzRPIxeUd7Pun+P/6Ye4EEJMiXxW0/m+1lPWHb7H5hwDQLM5fp8iIBqSq4g4I0toETg4wugjxeA7Zz/CdMXaEKMl4jJdl3GZ1a0vnhIn80zUnpnv6/+qeLGG3P8mTyleTwv16jpTf39W17p4k25pQt35uQsPqvjJJfze/yVeuB/AQAA//8FJ895AAAABklEQVQDAPHvu1qmiUKoAAAAAElFTkSuQmCC"
                      x="0"
                      y="0"
                      width="127"
                      height="33"
                      className="customLogo"
                    />
                  </svg>

                  <span
                    className="hero-tagline"
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      color: brand.ink,
                      fontSize: "9px",
                      lineHeight: "14px",
                      letterSpacing: "6px",
                      whiteSpace: "nowrap",
                      display: "block",
                      marginBottom: "50px",
                      marginTop: "10px",
                    }}
                  >
                    IN UNITY, WE LINK THE GLOBE
                  </span>
                  <span
                    className="hero-headline"
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      color: brand.ink,
                      fontSize: "28px",
                      lineHeight: "34px",
                      fontWeight: 900,
                      display: "block",
                    }}
                  >
                    LCL Imports
                    <br />
                    The World Is Closer
                    <br />
                    Than You Think
                  </span>
                </div>

                {/* Hero image */}
                <div
                  className="hero-image-wrap"
                  style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "431px",
                    height: "408px",
                    zIndex: 4,
                    overflow: "hidden",
                  }}
                >
                  <Img
                    src="https://globelinkegypt.com/wp-content/uploads/2026/04/Group-3.png"
                    width="431"
                    height="408"
                    alt="Globelink Hero"
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
        <Section className="content-section" style={styles.content}>
          <Text className="para" style={styles.paragraph}>
            Hello,
          </Text>
          <Text className="para" style={styles.paragraph}>
            In business, time is money. That's why GlobeLink Egypt has created
            the "fast lane" for your LCL Imports, ensuring your goods arrive
            safely and on time.
          </Text>
          <Text className="question" style={styles.question}>
            What Makes Our Import Service Different?
          </Text>

          <Section style={styles.cards}>
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </Section>

          <Text className="para" style={styles.paragraph}>
            Keep Your Supply Chain Moving. We handle the details — from pickup
            to customs coordination — so you can focus on growing your business.
          </Text>
          <Text className="signoff" style={styles.signoff}>
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
    <Row className="card-row">
      <Column className="card-icon-col" style={styles.iconColumn}>
        <ServiceIcon icon={icon} />
      </Column>
      <Column>
        <Text className="card-title" style={styles.cardTitle}>
          {title}
        </Text>
        <Text className="card-body-text" style={styles.cardBody}>
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
  const props = {
    width: "34",
    height: "34",
    style: { display: "block" } as CSSProperties,
  };

  if (icon === "usa")
    return (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          marginTop:"-30px",
          marginLeft:"-10px"
        }}
      >
        <rect width="38" height="38" fill="white" />
        <path
          d="M35.4531 14.6279C35.3384 14.6278 35.2265 14.5917 35.1335 14.5245C35.0404 14.4574 34.9708 14.3627 34.9346 14.2538L34.3877 12.6132C34.3647 12.545 34.3554 12.473 34.3603 12.4012C34.3652 12.3295 34.3843 12.2594 34.4163 12.195C34.4484 12.1306 34.4928 12.0732 34.5471 12.026C34.6014 11.9788 34.6645 11.9428 34.7327 11.92C34.8009 11.8972 34.873 11.8882 34.9447 11.8933C35.0165 11.8984 35.0865 11.9177 35.1508 11.9499C35.2151 11.9822 35.2724 12.0268 35.3194 12.0812C35.3664 12.1356 35.4023 12.1988 35.4248 12.2671L35.9717 13.9077C35.9991 13.9899 36.0065 14.0775 35.9935 14.1631C35.9804 14.2488 35.9472 14.3301 35.8966 14.4004C35.8459 14.4707 35.7793 14.528 35.7022 14.5676C35.6251 14.6071 35.5398 14.6278 35.4531 14.6279Z"
          fill="#1E196B"
        />
        <path
          d="M34.9062 12.987H33.8125C33.6675 12.987 33.5284 12.9294 33.4258 12.8268C33.3232 12.7243 33.2656 12.5852 33.2656 12.4401C33.2656 12.2951 33.3232 12.156 33.4258 12.0534C33.5284 11.9509 33.6675 11.8932 33.8125 11.8932H34.9062C35.0513 11.8932 35.1904 11.9509 35.2929 12.0534C35.3955 12.156 35.4531 12.2951 35.4531 12.4401C35.4531 12.5852 35.3955 12.7243 35.2929 12.8268C35.1904 12.9294 35.0513 12.987 34.9062 12.987Z"
          fill="#1E196B"
        />
        <path
          d="M32.7182 15.1745C32.625 15.1744 32.5334 15.1506 32.452 15.1051C32.3707 15.0597 32.3023 14.9942 32.2533 14.9149C32.2043 14.8357 32.1765 14.7452 32.1723 14.6521C32.1681 14.559 32.1879 14.4664 32.2295 14.383L33.3233 12.1955C33.3554 12.1313 33.3999 12.074 33.4541 12.0269C33.5084 11.9799 33.5714 11.944 33.6395 11.9213C33.7077 11.8985 33.7796 11.8895 33.8513 11.8946C33.9229 11.8997 33.9928 11.9188 34.0571 11.9509C34.1213 11.9831 34.1786 12.0275 34.2257 12.0818C34.2727 12.136 34.3086 12.199 34.3314 12.2672C34.3541 12.3353 34.3631 12.4073 34.3581 12.4789C34.353 12.5505 34.3338 12.6205 34.3017 12.6847L33.2079 14.8722C33.1625 14.9631 33.0925 15.0396 33.006 15.093C32.9195 15.1464 32.8199 15.1746 32.7182 15.1745Z"
          fill="#1E196B"
        />
        <path
          d="M32.7188 15.1745H30.5312C30.3862 15.1745 30.2471 15.1169 30.1446 15.0143C30.042 14.9118 29.9844 14.7727 29.9844 14.6276C29.9844 14.4826 30.042 14.3435 30.1446 14.2409C30.2471 14.1384 30.3862 14.0807 30.5312 14.0807H32.7188C32.8638 14.0807 33.0029 14.1384 33.1054 14.2409C33.208 14.3435 33.2656 14.4826 33.2656 14.6276C33.2656 14.7727 33.208 14.9118 33.1054 15.0143C33.0029 15.1169 32.8638 15.1745 32.7188 15.1745Z"
          fill="#1E196B"
        />
        <path
          d="M30.5312 16.8151C30.4594 16.8151 30.3883 16.801 30.3219 16.7735C30.2556 16.7461 30.1953 16.7058 30.1445 16.655C30.0937 16.6042 30.0534 16.5439 30.026 16.4776C29.9985 16.4112 29.9844 16.3401 29.9844 16.2682V14.6276C29.9844 14.4826 30.042 14.3435 30.1446 14.2409C30.2471 14.1384 30.3862 14.0807 30.5312 14.0807C30.6763 14.0807 30.8154 14.1384 30.9179 14.2409C31.0205 14.3435 31.0781 14.4826 31.0781 14.6276V16.2682C31.0781 16.3401 31.064 16.4112 31.0365 16.4776C31.0091 16.5439 30.9688 16.6042 30.918 16.655C30.8672 16.7058 30.8069 16.7461 30.7406 16.7735C30.6742 16.801 30.6031 16.8151 30.5312 16.8151Z"
          fill="#1E196B"
        />
        <path
          d="M30.5312 16.8151H28.8906C28.7456 16.8151 28.6065 16.7575 28.5039 16.6549C28.4014 16.5524 28.3438 16.4133 28.3438 16.2682C28.3438 16.1232 28.4014 15.9841 28.5039 15.8816C28.6065 15.779 28.7456 15.7214 28.8906 15.7214H30.5312C30.6763 15.7214 30.8154 15.779 30.9179 15.8816C31.0205 15.9841 31.0781 16.1232 31.0781 16.2682C31.0781 16.4133 31.0205 16.5524 30.9179 16.6549C30.8154 16.7575 30.6763 16.8151 30.5312 16.8151Z"
          fill="#1E196B"
        />
        <path
          d="M28.8906 18.4557C28.8188 18.4558 28.7477 18.4416 28.6813 18.4142C28.615 18.3867 28.5547 18.3464 28.5039 18.2956C28.4531 18.2448 28.4128 18.1845 28.3853 18.1182C28.3579 18.0518 28.3437 17.9807 28.3438 17.9089V16.2682C28.3438 16.1232 28.4014 15.9841 28.5039 15.8816C28.6065 15.779 28.7456 15.7214 28.8906 15.7214C29.0357 15.7214 29.1748 15.779 29.2773 15.8816C29.3799 15.9841 29.4375 16.1232 29.4375 16.2682V17.9089C29.4375 17.9807 29.4234 18.0518 29.3959 18.1182C29.3684 18.1845 29.3282 18.2448 29.2774 18.2956C29.2266 18.3464 29.1663 18.3867 29.0999 18.4142C29.0336 18.4416 28.9624 18.4558 28.8906 18.4557Z"
          fill="#1E196B"
        />
        <path
          d="M27.2506 19.5495C27.1331 19.5496 27.0188 19.5119 26.9245 19.442C26.8301 19.3721 26.7608 19.2737 26.7267 19.1614C26.6927 19.049 26.6956 18.9287 26.7352 18.8182C26.7749 18.7076 26.849 18.6128 26.9467 18.5476L28.5873 17.4539C28.708 17.3746 28.8551 17.3463 28.9966 17.3751C29.1381 17.4039 29.2625 17.4874 29.3426 17.6076C29.4227 17.7278 29.452 17.8747 29.4242 18.0164C29.3964 18.1581 29.3136 18.283 29.194 18.3639L27.5534 19.4577C27.4637 19.5176 27.3584 19.5496 27.2506 19.5495Z"
          fill="#1E196B"
        />
        <path
          d="M27.25 19.5495H26.7031C26.5581 19.5495 26.419 19.4919 26.3164 19.3893C26.2139 19.2868 26.1562 19.1477 26.1562 19.0026C26.1562 18.8576 26.2139 18.7185 26.3164 18.6159C26.419 18.5134 26.5581 18.4557 26.7031 18.4557H27.25C27.395 18.4557 27.5341 18.5134 27.6367 18.6159C27.7393 18.7185 27.7969 18.8576 27.7969 19.0026C27.7969 19.1477 27.7393 19.2868 27.6367 19.3893C27.5341 19.4919 27.395 19.5495 27.25 19.5495Z"
          fill="#1E196B"
        />
        <path
          d="M26.7031 19.5495C26.6313 19.5495 26.5602 19.5354 26.4938 19.5079C26.4275 19.4804 26.3672 19.4402 26.3164 19.3894C26.2656 19.3386 26.2253 19.2783 26.1978 19.2119C26.1704 19.1456 26.1562 19.0744 26.1563 19.0026V16.2682C26.1563 16.1232 26.2139 15.9841 26.3164 15.8816C26.419 15.779 26.5581 15.7214 26.7031 15.7214C26.8482 15.7214 26.9873 15.779 27.0898 15.8816C27.1924 15.9841 27.25 16.1232 27.25 16.2682V19.0026C27.25 19.0744 27.2359 19.1456 27.2084 19.2119C27.1809 19.2783 27.1407 19.3386 27.0899 19.3894C27.0391 19.4402 26.9788 19.4804 26.9124 19.5079C26.8461 19.5354 26.7749 19.5495 26.7031 19.5495Z"
          fill="#1E196B"
        />
        <path
          d="M26.7031 16.8152C26.6313 16.8153 26.5602 16.8011 26.4938 16.7736C26.4275 16.7461 26.3672 16.7058 26.3165 16.6549L24.6759 15.0143C24.5746 14.9115 24.5181 14.7728 24.5187 14.6286C24.5193 14.4843 24.5768 14.3461 24.6789 14.244C24.7809 14.142 24.9191 14.0844 25.0634 14.0839C25.2077 14.0833 25.3463 14.1398 25.4491 14.241L27.0898 15.8816C27.1662 15.9581 27.2183 16.0556 27.2394 16.1616C27.2605 16.2677 27.2496 16.3776 27.2083 16.4775C27.1669 16.5775 27.0968 16.6629 27.0069 16.723C26.917 16.783 26.8113 16.8151 26.7031 16.8152Z"
          fill="#1E196B"
        />
        <path
          d="M25.0625 15.1745H24.09C23.9449 15.1745 23.8058 15.1169 23.7033 15.0143C23.6007 14.9118 23.5431 14.7727 23.5431 14.6276C23.5431 14.4826 23.6007 14.3435 23.7033 14.2409C23.8058 14.1384 23.9449 14.0807 24.09 14.0807H25.0625C25.2075 14.0807 25.3466 14.1384 25.4492 14.2409C25.5518 14.3435 25.6094 14.4826 25.6094 14.6276C25.6094 14.7727 25.5518 14.9118 25.4492 15.0143C25.3466 15.1169 25.2075 15.1745 25.0625 15.1745Z"
          fill="#1E196B"
        />
        <path
          d="M11.3912 12.7614C11.3689 12.7614 11.3466 12.76 11.3244 12.7574L4.21504 11.8893C4.07106 11.8717 3.93996 11.7977 3.85057 11.6834C3.76118 11.5692 3.72083 11.4242 3.73839 11.2802C3.75596 11.1362 3.82999 11.0051 3.94422 10.9157C4.05845 10.8263 4.20351 10.786 4.34748 10.8035L11.4569 11.6716C11.5951 11.6885 11.7218 11.7574 11.8109 11.8644C11.9001 11.9714 11.9451 12.1084 11.9367 12.2474C11.9283 12.3864 11.8672 12.517 11.7658 12.6125C11.6645 12.7081 11.5305 12.7613 11.3912 12.7614Z"
          fill="#1E196B"
        />
        <path
          d="M3.73437 12.4402C3.62623 12.4401 3.52052 12.408 3.43061 12.348C3.34069 12.2879 3.27062 12.2025 3.22924 12.1025C3.18785 12.0026 3.17702 11.8927 3.19812 11.7866C3.21921 11.6806 3.27127 11.5831 3.34773 11.5066L3.89461 10.9598C3.99743 10.8585 4.13609 10.8021 4.28037 10.8026C4.42466 10.8032 4.56287 10.8607 4.66489 10.9628C4.76692 11.0648 4.82448 11.203 4.82504 11.3473C4.8256 11.4916 4.76912 11.6302 4.66789 11.7331L4.12101 12.2799C4.0703 12.3308 4.01004 12.3711 3.94368 12.3986C3.87733 12.4261 3.8062 12.4402 3.73437 12.4402Z"
          fill="#1E196B"
        />
        <path
          d="M3.73383 12.4402C3.64909 12.4402 3.56551 12.4205 3.48976 12.3825L2.39601 11.8356C2.26662 11.7705 2.16833 11.6568 2.1227 11.5193C2.07706 11.3819 2.08781 11.2319 2.15258 11.1024C2.21735 10.9728 2.33086 10.8743 2.4682 10.8283C2.60555 10.7824 2.75552 10.7927 2.88521 10.8572L3.97896 11.4041C4.08923 11.4592 4.17764 11.5499 4.22987 11.6616C4.28209 11.7732 4.29507 11.8992 4.26669 12.0192C4.23831 12.1392 4.17024 12.246 4.07351 12.3224C3.97679 12.3988 3.85709 12.4403 3.73383 12.4402Z"
          fill="#1E196B"
        />
        <path
          d="M2.64062 14.0807C2.5688 14.0808 2.49768 14.0666 2.43132 14.0392C2.36496 14.0117 2.30467 13.9714 2.25388 13.9206C2.2031 13.8698 2.16282 13.8095 2.13534 13.7432C2.10786 13.6768 2.09373 13.6057 2.09375 13.5339V11.3464C2.09375 11.2013 2.15137 11.0622 2.25393 10.9597C2.35648 10.8571 2.49558 10.7995 2.64062 10.7995C2.78567 10.7995 2.92477 10.8571 3.02732 10.9597C3.12988 11.0622 3.1875 11.2013 3.1875 11.3464V13.5339C3.18752 13.6057 3.17339 13.6768 3.14591 13.7432C3.11843 13.8095 3.07815 13.8698 3.02737 13.9206C2.97658 13.9714 2.91629 14.0117 2.84993 14.0392C2.78357 14.0666 2.71245 14.0808 2.64062 14.0807Z"
          fill="#1E196B"
        />
        <path
          d="M1.54633 16.2682C1.45314 16.2682 1.36152 16.2443 1.28015 16.1989C1.19878 16.1535 1.13038 16.088 1.08142 16.0087C1.03247 15.9294 1.00459 15.8389 1.00043 15.7458C0.996273 15.6527 1.01598 15.5601 1.05767 15.4768L2.15142 13.2893C2.18354 13.225 2.228 13.1677 2.28226 13.1207C2.33652 13.0736 2.39952 13.0377 2.46766 13.015C2.5358 12.9923 2.60774 12.9832 2.67939 12.9883C2.75103 12.9934 2.82097 13.0126 2.88521 13.0447C2.94945 13.0768 3.00674 13.1213 3.0538 13.1755C3.10086 13.2298 3.13677 13.2928 3.15948 13.3609C3.1822 13.4291 3.19127 13.501 3.18618 13.5726C3.18108 13.6443 3.16193 13.7142 3.12981 13.7785L2.03606 15.966C1.99059 16.0569 1.92067 16.1333 1.83417 16.1867C1.74766 16.2401 1.64798 16.2684 1.54633 16.2682Z"
          fill="#1E196B"
        />
        <path
          d="M1.54688 21.1901C1.47505 21.1902 1.40391 21.176 1.33755 21.1486C1.27118 21.1211 1.21087 21.0808 1.16008 21.03C1.10929 20.9793 1.06901 20.9189 1.04154 20.8526C1.01408 20.7862 0.999958 20.7151 1 20.6432V15.7214C1 15.5763 1.05762 15.4372 1.16018 15.3347C1.26274 15.2321 1.40183 15.1745 1.54688 15.1745C1.69192 15.1745 1.83102 15.2321 1.93357 15.3347C2.03613 15.4372 2.09375 15.5763 2.09375 15.7214V20.6432C2.09379 20.7151 2.07967 20.7862 2.05221 20.8526C2.02474 20.9189 1.98446 20.9793 1.93367 21.03C1.88288 21.0808 1.82257 21.1211 1.7562 21.1486C1.68984 21.176 1.6187 21.1902 1.54688 21.1901Z"
          fill="#1E196B"
        />
        <path
          d="M3.73492 26.112C3.62855 26.1122 3.52445 26.0813 3.43538 26.0231C3.34631 25.965 3.27613 25.8821 3.23343 25.7847L1.04593 20.7923C0.988655 20.6596 0.986232 20.5096 1.03919 20.3751C1.09215 20.2407 1.19619 20.1326 1.32858 20.0746C1.46096 20.0166 1.61092 20.0134 1.74569 20.0656C1.88046 20.1178 1.98908 20.2212 2.04781 20.3533L4.23531 25.3457C4.29352 25.4785 4.29657 25.6291 4.24378 25.7642C4.191 25.8993 4.08671 26.0079 3.95386 26.0661C3.88488 26.0965 3.8103 26.1122 3.73492 26.112Z"
          fill="#1E196B"
        />
        <path
          d="M9.75 28.2995C9.68624 28.2994 9.62298 28.2882 9.56308 28.2664L3.54745 26.0789C3.41119 26.0293 3.30021 25.9277 3.23891 25.7963C3.17762 25.6649 3.17103 25.5145 3.22061 25.3782C3.27018 25.242 3.37186 25.131 3.50326 25.0697C3.63466 25.0084 3.78504 25.0018 3.92129 25.0514L9.93692 27.2389C10.0577 27.2829 10.1591 27.368 10.2234 27.4793C10.2877 27.5906 10.3107 27.721 10.2884 27.8476C10.2661 27.9742 10.1999 28.0889 10.1014 28.1715C10.003 28.2542 9.87854 28.2995 9.75 28.2995Z"
          fill="#1E196B"
        />
        <path
          d="M9.75 28.2995C9.64185 28.2995 9.53614 28.2674 9.44623 28.2073C9.35632 28.1472 9.28624 28.0618 9.24486 27.9619C9.20348 27.862 9.19265 27.7521 9.21374 27.646C9.23483 27.5399 9.2869 27.4425 9.36336 27.366L9.91023 26.8191C10.0131 26.7179 10.1517 26.6614 10.296 26.662C10.4403 26.6626 10.5785 26.7201 10.6805 26.8222C10.7825 26.9242 10.8401 27.0624 10.8407 27.2067C10.8412 27.351 10.7847 27.4896 10.6835 27.5924L10.1366 28.1393C10.0859 28.1902 10.0257 28.2305 9.95931 28.258C9.89295 28.2855 9.82182 28.2996 9.75 28.2995Z"
          fill="#1E196B"
        />
        <path
          d="M11.3906 27.7526H10.2969C10.1518 27.7526 10.0127 27.695 9.91018 27.5924C9.80762 27.4899 9.75 27.3508 9.75 27.2057C9.75 27.0607 9.80762 26.9216 9.91018 26.8191C10.0127 26.7165 10.1518 26.6589 10.2969 26.6589H11.3906C11.5357 26.6589 11.6748 26.7165 11.7773 26.8191C11.8799 26.9216 11.9375 27.0607 11.9375 27.2057C11.9375 27.3508 11.8799 27.4899 11.7773 27.5924C11.6748 27.695 11.5357 27.7526 11.3906 27.7526Z"
          fill="#1E196B"
        />
        <path
          d="M13.0318 30.487C12.9373 30.4872 12.8443 30.4628 12.762 30.4163C12.6798 30.3697 12.611 30.3027 12.5624 30.2216L10.9217 27.4872C10.8471 27.3628 10.8249 27.2139 10.8601 27.0732C10.8952 26.9325 10.9848 26.8115 11.1092 26.7369C11.2335 26.6622 11.3825 26.64 11.5232 26.6752C11.6639 26.7103 11.7849 26.8 11.8595 26.9243L13.5002 29.6587C13.55 29.7416 13.5768 29.8363 13.5781 29.933C13.5794 30.0298 13.5549 30.1251 13.5073 30.2093C13.4597 30.2935 13.3906 30.3636 13.3071 30.4124C13.2235 30.4612 13.1285 30.4869 13.0318 30.487Z"
          fill="#1E196B"
        />
        <path
          d="M13.5781 30.487H13.0312C12.8862 30.487 12.7471 30.4294 12.6446 30.3268C12.542 30.2243 12.4844 30.0852 12.4844 29.9401C12.4844 29.7951 12.542 29.656 12.6446 29.5534C12.7471 29.4509 12.8862 29.3932 13.0312 29.3932H13.5781C13.7232 29.3932 13.8623 29.4509 13.9648 29.5534C14.0674 29.656 14.125 29.7951 14.125 29.9401C14.125 30.0852 14.0674 30.2243 13.9648 30.3268C13.8623 30.4294 13.7232 30.487 13.5781 30.487Z"
          fill="#1E196B"
        />
        <path
          d="M13.5781 30.487C13.47 30.487 13.3643 30.4549 13.2744 30.3948C13.1844 30.3347 13.1144 30.2493 13.073 30.1494C13.0316 30.0495 13.0208 29.9396 13.0419 29.8335C13.063 29.7274 13.115 29.63 13.1915 29.5535L13.7384 29.0066C13.8412 28.9054 13.9798 28.8489 14.1241 28.8495C14.2684 28.8501 14.4066 28.9076 14.5086 29.0097C14.6107 29.1117 14.6682 29.2499 14.6688 29.3942C14.6694 29.5385 14.6129 29.6771 14.5116 29.7799L13.9648 30.3268C13.9141 30.3777 13.8538 30.418 13.7874 30.4455C13.7211 30.473 13.6499 30.4871 13.5781 30.487Z"
          fill="#1E196B"
        />
        <path
          d="M15.2188 29.9401H14.125C13.98 29.9401 13.8409 29.8825 13.7383 29.7799C13.6357 29.6774 13.5781 29.5383 13.5781 29.3932C13.5781 29.2482 13.6357 29.1091 13.7383 29.0066C13.8409 28.904 13.98 28.8464 14.125 28.8464H15.2188C15.3638 28.8464 15.5029 28.904 15.6054 29.0066C15.708 29.1091 15.7656 29.2482 15.7656 29.3932C15.7656 29.5383 15.708 29.6774 15.6054 29.7799C15.5029 29.8825 15.3638 29.9401 15.2188 29.9401Z"
          fill="#1E196B"
        />
        <path
          d="M16.8599 33.2214C16.7583 33.2215 16.6586 33.1933 16.5721 33.1399C16.4856 33.0865 16.4157 33.01 16.3702 32.9191L14.7296 29.6378C14.6974 29.5736 14.6783 29.5037 14.6732 29.432C14.6681 29.3604 14.6772 29.2884 14.6999 29.2203C14.7226 29.1522 14.7585 29.0892 14.8056 29.0349C14.8526 28.9806 14.9099 28.9362 14.9742 28.9041C15.1039 28.8392 15.2541 28.8285 15.3917 28.8744C15.4599 28.8971 15.5229 28.933 15.5771 28.9801C15.6314 29.0271 15.6758 29.0844 15.708 29.1487L17.3486 32.4299C17.3903 32.5132 17.41 32.6059 17.4058 32.699C17.4017 32.792 17.3738 32.8825 17.3248 32.9618C17.2759 33.0411 17.2075 33.1066 17.1261 33.152C17.0447 33.1974 16.9531 33.2213 16.8599 33.2214Z"
          fill="#1E196B"
        />
        <path
          d="M17.9531 33.2214H16.8594C16.7143 33.2214 16.5752 33.1638 16.4727 33.0612C16.3701 32.9586 16.3125 32.8195 16.3125 32.6745C16.3125 32.5295 16.3701 32.3904 16.4727 32.2878C16.5752 32.1852 16.7143 32.1276 16.8594 32.1276H17.9531C18.0982 32.1276 18.2373 32.1852 18.3398 32.2878C18.4424 32.3904 18.5 32.5295 18.5 32.6745C18.5 32.8195 18.4424 32.9586 18.3398 33.0612C18.2373 33.1638 18.0982 33.2214 17.9531 33.2214Z"
          fill="#1E196B"
        />
        <path
          d="M17.9537 31.5808C17.8304 31.5809 17.7107 31.5394 17.614 31.463C17.5173 31.3866 17.4492 31.2798 17.4208 31.1598C17.3924 31.0399 17.4054 30.9139 17.4576 30.8022C17.5099 30.6905 17.5983 30.5998 17.7085 30.5447L19.896 29.451C20.0257 29.3865 20.1757 29.3761 20.313 29.4221C20.4504 29.468 20.5639 29.5666 20.6287 29.6961C20.6934 29.8257 20.7042 29.9756 20.6585 30.1131C20.6129 30.2505 20.5146 30.3643 20.3852 30.4294L18.1977 31.5231C18.1219 31.561 18.0384 31.5807 17.9537 31.5808Z"
          fill="#1E196B"
        />
        <path
          d="M23.4219 30.487H20.1406C19.9956 30.487 19.8565 30.4294 19.7539 30.3268C19.6514 30.2243 19.5938 30.0852 19.5938 29.9401C19.5938 29.7951 19.6514 29.656 19.7539 29.5534C19.8565 29.4509 19.9956 29.3932 20.1406 29.3932H23.4219C23.5669 29.3932 23.706 29.4509 23.8086 29.5534C23.9111 29.656 23.9688 29.7951 23.9688 29.9401C23.9688 30.0852 23.9111 30.2243 23.8086 30.3268C23.706 30.4294 23.5669 30.487 23.4219 30.487Z"
          fill="#1E196B"
        />
        <path
          d="M17.9531 33.2214C17.8813 33.2214 17.8102 33.2073 17.7438 33.1798C17.6774 33.1524 17.6171 33.1121 17.5663 33.0613C17.5155 33.0105 17.4753 32.9502 17.4478 32.8838C17.4203 32.8175 17.4062 32.7463 17.4063 32.6745V31.0339C17.4063 30.8888 17.4639 30.7497 17.5664 30.6472C17.669 30.5446 17.8081 30.487 17.9531 30.487C18.0982 30.487 18.2373 30.5446 18.3398 30.6472C18.4424 30.7497 18.5 30.8888 18.5 31.0339V32.6745C18.5 32.7463 18.4859 32.8175 18.4585 32.8838C18.431 32.9502 18.3907 33.0105 18.3399 33.0613C18.2891 33.1121 18.2288 33.1524 18.1625 33.1798C18.0961 33.2073 18.025 33.2214 17.9531 33.2214Z"
          fill="#1E196B"
        />
        <path
          d="M23.4213 30.487C23.3281 30.4869 23.2365 30.4631 23.1552 30.4176C23.0738 30.3722 23.0054 30.3067 22.9564 30.2274C22.9075 30.1482 22.8796 30.0577 22.8754 29.9646C22.8713 29.8715 22.891 29.7789 22.9327 29.6955L23.4795 28.6018C23.5444 28.472 23.6582 28.3734 23.7958 28.3275C23.9334 28.2816 24.0836 28.2923 24.2133 28.3572C24.3431 28.4221 24.4417 28.5358 24.4876 28.6734C24.5335 28.811 24.5228 28.9612 24.4579 29.091L23.9111 30.1847C23.8656 30.2756 23.7957 30.3521 23.7092 30.4055C23.6227 30.4589 23.523 30.4871 23.4213 30.487Z"
          fill="#1E196B"
        />
        <path
          d="M27.7969 29.3932H23.9688C23.8237 29.3932 23.6846 29.3356 23.5821 29.2331C23.4795 29.1305 23.4219 28.9914 23.4219 28.8464C23.4219 28.7013 23.4795 28.5622 23.5821 28.4597C23.6846 28.3571 23.8237 28.2995 23.9688 28.2995H27.7969C27.9419 28.2995 28.081 28.3571 28.1836 28.4597C28.2861 28.5622 28.3438 28.7013 28.3438 28.8464C28.3438 28.9914 28.2861 29.1305 28.1836 29.2331C28.081 29.3356 27.9419 29.3932 27.7969 29.3932Z"
          fill="#1E196B"
        />
        <path
          d="M28.8906 32.6745C28.7759 32.6745 28.6641 32.6384 28.571 32.5713C28.4779 32.5042 28.4083 32.4095 28.3721 32.3007L27.2783 29.0194C27.2553 28.9513 27.246 28.8792 27.251 28.8075C27.2559 28.7357 27.2749 28.6656 27.307 28.6012C27.339 28.5368 27.3834 28.4794 27.4377 28.4322C27.492 28.385 27.5551 28.349 27.6233 28.3263C27.6916 28.3035 27.7636 28.2944 27.8353 28.2995C27.9071 28.3047 27.9771 28.3239 28.0414 28.3562C28.1057 28.3884 28.163 28.433 28.21 28.4874C28.2571 28.5419 28.2929 28.6051 28.3154 28.6733L29.4092 31.9546C29.4365 32.0368 29.444 32.1243 29.4309 32.2099C29.4178 32.2956 29.3846 32.3768 29.334 32.4471C29.2833 32.5174 29.2167 32.5747 29.1397 32.6142C29.0626 32.6537 28.9772 32.6744 28.8906 32.6745Z"
          fill="#1E196B"
        />
        <path
          d="M31.0781 32.6745H28.8906C28.7456 32.6745 28.6065 32.6169 28.5039 32.5143C28.4014 32.4118 28.3438 32.2727 28.3438 32.1276C28.3438 31.9826 28.4014 31.8435 28.5039 31.7409C28.6065 31.6384 28.7456 31.5807 28.8906 31.5807H31.0781C31.2232 31.5807 31.3623 31.6384 31.4648 31.7409C31.5674 31.8435 31.625 31.9826 31.625 32.1276C31.625 32.2727 31.5674 32.4118 31.4648 32.5143C31.3623 32.6169 31.2232 32.6745 31.0781 32.6745Z"
          fill="#1E196B"
        />
        <path
          d="M31.0781 32.6745C30.9668 32.6745 30.8582 32.6406 30.7666 32.5772C30.6751 32.5138 30.6051 32.4241 30.566 32.3199L28.9253 27.9449C28.8996 27.8775 28.8875 27.8058 28.8896 27.7337C28.8917 27.6616 28.9081 27.5907 28.9377 27.525C28.9673 27.4593 29.0097 27.4 29.0623 27.3507C29.1149 27.3014 29.1767 27.263 29.2442 27.2377C29.3117 27.2123 29.3835 27.2006 29.4555 27.2031C29.5276 27.2056 29.5984 27.2223 29.664 27.2523C29.7296 27.2823 29.7885 27.325 29.8376 27.3778C29.8866 27.4307 29.9247 27.4927 29.9496 27.5604L31.5903 31.9354C31.6214 32.0181 31.632 32.1072 31.6212 32.1949C31.6103 32.2827 31.5783 32.3665 31.528 32.4392C31.4776 32.5119 31.4104 32.5713 31.332 32.6122C31.2537 32.6532 31.1665 32.6746 31.0781 32.6745Z"
          fill="#1E196B"
        />
        <path
          d="M29.4375 27.2058C29.3294 27.2058 29.2236 27.1737 29.1337 27.1136C29.0438 27.0535 28.9737 26.9681 28.9324 26.8682C28.891 26.7683 28.8801 26.6583 28.9012 26.5522C28.9223 26.4462 28.9744 26.3487 29.0509 26.2723L31.7852 23.5379C31.8881 23.4367 32.0267 23.3802 32.171 23.3807C32.3153 23.3813 32.4535 23.4389 32.5555 23.5409C32.6575 23.6429 32.7151 23.7811 32.7157 23.9254C32.7162 24.0697 32.6597 24.2084 32.5585 24.3112L29.8241 27.0456C29.7734 27.0964 29.7132 27.1368 29.6468 27.1643C29.5805 27.1918 29.5093 27.2059 29.4375 27.2058Z"
          fill="#1E196B"
        />
        <path
          d="M29.4375 28.2995C29.3657 28.2995 29.2945 28.2854 29.2282 28.258C29.1618 28.2305 29.1015 28.1902 29.0507 28.1394C28.9999 28.0886 28.9596 28.0283 28.9322 27.962C28.9047 27.8956 28.8906 27.8245 28.8906 27.7526V26.6589C28.8906 26.5138 28.9482 26.3747 29.0508 26.2722C29.1534 26.1696 29.2925 26.112 29.4375 26.112C29.5825 26.112 29.7216 26.1696 29.8242 26.2722C29.9268 26.3747 29.9844 26.5138 29.9844 26.6589V27.7526C29.9844 27.8245 29.9703 27.8956 29.9428 27.962C29.9154 28.0283 29.8751 28.0886 29.8243 28.1394C29.7735 28.1902 29.7132 28.2305 29.6468 28.258C29.5805 28.2854 29.5093 28.2995 29.4375 28.2995Z"
          fill="#1E196B"
        />
        <path
          d="M32.1724 24.4714C32.1521 24.4714 32.1318 24.4703 32.1115 24.4682C31.9674 24.4521 31.8356 24.3794 31.7449 24.2661C31.6543 24.1529 31.6123 24.0083 31.6282 23.8642L32.1751 18.9423C32.1915 18.7984 32.2643 18.6669 32.3774 18.5766C32.4906 18.4863 32.635 18.4446 32.7789 18.4606C32.9228 18.4765 33.0546 18.5489 33.1452 18.6618C33.2358 18.7748 33.278 18.919 33.2624 19.063L32.7156 23.9849C32.7007 24.1186 32.6371 24.2421 32.5369 24.3318C32.4367 24.4216 32.3069 24.4713 32.1724 24.4714Z"
          fill="#1E196B"
        />
        <path
          d="M32.7182 18.4558C32.5848 18.4557 32.456 18.4067 32.3561 18.3183C32.2563 18.2298 32.1922 18.1078 32.176 17.9754C32.1597 17.8429 32.1925 17.7091 32.2681 17.5992C32.3437 17.4892 32.4568 17.4107 32.5863 17.3783L34.7738 16.8315C34.9142 16.7972 35.0625 16.8199 35.1862 16.8946C35.31 16.9694 35.3991 17.09 35.4341 17.2303C35.4691 17.3705 35.4472 17.5189 35.3731 17.643C35.299 17.7672 35.1788 17.8569 35.0387 17.8926L32.8512 18.4395C32.8077 18.4504 32.763 18.4559 32.7182 18.4558Z"
          fill="#1E196B"
        />
        <path
          d="M32.7188 19.5495C32.6469 19.5495 32.5758 19.5354 32.5094 19.5079C32.4431 19.4804 32.3828 19.4402 32.332 19.3894C32.2812 19.3386 32.2409 19.2783 32.2135 19.2119C32.186 19.1456 32.1719 19.0744 32.1719 19.0026V17.9089C32.1719 17.7638 32.2295 17.6247 32.3321 17.5222C32.4346 17.4196 32.5737 17.362 32.7188 17.362C32.8638 17.362 33.0029 17.4196 33.1054 17.5222C33.208 17.6247 33.2656 17.7638 33.2656 17.9089V19.0026C33.2656 19.0744 33.2515 19.1456 33.224 19.2119C33.1966 19.2783 33.1563 19.3386 33.1055 19.3894C33.0547 19.4402 32.9944 19.4804 32.9281 19.5079C32.8617 19.5354 32.7906 19.5495 32.7188 19.5495Z"
          fill="#1E196B"
        />
        <path
          d="M34.9062 17.9089C34.8344 17.9089 34.7633 17.8948 34.6969 17.8673C34.6306 17.8398 34.5703 17.7995 34.5195 17.7487C34.4687 17.698 34.4284 17.6377 34.401 17.5713C34.3735 17.5049 34.3594 17.4338 34.3594 17.362V15.7214C34.3594 15.5763 34.417 15.4372 34.5196 15.3347C34.6221 15.2321 34.7612 15.1745 34.9062 15.1745C35.0513 15.1745 35.1904 15.2321 35.2929 15.3347C35.3955 15.4372 35.4531 15.5763 35.4531 15.7214V17.362C35.4531 17.4338 35.439 17.5049 35.4115 17.5713C35.3841 17.6377 35.3438 17.698 35.293 17.7487C35.2422 17.7995 35.1819 17.8398 35.1156 17.8673C35.0492 17.8948 34.9781 17.9089 34.9062 17.9089Z"
          fill="#1E196B"
        />
        <path
          d="M34.9062 16.2685C34.8196 16.2684 34.7342 16.2477 34.6571 16.2082C34.58 16.1686 34.5134 16.1113 34.4628 16.041C34.4122 15.9707 34.379 15.8894 34.3659 15.8037C34.3529 15.7181 34.3603 15.6306 34.3877 15.5483L34.9346 13.9077C34.9571 13.8394 34.9929 13.7763 35.04 13.7218C35.087 13.6674 35.1443 13.6228 35.2086 13.5905C35.2729 13.5583 35.3429 13.5391 35.4146 13.5339C35.4864 13.5288 35.5584 13.5379 35.6267 13.5606C35.6949 13.5834 35.758 13.6194 35.8123 13.6666C35.8665 13.7138 35.911 13.7712 35.943 13.8356C35.9751 13.9 35.9941 13.9701 35.999 14.0418C36.004 14.1136 35.9947 14.1856 35.9717 14.2538L35.4248 15.8944C35.3886 16.0033 35.319 16.098 35.2259 16.1652C35.1328 16.2323 35.021 16.2685 34.9062 16.2685Z"
          fill="#1E196B"
        />
        <path
          d="M17.9531 23.9192C17.8251 23.9193 17.7012 23.8745 17.6028 23.7926C17.3272 23.5624 10.8438 18.0883 10.8438 11.8879C10.8438 10.0024 11.5928 8.19412 12.926 6.86085C14.2593 5.52759 16.0676 4.77856 17.9531 4.77856C19.8386 4.77856 21.6469 5.52759 22.9802 6.86085C24.3135 8.19412 25.0625 10.0024 25.0625 11.8879C25.0625 18.0883 18.579 23.5624 18.3035 23.7926C18.2051 23.8745 18.0811 23.9193 17.9531 23.9192ZM17.9531 5.87231C16.3582 5.87412 14.8292 6.50848 13.7014 7.63624C12.5737 8.764 11.9393 10.293 11.9375 11.8879C11.9375 16.7951 16.6191 21.423 17.9531 22.6417C19.2867 21.4219 23.9688 16.7882 23.9688 11.8879C23.9669 10.293 23.3326 8.764 22.2048 7.63624C21.0771 6.50848 19.548 5.87412 17.9531 5.87231Z"
          fill="#BFCD30"
        />
        <path
          d="M17.9531 15.7161C17.196 15.7161 16.4559 15.4915 15.8263 15.0709C15.1968 14.6503 14.7061 14.0524 14.4164 13.3529C14.1267 12.6534 14.0508 11.8837 14.1986 11.1411C14.3463 10.3985 14.7109 9.71642 15.2462 9.18105C15.7816 8.64568 16.4637 8.28108 17.2063 8.13337C17.9489 7.98566 18.7186 8.06147 19.4181 8.35121C20.1176 8.64096 20.7155 9.13162 21.1361 9.76115C21.5567 10.3907 21.7813 11.1308 21.7813 11.8879C21.7801 12.9029 21.3764 13.8759 20.6587 14.5935C19.9411 15.3112 18.968 15.7149 17.9531 15.7161ZM17.9531 9.15357C17.4123 9.15357 16.8837 9.31393 16.434 9.61439C15.9843 9.91485 15.6339 10.3419 15.4269 10.8415C15.2199 11.3412 15.1658 11.891 15.2713 12.4214C15.3768 12.9518 15.6372 13.439 16.0196 13.8214C16.402 14.2038 16.8893 14.4643 17.4197 14.5698C17.9501 14.6753 18.4999 14.6211 18.9995 14.4142C19.4992 14.2072 19.9262 13.8567 20.2267 13.4071C20.5271 12.9574 20.6875 12.4287 20.6875 11.8879C20.6867 11.163 20.3983 10.468 19.8857 9.95539C19.3731 9.44278 18.6781 9.15442 17.9531 9.15357Z"
          fill="#BFCD30"
        />
      </svg>
    );
  if (icon === "china")
    return (
      <svg
        width="36"
        height="30"
        viewBox="0 0 36 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          marginTop:"-40px",
          marginLeft:"-10px"
        }}
      >
        <path
          d="M23.4203 27.6906C21.4509 28.6853 20.577 28.6391 20.2926 28.5728C19.7773 28.4532 19.7376 28.2726 19.6718 27.9736C19.6226 27.7503 19.5483 27.4128 19.2216 27.221C18.8771 27.0188 18.4467 27.1093 18.1102 27.2106C17.3269 27.4466 16.7973 27.7956 16.3717 28.0761C15.9303 28.367 15.6387 28.5592 15.2289 28.5592C15.0299 28.5592 14.7621 28.2784 14.5777 27.8763C14.3038 27.2793 14.2718 26.5718 14.5062 26.2993C15.588 25.0422 14.6577 23.9611 14.0421 23.2456C13.6273 22.7636 13.1993 22.5167 12.7337 22.4908C12.0714 22.4527 11.5169 22.8851 11.1084 23.2648C10.6444 23.6962 10.3891 23.586 9.77238 23.3195C9.70017 23.2882 9.62668 23.2564 9.55158 23.2253C8.90173 22.9556 8.37261 23.1922 7.90583 23.4008C7.62882 23.5247 7.36726 23.6416 7.05542 23.6819C6.65196 23.7338 6.07891 22.9702 5.70057 22.4646C5.51777 22.2204 5.34507 21.9897 5.17568 21.8107C4.61299 21.2162 4.16525 21.3312 3.76533 21.5439C3.64636 21.6072 3.57704 21.6418 3.4824 21.6451C3.41583 21.6141 3.23868 21.4363 3.13438 21.1242C3.05222 20.8784 3.07697 20.7222 3.09665 20.6873C3.27351 20.5549 3.38423 20.3684 3.41688 20.1476C3.4764 19.7458 3.27831 19.2833 2.73311 18.5512C2.55864 18.317 2.22726 18.2686 1.99299 18.4429C1.75872 18.6175 1.7102 18.9488 1.88467 19.183C2.20279 19.6103 2.31217 19.8323 2.34969 19.9371C2.00696 20.2752 1.92289 20.8282 2.1279 21.45C2.33354 22.0738 2.82726 22.7032 3.46667 22.7032C3.8381 22.7032 4.09311 22.5676 4.26187 22.4779C4.27823 22.4693 4.29727 22.4591 4.31504 22.4501C4.33697 22.4681 4.36758 22.4958 4.40742 22.5379C4.53478 22.6726 4.68965 22.8795 4.85368 23.0986C5.44175 23.8845 6.17348 24.8628 7.19096 24.7311C7.65703 24.6709 8.03439 24.5022 8.33763 24.3666C8.76703 24.1746 8.936 24.1153 9.14608 24.2024C9.21632 24.2316 9.28508 24.2613 9.35264 24.2905C10.0236 24.5804 10.8587 24.9414 11.8286 24.0397C12.1971 23.6971 12.4733 23.5354 12.6748 23.5471C12.8357 23.556 13.026 23.6868 13.2403 23.9358C14.074 24.9046 14.0885 25.1632 13.7044 25.6095C13.2723 26.1114 13.0776 27.1435 13.6161 28.3175C13.9895 29.1312 14.5924 29.6171 15.2289 29.6171C15.9558 29.6171 16.4631 29.2828 16.9537 28.9595C17.3599 28.6918 17.7799 28.415 18.4152 28.2236C18.5099 28.1951 18.5805 28.1786 18.6316 28.1693C18.6341 28.1803 18.6364 28.191 18.6386 28.2011C18.7257 28.5965 18.8876 29.3324 20.053 29.6032C20.2216 29.6425 20.4023 29.6604 20.5918 29.6604C21.628 29.6603 22.9235 29.1266 23.8972 28.6348C24.1579 28.5032 24.2625 28.185 24.1308 27.9243C23.9991 27.6635 23.6809 27.5588 23.4203 27.6906Z"
          fill="#1E196B"
        />
        <path
          d="M35.1216 6.42473C34.6959 6.19046 34.4379 6.20005 33.9694 6.21747C33.8023 6.22367 33.5945 6.23136 33.3191 6.23136C33.3129 6.23136 33.3079 6.23108 33.3042 6.23079C33.2318 6.1401 33.1791 5.79088 33.1504 5.60041C33.11 5.33207 33.0681 5.05471 32.9635 4.81515C32.7458 4.31728 32.3611 4.21819 32.1253 4.20839C31.9809 4.06199 31.7976 3.43351 31.6864 3.05171C31.4716 2.3149 31.228 1.47972 30.7376 0.925708C29.9514 0.0377071 28.2549 -0.205379 27.2634 0.170428C26.7055 0.38185 26.3856 0.784948 26.3856 1.27634C26.3856 1.56068 26.4151 1.82309 26.441 2.05461C26.5101 2.66998 26.5518 3.04134 26.1203 3.54281C25.9288 3.76538 25.8065 3.75607 25.5112 3.73308C25.1008 3.70156 24.414 3.64824 23.9608 4.6488L23.9038 4.77439C23.4576 5.7571 23.1629 6.40632 23.5727 6.86809C23.954 7.29799 24.6051 7.0915 24.8833 7.00335C25.5572 6.78981 26.244 6.99242 26.4207 7.22585C26.4506 7.26541 26.5129 7.34764 26.3603 7.57937C26.2022 7.81956 26.2023 7.81977 25.9054 7.79361C25.6613 7.77231 25.3271 7.74319 24.8771 7.84488C24.3797 7.95736 23.8475 8.20616 23.2499 8.60545C22.4121 9.16525 21.9737 9.76503 21.5869 10.2942C21.2947 10.694 21.058 11.0177 20.7025 11.261C20.9926 10.5097 21.139 9.76947 21.139 9.04395C21.139 6.21465 18.8372 3.91284 16.0079 3.91284C14.771 3.91284 13.5762 4.35917 12.6436 5.16966C12.4231 5.36127 12.3997 5.69533 12.5913 5.91585C12.7829 6.13622 13.1169 6.15964 13.3375 5.9681C14.0776 5.32488 15.026 4.97058 16.0079 4.97058C18.2539 4.97058 20.0812 6.79785 20.0812 9.04388C20.0812 11.9949 17.0062 14.7117 16.0076 15.5159C15.0082 14.7125 11.9347 12.0007 11.9347 9.04388C11.9347 8.44339 12.0621 7.8654 12.3135 7.32591C12.4369 7.06118 12.3223 6.74651 12.0575 6.62317C11.7926 6.49969 11.478 6.61436 11.3547 6.87923C11.0459 7.54178 10.8867 8.24995 10.8784 8.98464C10.7535 8.96983 10.6347 8.96031 10.5257 8.95185C9.91307 8.90396 9.8027 8.89536 9.71786 8.36956C9.5099 7.08092 8.52429 5.23059 7.56514 4.77644C7.21669 4.61156 6.86113 4.61572 6.56381 4.78857C5.91283 5.16677 5.87115 5.94892 5.84069 6.52C5.83124 6.69644 5.81763 6.95159 5.7823 7.06837C5.70663 7.08438 5.62489 7.09764 5.53949 7.11146C4.70897 7.24637 3.88951 7.51646 3.78789 9.17053C3.74953 9.7945 3.58944 9.94619 3.3867 10.1382C3.05891 10.4487 2.76985 10.797 2.83282 11.6386C2.84827 11.8455 2.85067 11.8772 2.21802 12.0151C1.6621 12.1362 0.821917 12.3192 0.461413 13.199C-0.316786 15.0981 0.00683453 16.6619 0.56924 17.4922C0.730803 17.7307 1.06479 17.7952 1.30379 17.6335C1.54567 17.4697 1.60893 17.1408 1.44504 16.8989C0.939475 16.1525 0.937501 14.8268 1.44025 13.6001C1.58277 13.2522 1.91422 13.1639 2.4432 13.0487C3.01576 12.9239 3.97407 12.7151 3.88761 11.5597C3.85693 11.1498 3.92174 11.0884 4.11398 10.9063C4.46482 10.574 4.78456 10.1963 4.84359 9.23548C4.90191 8.28676 5.1548 8.24565 5.70895 8.15559C5.83603 8.135 5.96734 8.11364 6.1031 8.07985C6.82622 7.89974 6.86705 7.13487 6.89681 6.57635C6.91366 6.26062 6.93644 5.83334 7.07537 5.71705C7.17163 5.7466 7.49201 5.94441 7.91633 6.63192C8.29172 7.24009 8.58184 7.97048 8.67338 8.53803C8.89079 9.88526 9.78803 9.95536 10.4432 10.0064C10.6182 10.0201 10.797 10.0343 10.9723 10.0686C11.2305 11.4733 12.0133 12.9251 13.3097 14.398C14.4861 15.7346 15.6497 16.5786 15.6986 16.614C15.8812 16.7456 16.1344 16.7456 16.3171 16.614C16.366 16.5786 17.5295 15.7346 18.706 14.398C19.215 13.8197 19.6447 13.2447 19.9948 12.6744C21.3851 12.3618 21.9216 11.6288 22.4408 10.9183C22.7922 10.4377 23.1556 9.94055 23.8375 9.48492C24.91 8.76821 25.4109 8.81215 25.8133 8.84727C26.3199 8.89169 26.777 8.8704 27.244 8.16074C27.6019 7.61681 27.6093 7.04334 27.2641 6.58735C26.7684 5.93221 25.5821 5.67198 24.5637 5.99483C24.55 5.99913 24.5368 6.00322 24.524 6.0071C24.6127 5.77156 24.753 5.46247 24.867 5.21155L24.9243 5.08504C25.0716 4.75987 25.1057 4.76255 25.4296 4.78758C25.7854 4.81501 26.3811 4.86121 26.9221 4.23251C27.6544 3.38153 27.5682 2.61377 27.4922 1.93642C27.4681 1.72245 27.4433 1.50123 27.4418 1.27916C27.4564 1.25088 27.6006 1.12578 27.9963 1.07585C28.6428 0.994396 29.5483 1.1781 29.9455 1.62676C30.2788 2.00327 30.487 2.71751 30.6708 3.34768C30.937 4.26086 31.2121 5.20429 32.0048 5.26233C32.0469 5.37657 32.0821 5.60943 32.1045 5.75795C32.1852 6.29306 32.3353 7.28903 33.3191 7.28903C33.6142 7.28903 33.833 7.28092 34.0088 7.27436C34.4262 7.25892 34.4489 7.26167 34.6116 7.3513C34.8389 7.47648 34.9729 7.86293 34.9375 8.29128C34.9068 8.66194 34.7623 8.86511 34.7095 8.88316C34.6284 8.88048 34.5153 8.86299 34.3956 8.84451C33.9542 8.77618 33.3498 8.68288 32.8918 9.09881C32.5483 9.4108 32.4017 9.91777 32.4436 10.6488C32.4984 11.6038 32.4148 11.8853 32.378 11.9608C32.3117 11.9701 32.1699 11.9622 32.0629 11.9561C31.8292 11.9429 31.5384 11.9263 31.2059 11.9843C30.464 12.1137 29.8862 12.7957 29.3274 13.4553C28.9322 13.9219 28.4402 14.5026 28.1164 14.5237C27.9974 14.526 27.6382 14.3578 27.4237 14.2552C26.9581 14.0327 26.4769 13.8027 26.027 13.8914C25.3516 14.0246 24.9322 14.6546 24.9585 15.4963C24.9855 16.3594 25.5139 17.2998 26.4713 17.4272C27.0463 17.5037 27.4907 17.8016 27.5885 17.9489C27.5019 18.029 27.2749 18.1489 27.1183 18.2316C26.5801 18.516 25.7667 18.9457 25.6627 19.9031C25.635 20.1574 25.6271 20.5275 25.8761 20.805C26.1371 21.0961 26.5066 21.0964 26.7764 21.0966C27.1888 21.0969 27.4612 21.0971 27.7181 21.7174C28.3728 23.2974 27.2695 24.9322 26.5144 25.649C26.2684 25.8826 25.8935 26.177 25.4587 26.4782C25.2185 26.6445 25.1587 26.9741 25.3251 27.2142C25.4891 27.4511 25.824 27.512 26.061 27.3478C26.5459 27.0119 26.9545 26.6899 27.2426 26.4163C28.517 25.2065 29.4604 23.1591 28.6954 21.3125C28.1681 20.0399 27.2632 20.0392 26.7771 20.0389C26.7555 20.0389 26.7337 20.0388 26.7121 20.0387C26.7128 20.0315 26.7135 20.0245 26.7142 20.0174C26.7546 19.6454 27.0804 19.448 27.6123 19.167C28.0552 18.933 28.5132 18.6911 28.6344 18.1917C28.6822 17.9948 28.6908 17.6897 28.4607 17.3534C28.0816 16.7996 27.2584 16.4649 26.6107 16.3787C26.2413 16.3295 26.0285 15.8705 26.0157 15.4633C26.0083 15.2281 26.0728 14.9606 26.228 14.9298C26.3541 14.9174 26.7385 15.1003 26.9674 15.2097C27.3925 15.413 27.7939 15.6051 28.1849 15.5794C28.9569 15.5291 29.5556 14.8225 30.1344 14.1392C30.551 13.6473 31.0233 13.09 31.3874 13.0265C31.5999 12.9895 31.8048 13.0012 32.0029 13.0123C32.3518 13.0319 32.7861 13.0568 33.1187 12.7239C33.4657 12.3767 33.5689 11.7979 33.4995 10.5884C33.467 10.0226 33.5889 9.89478 33.6028 9.88202C33.6872 9.80536 34.0293 9.8584 34.2339 9.88999C34.3793 9.91249 34.5296 9.93569 34.6742 9.94055C35.2458 9.95981 35.719 9.5359 35.9117 8.83485C36.1403 8.00313 35.941 6.87578 35.1216 6.42473Z"
          fill="#1E196B"
        />
        <path
          d="M18.3094 9.21682C18.3094 7.94772 17.2769 6.91522 16.0078 6.91522C14.7388 6.91522 13.7063 7.94772 13.7063 9.21682C13.7063 10.4859 14.7388 11.5184 16.0078 11.5184C17.2769 11.5183 18.3094 10.4859 18.3094 9.21682ZM14.7641 9.21682C14.7641 8.531 15.322 7.97304 16.0078 7.97304C16.6937 7.97304 17.2516 8.531 17.2516 9.21682C17.2516 9.90263 16.6936 10.4606 16.0078 10.4606C15.322 10.4605 14.7641 9.90256 14.7641 9.21682Z"
          fill="#BFCD30"
        />
      </svg>
    );
  if (icon === "warehouse")
    return (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          marginTop:"-30px",
          marginLeft:"-10px"
        }}
      >
        <rect width="38" height="38" fill="white" />
        <path
          d="M8.33594 20.649C8.48997 20.649 8.64127 20.587 8.75021 20.478C8.85916 20.3684 8.92188 20.2178 8.92188 20.063C8.92188 19.909 8.85916 19.7577 8.75021 19.6488C8.64127 19.5398 8.48997 19.4771 8.33594 19.4771C8.1819 19.4771 8.03061 19.5398 7.92166 19.6488C7.81271 19.7577 7.75 19.909 7.75 20.063C7.75 20.2178 7.81271 20.3688 7.92166 20.478C8.03061 20.587 8.1819 20.649 8.33594 20.649Z"
          fill="#BFCD30"
        />
        <path
          d="M33.6976 12.5418L28.3425 9.58122C28.0594 9.42443 27.7028 9.52743 27.5462 9.81056C27.3897 10.0937 27.4924 10.4503 27.7756 10.6068L32.8281 13.4001V33.3279H30.25V14.9295C30.25 14.6059 29.9877 14.3436 29.6641 14.3436H8.33594C8.0123 14.3436 7.75 14.6059 7.75 14.9295V17.7193C7.75 18.043 8.0123 18.3053 8.33594 18.3053C8.65958 18.3053 8.92188 18.043 8.92188 17.7193V15.5154H29.0781V33.3279H26.6247V27.4686C26.6247 26.8224 26.099 26.2967 25.4529 26.2967H23.1091V20.4373C23.1091 19.7912 22.5834 19.2654 21.9372 19.2654H16.0779C15.4315 19.2654 14.906 19.7912 14.906 20.4373V26.2967H12.5547C11.9086 26.2967 11.3828 26.8224 11.3828 27.4686V33.3279H8.92188V22.4068C8.92188 22.0832 8.65958 21.8209 8.33594 21.8209C8.0123 21.8209 7.75 22.0832 7.75 22.4068V33.3279H5.17188V13.4001L19 5.75523L23.6731 8.33885C23.9562 8.4954 24.3128 8.39264 24.4694 8.10951C24.6259 7.82638 24.5231 7.46978 24.24 7.31323L19.2836 4.57306C19.1071 4.47532 18.8929 4.47532 18.7164 4.57306L4.30235 12.5418C4.11581 12.6448 4 12.8412 4 13.0545V33.9139C4 34.2375 4.2623 34.4998 4.58594 34.4998H33.4141C33.7377 34.4998 34 34.2375 34 33.9139V13.0545C34 12.8412 33.8842 12.6448 33.6976 12.5418ZM21.9372 27.4686H23.1091V28.6404H21.9372V27.4686ZM19.5859 20.4373V21.6092H18.4141V20.4373H19.5859ZM16.0779 20.4373H17.2422V22.1951C17.2422 22.5188 17.5045 22.7811 17.8281 22.7811H20.1719C20.4955 22.7811 20.7578 22.5188 20.7578 22.1951V20.4373H21.9372L21.9379 26.2967C21.9379 26.2967 21.9377 26.2967 21.9372 26.2967H16.0779V20.4373ZM16.0779 27.4686V28.6404H14.906V27.4686H16.0779ZM12.5547 33.3279V27.4686H13.7341V29.2264C13.7341 29.55 13.9964 29.8123 14.3201 29.8123H16.6638C16.9872 29.8123 17.2497 29.55 17.2497 29.2264V27.4686H18.4141L18.4147 33.3279C18.4147 33.3279 18.4145 33.3279 18.4141 33.3279H12.5547ZM19.5935 33.3279V27.4686H20.7654V29.2264C20.7654 29.55 21.0277 29.8123 21.3513 29.8123H23.6951C24.0185 29.8123 24.281 29.55 24.281 29.2264V27.4686H25.4529L25.4536 33.3279C25.4536 33.3279 25.4533 33.3279 25.4529 33.3279H19.5935Z"
          fill="#1E196B"
        />
        <path
          d="M26.0079 9.54614C26.1619 9.54614 26.313 9.48343 26.4222 9.37448C26.5311 9.2653 26.5938 9.11424 26.5938 8.96021C26.5938 8.80594 26.5311 8.65488 26.4222 8.54593C26.313 8.43698 26.1619 8.37427 26.0079 8.37427C25.8536 8.37427 25.7026 8.43698 25.5936 8.54593C25.4847 8.65488 25.422 8.80594 25.422 8.96021C25.422 9.11424 25.4847 9.2653 25.5936 9.37448C25.7026 9.48343 25.8536 9.54614 26.0079 9.54614Z"
          fill="#BFCD30"
        />
        <path
          d="M16.5391 10.4766C16.5391 11.8336 17.643 12.9375 19 12.9375C20.357 12.9375 21.4609 11.8336 21.4609 10.4766C21.4609 9.11952 20.357 8.01562 19 8.01562C17.643 8.01562 16.5391 9.11952 16.5391 10.4766ZM20.2891 10.4766C20.2891 11.1872 19.7109 11.7656 19 11.7656C18.2891 11.7656 17.7109 11.1872 17.7109 10.4766C17.7109 9.76566 18.2891 9.1875 19 9.1875C19.7109 9.1875 20.2891 9.76566 20.2891 10.4766Z"
          fill="#BFCD30"
        />
      </svg>
    );
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        marginTop:"-9px",
        marginLeft:"-10px"
      }}
    >
      <rect width="38" height="38" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5777 10.4522C16.6012 8.66777 19.2581 7.58319 22.1667 7.58319C28.5016 7.58319 33.6458 12.7274 33.6458 19.0624C33.6458 25.3973 28.5016 30.5415 22.1667 30.5415C19.2581 30.5415 16.6012 29.4569 14.5777 27.6725C14.0869 27.2387 13.3348 27.2846 12.901 27.777C12.4672 28.2679 12.5147 29.0184 13.0055 29.4522C15.4486 31.6087 18.6564 32.9165 22.1667 32.9165C29.8126 32.9165 36.0208 26.7083 36.0208 19.0624C36.0208 11.4164 29.8126 5.20819 22.1667 5.20819C18.6564 5.20819 15.4486 6.51602 13.0055 8.67252C12.5147 9.10636 12.4672 9.85686 12.901 10.3477C13.3348 10.8401 14.0869 10.886 14.5777 10.4522Z"
        fill="#1E196B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.3458 12.0957V18.429C20.3458 18.7441 20.4709 19.0465 20.6942 19.2682L25.7608 24.3349C26.2232 24.7988 26.9768 24.7988 27.4392 24.3349C27.9031 23.8725 27.9031 23.1189 27.4392 22.6565L22.7208 17.9366V12.0957C22.7208 11.4402 22.1888 10.9082 21.5333 10.9082C20.8778 10.9082 20.3458 11.4402 20.3458 12.0957Z"
        fill="#BFCD30"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.16666 14.7082H12.6667C13.3222 14.7082 13.8542 14.1762 13.8542 13.5207C13.8542 12.8652 13.3222 12.3332 12.6667 12.3332H3.16666C2.51116 12.3332 1.97916 12.8652 1.97916 13.5207C1.97916 14.1762 2.51116 14.7082 3.16666 14.7082Z"
        fill="#BFCD30"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.75 20.2499H14.25C14.9055 20.2499 15.4375 19.7179 15.4375 19.0624C15.4375 18.4069 14.9055 17.8749 14.25 17.8749H4.75C4.0945 17.8749 3.5625 18.4069 3.5625 19.0624C3.5625 19.7179 4.0945 20.2499 4.75 20.2499Z"
        fill="#BFCD30"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.33333 25.7915H15.8333C16.4888 25.7915 17.0208 25.2595 17.0208 24.604C17.0208 23.9485 16.4888 23.4165 15.8333 23.4165H6.33333C5.67783 23.4165 5.14583 23.9485 5.14583 24.604C5.14583 25.2595 5.67783 25.7915 6.33333 25.7915Z"
        fill="#BFCD30"
      />
    </svg>
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
    width: "50px",
    paddingRight: "10px",
    verticalAlign: "middle",
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
    margin: "0 0 4px",        // was likely "0 0 16px" or similar — change to 4px
    color: brand.ink,
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15px",
    lineHeight: "18px",
    fontWeight: 900,
  },
};

export default GlobelinkEgyptImportEmail;
