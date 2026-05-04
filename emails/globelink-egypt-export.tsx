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
    <Head>
      <style>{`
          /* ── Reset ── */
          * { box-sizing: border-box; }

          /* ── Hero: desktop (≥601px) ── */
          .hero-outer {
            position: relative;
            width: ${emailWidth}px;
            height: 381px;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: ${brand.white};
            display: block;
          }

          .hero-left {
            position: absolute;
            left: 0;
            top: 50px;
            width: 300px;
            z-index: 5;
          }

          .hero-logo {
            display: block;
            width: 127px;
            height: 33px;
            margin: 0;
          }

          .hero-tagline {
            font-family: Arial, Helvetica, sans-serif;
            color: ${brand.ink};
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 8px;
            font-weight: 400;
            position: absolute;
            left: 310px;
            top: 80px;
            z-index: 10;
            white-space: nowrap;
            display: block;
            margin: 0;
          }

          .hero-headline {
            font-family: Arial, Helvetica, sans-serif;
            color: ${brand.ink};
            font-size: 28px;
            line-height: 32px;
            font-weight: 900;
            margin: 0;
            display: block;
            position: absolute;
            left: 0;
            top: 190px;
            z-index: 5;
          }

          .hero-image-wrap {
            position: absolute;
            left: 289px;
            bottom: 0;
            width: 431px;
            height: 408px;
            z-index: 4;
          }

          .hero-image-wrap img {
            display: block;
            width: 431px;
            height: 408px;
          }

          /* ── Hero: mobile (≤600px) ── */
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
              position: relative !important;
              left: auto !important;
              top: auto !important;
              font-size: 10px !important;
              line-height: 15px !important;
              letter-spacing: 5px !important;
              white-space: normal !important;
              margin: 18px 0 28px 0 !important;
              width: 100% !important;
            }

            .hero-headline {
              font-size: 24px !important;
              line-height: 30px !important;
              margin-top: 0 !important;
            }

            .hero-image-wrap {
              position: relative !important;
              left: 0 !important;
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

          /* ── Content ── */
          .content-section {
            padding: 48px 52px 24px !important;
          }

          @media only screen and (max-width: 600px) {
            .content-section {
              padding: 28px 20px 20px !important;
            }
          }

          /* ── Benefit cards ── */
          .card-icon-col {
            width: 76px;
            padding-right: 12px;
            vertical-align: middle;
          }

          @media only screen and (max-width: 600px) {
            .card-icon-col {
              width: 54px !important;
            }
            .card-icon-col img {
              width: 44px !important;
              height: 44px !important;
            }
            .card-title {
              font-size: 14px !important;
              line-height: 18px !important;
            }
            .card-body-text {
              font-size: 13px !important;
              line-height: 17px !important;
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

          .emphasis {
            margin: 0 0 34px !important;
            color: ${brand.ink};
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            line-height: 20px;
            font-weight: 900;
          }

          .question {
            margin: 0 0 18px !important;
            color: ${brand.ink};
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            line-height: 18px;
            font-weight: 900;
          }

          .region-text {
            margin: 0 !important;
            color: ${brand.ink};
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            line-height: 22px;
          }

          .signoff {
            margin: 0 !important;
            color: ${brand.ink};
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            line-height: 19px;
          }

          @media only screen and (max-width: 600px) {
            .para, .emphasis, .question, .region-text, .signoff {
              font-size: 14px !important;
              line-height: 20px !important;
            }
          }
        `}</style>
    </Head>
    <Preview>LCL exports: the world is closer than you think.</Preview>
    <Body style={styles.body}>
      <Container style={styles.canvas}>
        {/* ── HERO ── */}
        <Section style={{ padding: 0, margin: 0 }}>
          <Row>
            <Column>
              <div
                className="hero-outer"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="127"
                  height="33"
                  viewBox="0 0 127 33"
                  style={styles.customLogo}
                >
                  <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAhCAYAAADwOXSUAAAQAElEQVR4AexbCXhUVbKuOvd2p8OasKc7O2ERVAgBBhEhAXFBQVwQl6ej48gMsgVUFEekVRwFxYRFVB5PFJdxRAf3FUkQQQUCASQIhKQ7SydAgCRAlr73nnp1OgGS0CC4zbzveb7z97m3TlWdpeqsNxHw6wXs0cNtj4lJPS/WNWF8jHPC69GuiduinRMPR0VMMPjdH+OcWMrpuljnpPlxzgnDk5zjmgWtDgFSEATl/Z141j3wKxjfLSIjp7aJjUq95lhF2UryG5ukhMVsvFtA0gVAFIYAOr/biKgjpwMlyVsIMPGCy/wyg5L1j/ckhKwvvCg0Y0ty2Gff9Y9btbFf34wt/YauzU4asWZzn6szNve5bM2GxAFrN/aL/2JTUus9zJ+Rkax0suqzbvv/e0bxC/YAOnnkxrj2D9Glf5k0jRUkaQTrDz6aOSMQEWqatbA+vHVc3rd/nLx1EGWXj3NUtlro31/zNcoKr13352masQHJWGVJ60MC+T6C/JR0Wm8KI9cmrJziIy2XibAjN361oX/sjh097MCeFNB9xh/CZHDranbq0WOMHWCMBo3CGC2Z8wHcAoIGt0hKGmdLSJgUotJT+cZoin4cyeDWG/M0zld89XVAlZ7KDw3oxM9uUccTqDe/Q32oq1d9WUxX+apsJa9Y6tqdDG5dwC8SCLkT2tnQ9lcgXCYJRrFabiz/njlaLVuam8al5oYPH+V7l2eFLwTBQiT5JwK6kBHK4ga3wODURLY6pw0jEoGTZ5CbpbReJ5vx3v4ax50fb0lsx3QWa8h68jk21u2Id03ssrfj4RFHyw7dcfSwa2yCy9W/u2tGW9VpY8aM0eJcnc4vcJVfHhdxJOqkZOBJtbVVQkR57zJfsxuNKv2uQ6XNr43uVHFex473NWcOlR/SOSK6t6LXocVor7PiyjhX5QXd2k1vyTwQFRVznso7WNLshuOI6xSZFB39YFh8RGSiJ+LwsMjIigjFq9Cjvbu5qmOhq/KShE6T23XpWBGrdMY4o/4QH/9AK8WjkBB9pHv5vuZXx7sqE+LDH2jV2ekaEBd1eKDLNaMN52Nn54RIlhta6Cof/EsYH6OiJkX4q2kqSJjFnR7DhZxNJJtNeoZdXXo48aKDkSxnIkAeAWwDxPWcrmYlnyHgp4CwivE182zl1MP0CiCwOG0U2QkuAJRPOYhSN/zQXzW2Ub566dH+nhbSrLzBkvqbAuE1EPgoEKUZkj6ukdVPdI6siM/L6xkiSb/VtGihReYQJXccse3v6eivEvf6Ad7l8tJJyhmWJV9ApH+FasZdynhEIa0tsMYx/VVpyQXSsuZaUi7j9w+qNf8daoZEw389vy/jJXGBlPSEAmk0uplOkSbQ3TyAntEl9Ttebm1IRSc/QaohzUdNXetpChoqpZxP0lpiVtUOT4bA6AbDMEdbEl6wiC4z7NVR3K7plgEP6UZ114ROk9oZZJsmpXzZIrxMwM8MSqFm0V9Q0kQ2WKtzUHcoKq4qY/jI0myW26ChPp4s28UpfbL7pCRtGTw0KfvylKTskclJW0Yl98kewfSUNR9k9xUYwpUWTwPiRi7rMIPF+fd4JAhjhxlbU21cxc6C0DhglU0fhpaVSoStCXERatotmoAHAHATAV1uSnmt/0BNCAQJvJcJBZv9dna8P7HiPECYareLK1CIh5n9KBtsIprHrtX9Qud3FXfb7LbJcd3DEzWBswDIZOccLCx7Z5XJqBQ6zu7Vr8f5Cv0GDnSDXfiYfi6xBxvxhoLIivNYiKvFv0Eil9PSFNqdAHgVCPGplGI5y8FPDmqaMzV5gwS4ky0QmM7OoIy4swxGOSIWIMIbefltnhyZ/N0jQ/tsuWdwn03vpPTfWMryxAga3W6QQxK/2zMkafMTEuEmQFzCeg6cykyqcy/MzExu3jCvW7fpLQjwYqbFo6AXWoSHub3Frdbk+3wv22yYqgttli7EdrTLRnLMH4jCEj2kpEuA0AcEcwpK5r+WW5C2w+tLWyxIzGeaIKldQgSRAQEAzTDNFkV7qrhcKuO6lgCKapum+evzUUordHf23rC923Nb7fpqA2eFUH3e2SUIh7kvBlkWjWo4/TcURkAH13sUEY1FoL0A1tKC0nk5P8P4hA695g/s7Tdxo5uuiw3K5q4A3IcAG5jvY0SxmDs4tblDe6agIC2vAeM5PQ7rs8UbIhwLAfBNRg00CUTYyta6otFMZBw1I7gOLs7bCxJzqqpAqLU6uoNzqL9GOg3DKrEMs9yUGLRfBBqRiOACATttNtvuhkUi4E7O2w1ILr+0nIE8hE5Mu80CYx4RuIG3Rkj4LTtbLnBAgFB2mtF+Mp6qscxZx3TZn8nnFAWiWhq/BaKrreraYYhoO1UBdSOkmwigJRH+j9e3YL3iCdpIAFB5Z0TPyGnhSDAcCNRIOh1vFVdmOwp82kZiZEHJc6O9xQv/trdowcqcvAUFpxM6W/rA3t8Uc4PWIkIjJ+J3YiPUHK1xnOIUSrdAIE0DQPS3FkJezcZ8GATOBgGvSiGeq671D4AgweJdBhFn8FRXC0FUqzwgtinzqEhgkxa1k5bswHLHuE7FKKQeHx7eoi4bBNPDpSmjpCGdkihAV3lnCy4yV0dcQYBsS7qBALo0leUaqWVMtbgUNFETG3uHQ/GwgErOHccsox+P+qEsyUr599R4FBEzNNSmeYvbpuWWLgwyPZ8qdK4UbsB+IChtKMcdegwIi779/JvyhnQ/UhnTfZzfgQ15nlZxpLqZz5dmivArWc8DgLANCMpBMODUYBNaMVvWx77TVRjYDeCtQNvVcdEE8zzu5BhAUcRGDtSHefMQcVZc963D2eh3c7mFJOFacoT2qtNORzldwHuC4bHdw6/P97X+iN/POWot8EshcCWX35f3FSkEpDdSQrAZAN/n2cEFlhxHRlhicrJb5zbDOQV1VIl3TehKAvpzJ3TAwJSOPK2fBCs8iIh7kHAV7zoPxbkOXhDnmtQrMnJS/5hO96REuyYMOx3iIqdcqHbkrOPsohTKi9WR8CQ/wQ4eAdvcbuAxepJcVJR2CIW2DpB4o0jXGQ7ttiPOTsk2WT5EAo0Fws4ocF1ze7Od9VIh/J6Q4LrvolhXam9yiAMk8Cvu5ChA8V+xzvUjo51ThleVl1+PCGNZJhQB1oYIPTCrEQDvHai7d1evgUR4Pue1YgezWYJszAsEqAPKeO+uiosU4iMPdTbNKtUelc33I7K7Kjs+cuoFhLYwRQwGXa/macjgozJ+y84VDoAsCw2DiST+KQBfBaQ+ZMG4/F3lXURDjh97drkmtK2xV42UgPcKgvYawnIN6cWmELwOcQcZBHIUY45F8mkFYcmFhPg/bJJlp4OUpvuIriX+WF1UvrrVk0hx7O0x6j0AhKMCxVq77tgceG/6Y7cy2QgvMJl9F2YIKZaz/EtsvMEC4QOWfadlh7ZlnA9sKD73w+0mWM8hiIfRkl10IVci4CtEcL6UtJjb8Qqn84CwExI8bwn8zArRDFABwUWIf+X+WgKAfyd+Z77VmrTVr/kYCihu5ja8qGCRuM00ZRtQASGCUNytymYnmY5o9mAyAXApwAFViqwSmQbg8S3apfH0D4DbuT1Mq6NDfeC3Q5qOryHi+9yuYYw/nZPxQ1Brwz0WJaUMlwKFhVDRFJJ3n1zedi5sgwQo4U46cAIAuYC4AQEYKj0VBFim6xAKZxH0Dkec7FxJgNCpnp0AMAt0+OTiXuv3Q5Dg8aSX+7H6VWGDBzj7ZRb4jHvwXSFgjqWbc/OLn91WUVHJNoRNyCcS7sjVRDKb2/wDGFCeV7RgD/dDOmjicW7HO1z2l4j0DwA5U6t1LOHZpVjTrBoQuJ7l/8H9xXcUxM/4AQLO1YRcml8yr4CEls12fAOAPmV8q4AAeXZJR+pl3+Rpek2gbFPuJguKBWImd/snIM1SINiNQrzNclv8/oCzUahRmyEAF3PfL+c2/UA27TAIXEWIn1tkHNhblJarEb7EepaxfK2AcwjRCW3y/WAsFAI/AkkjeYqZ1xSSYBYh2KoMvvxA426rCXSH/y+8+RuvS/OeYLCFmg+3DA9Z92PVUte4Zg0NFoCD2LmE4ufOyydJb9WA+Z16Px18viVV+YXzv/KWhD3S3lX95/huWyflF89fXli4SJ2xKSfH7c8vTlvh9aXfdQIlaTPzStI2KZ27ffPKCoqfXcFr9dQW4eF39R9UMt1buuDjvMNzKlT+rl1zj3iK05afkK3TM8Fbkr40z7eggHmo0Jf2fkFJ+l8a8niK01/ZmT/PW9BUtjR9dl7xs1+yzhc9vrQ5PMp/yC9JW+vxzXvQ40t/Lzd3YS3rhJwDi496StNe8ZSkjS8ofna1csQCX/qiwpL0tML9C/cqHtUG1uH2cnsCnaaIwRAfP651fMTEvrw+X62Qt+fAFTrahrKBY9hzeIdNa9mz1yBRHQDXACBflkCow4bDFK9NOJJtwj5EwcGylj/0UlPgMEvThlqanmLoWnId9CGmTb9E1tgibLZKP5whsLFxX43jAgB5nSTqWseKPMvgG2jK9y/vte1YHe3Hft0yK2uJkZmZaQbh5EmBxxAPTzgBaBQyM92mcpQVK1ZYjTLqXprIc4/V0Y//NslXZZ3gaZLXkH7imfU0kuH347ERnXU1lAnwMA3ptMaPDx/XWtbYUywBU4DgfpR4L0q4Vz3z1NMTBKxCDZcD4nIU4hUFAHoNEDYiYSIC3g+kIDmlALiHHkZpPSlBPi0BGfQ065xbB5rLo3YOEd1UXi540xKoZNCf9VlJ8YLoj5yZgggaAPDSIldYunw1ZcC2In7/PZ5FD5zW+LJ1M7YhVALBN8hnGjbqCknwVuCZyMOG7s1T/nACuFwCXaGgntmQ3dggPyCQWu/eAqK3Wcc7CkhiJddpJeev4MH0NiD+ixDek4gfMD4kwE94JOcYBtZtmJi5aVy3OTHGj9adJOg6zgtjsOHhbV7nl1zaa+sefv89nmUPnNb4amPkLV602utbtNjre+45L6eFpc897+Vnnva3k8QBQHBjIwDcwOVeDBK8zFcvp2Tr0Dai9tlW7RyP2UJbPomAHwDCXnYEr0D0BADg5fdWYIlRsc57bo513dM7mc+jUB/U93u/hD+zk9zG5boYRcAzjxS4KKXX1hxgj6tn/T05ix44YXx1URGnzuHOiffFOCc+diZoAi5CDT8FgU82BdNfBN4RxromTYlzTZzZEAdL7A9VltVON6qOTAdJ9zKmkIRJJOXEAIgmEMF97DyzOL2Nl4bIzMwd5Ca3yNjY93xDGBN5xrmDEcmG3sFlLxKa9dylfbbksNPQWbQXYjulxkZ3nDwsKmLK5ccR2WHKheo7hZJPZmdLcE2PjHFNS4mJSL0u3jn10riIe2OS+Ns9cIh3To6Oi5gyOD5ycpfjNKdzXLOoqMnnx7qmDUhwTYqMc07pFuNKHaoQG5maHB0xOamr89526nNxZ+e0qKiIkoeKpQAACX1JREFUqZeovIZQsp073teBi/jN4gnj11QeikHCYShwkEAYcCYAio48cssEYmlTcM0PEsrOBPJ6tsZQQhzEGKjABruYgK8gicZz3uVA0Jn5Y08BIq/52k6J9i2bNuWJodkfXkRo3S8QbiWEDoiwVgLOsfzGy0N6bctn+bOOJHAgCvEwAjwChDMUNIHXNNf8bZURPbsrrjKk/+9gWU+wA7otKR+XZD51oDR0dDf+Fk+Esbx3ucuSePehktB4VbANm/USJqYSWTcAaFEW4DUk6XGQMJMsegRA/L2GzL/FdzqSxEfGPwiQU8GimczzGONRfn4YpBxv2QJneaXyN0HA+Bk7+nV6ND1r9H2zt42aNnN79NRZO9relbqnqGfi4ecFwaNNAUjziYi/fsrxkj/lNgVJeQ0RNx3oLSGtxzVJsxUI4WUCKuSWhTI0RrBoIlAGILy27N2vjh4R8npLWo+y4Uczsx1B8H4B3CKkduWlA77fB+caiDqxCN+2oVcIWqJAAlaDI7TCJh3Jkmga13EACLGFO+d5EKAui/qjBfcaIbVDiLAAAQySeC3joiQe9UhyCABeioBHCfEAG5OdAqMAaAsBLgMCdYQcbaE5ChBVnV8HhK+Z3gYJNS7jE4n4NlraOTky/MwgPt5zZQhVmZdFxR/7c/cLy/uc37e85wVJh9tcnLJ/x90Pelbt9S1a1xT5hW3XCZDbEbjaRF14U9cEEIkE53HjugPifpZfb9n1HWhRB6b14DoLxmkibXGEmG+kL9sgbGhNZ92PcCcOYhQgiWeAcDaUh32d0jNH3YufRsePkdFkB97i9c1/Q4HPwusMg5pzc65AoGiB4h8aWHPauqqWakBzhCZmINMkaGXN2oT5AGE1gKwmpEGHsOUIdoKLuZ75IDFDk6LuewIBp7SWz/KvCQHvIeAhIEiQdirzlsx/B0msQoB9IMhr0/WPCnxpH+SXzPPCbxiEo2J/b6HBWCLowpXhkQV24CtCAeLzawatOwJBg1tKHTcCoDrXSwgSCKA967yJp8fZcc6JI9Gw+KoX72ZWHhH8GyRy+d52Hf0fP7pwa0RYe/8cZlH8fIuHbxHiVERaktI364eUlKDncmY/20h2JBwZGzH12Vjn1Kd4H5CsSTOakLoCwV4J1heihsrL97fqRpoWw2PzkBBaLs8Spt9/0AE25JkJ13FpA6U0pxJgd0D4MsS0qVmCyQBcV5vQtDbdXdP4KxsmEs84iFBuM+2n6VP4zYMQSMO4wYO4ZO57AP6p5EpmH9tfsRvOENq18xcJxM+ZZQcjaCSADgR0lUX0FONhfuYvYUFZFbEqvvuRPfc/ltO5Y0TtFCS6hIl7WGY6kXg0OTEhY3CfLQeY9vMjgfpL396S5M1SyjEWyu4EshkrDgXECl1oFbIZxZiWOc4y5TzToCctaTxuWXQ7+PUorzdsHxB+yfxV3EZ1vZzHzpmxq2zuCcOy40dJU6ZWS+slkiyHmIsoPra3braf5f4jouDz+WACanW8NgS4jyu5d8SI3MCV4XF60zSLb8YszfySnedtADjTFKw6lZcAXh4AtKZ6jr+37+j/fsxtRTURkVUjEICrhLORtL+iw3hjWN8sPhIGvUU7Ln5OKTt3LY/y1wlhLAi8XQr6UNdkBdMrWVFHU0JHUYVe/vq2VBJOZ0d8kwh1IHBZUuM2uKVDaJlAuAEJ1B15Zq2lZ7PsiYjcjwD4Fi8HMxHgTilxot1vy1Q3gvAfEgQ3rGfjulAVe/uZjHmCvaDg+cO6Jl5HxH8yMej0z/QfjfwhZ+vwUSUHu/SsUGf3pbwO3mIPdTw3pG/W9p+3tgcvmh3cQoS8wpL5X6n1vrh4YVFIC3MXT83b2eu687p/HTR3tC8qmr8thPQcNl57Rkf2yZzQ2iq+1gbg+/2DQHCIS6jmAVS2b98zx/j5RCSAY4Dye77zz/CUpmcW7Uvb3nBmOMH4b3wQgMCNOlkDBGwjdNGIdjL31KfcwlIPO0A6dyZ/2cKf4gCFnbsf/bp3/8qlBHJcFeIzme9lZw3s+Y3q2FML/EUo5CCCu6Mjpnxeh9QZteWOcE3DN7n9GUQ01jCNdzhvjSHMjwhQ/Y1ihq7b/qk+ntRXgdjorAZ4AuHxX0/8v5QIriwyTkRueIS0rEEZWX0SThDP+LDCiipsw9e5OJtH7H+zM9Wckb1xZrVAWEkk5zbvdOzT4f23bB7B67rbDT/FiRprPv3bPgL6HojU1XUYEITxmtxMUq1o07F6J7f9QUQxk515P3dMNNevUgh4DAgfiips8UMjtQglQLCdeeu+/3Om326ZLFfAjztB6Lzj56cgkZedI+w1e9h7PH6Q59JnQbT9NBIbH4saiSLoKOBKbsDUVRv78Xm1UW7Ql0xwmx7fvj0k8DGB+BAgntUdO3fap0Lg0lWrlheO7JvFg/5XNXqg7lWm/z008EZpaNdIQ1yrgCGhz+aXtC/O4n1M4f4FeQa0fhkM/+0a0hCw226tsvSXC/a19qh2BpTU/4T45WtCGrf7IUxtfANUjyesEmtxsY30SWhr9U2AGOTH1tzaYaL+kNTE0/HxrZWzBOH6dUmCjcxn1saFMK01gfyjpvnfytycODNjU1J3txvYURrzNXz7YlNei1ff3dB54WsbWk+esetLZ2QtfwTCfQ15Gj5zGd9pCC/lFe3LAfjtps0D/M3bW5ZeUnQwrfg4CgqeOsxXryYEApLP567yHFhcmsff3j2ep0vr1nP3KbNR7qGFlYpP8QdEAz9u6SlPL9+775n9Ho/7tCNafYP3+eaV8Tf3Q5mZ7vqyAwp+sx+hkVjCU9eHXCIxApEI2DbQnPjTLE+PMwCttUNGJn6fkZW4ipeDlZlZvf+l0tWbEj/KyOq9NiMrcacurF0A/g9btPJP73NR2e3utOyuk/62e1FICI4XiOpPhw4GlPMPAnq5hFdFqPgC4JfbxbPq3+M59IAYlJS1ETTHJERtFiijwMmAwKs4QChT+KME8VmYUgDkSCIYpVJEuJwABgJQN3agFoDIa79YCBrdYmtmjY7uUDTXFdtuKdiPjpXC3lXXtK58wO5vIxzRPIxeUd7Pun+P/6Ye4EEJMiXxW0/m+1lPWHb7H5hwDQLM5fp8iIBqSq4g4I0toETg4wugjxeA7Zz/CdMXaEKMl4jJdl3GZ1a0vnhIn80zUnpnv6/+qeLGG3P8mTyleTwv16jpTf39W17p4k25pQt35uQsPqvjJJfze/yVeuB/AQAA//8FJ895AAAABklEQVQDAPHvu1qmiUKoAAAAAElFTkSuQmCC"
                    x="0"
                    y="0"
                    width="127"
                    height="33"
                  />
                </svg>
                <span
                  className="hero-tagline"
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
                  className="hero-headline"
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
                  className="hero-image-wrap"
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
        <Section className="content-section" style={styles.content}>
          <Text className="para" style={styles.paragraph}>
            Hello,
          </Text>
          <Text className="para" style={styles.paragraph}>
            They say the world is getting smaller, but for a growing business,
            it can still feel like a massive, complicated place.
          </Text>
          <Text className="para" style={styles.paragraph}>
            At Globelink Egypt, we don't see borders; we see opportunities. We
            believe that a small shipment from Alexandria should have the same
            global reach as a massive container from Shanghai.
          </Text>
          <Text className="emphasis" style={styles.emphasis}>
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
            <Text className="question" style={styles.question}>
              Where do you want to grow today?
            </Text>
            <Text className="region-text" style={styles.region}>
              <strong>Europe:</strong> Italy, Spain, the Netherlands.
              <br />
              <strong>Far East:</strong> Singapore.
              <br />
              <strong>Middle East:</strong> Jebel Ali.
            </Text>
          </Section>

          <Text className="para" style={styles.paragraph}>
            The world is waiting for what you've built. Let's go get it.
          </Text>
          <Text className="signoff" style={styles.signoff}>
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
      <Column className="card-icon-col" style={styles.iconColumn}>
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



/* ── Styles ── */
const BarcelonaIcon = () => (
  <svg
    width="55"
    height="55"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Network icon"
    style={styles.barcelonaIcon}
  >
    <g clipPath="url(#clip0_73_133_export_barcelona)">
      <path
        d="M29.355 32.0347C29.7842 32.0347 30.1995 31.8832 30.528 31.607C31.7203 30.6052 42.175 21.5753 42.175 12.8045C42.1752 5.72422 36.4353 -0.0155029 29.355 -0.0155029C22.2746 -0.0155029 16.5349 5.72422 16.5349 12.8046C16.5349 21.5753 26.9897 30.6052 28.1819 31.6061C28.5101 31.883 28.9257 32.0348 29.355 32.0347ZM18.3664 12.8046C18.3664 6.73568 23.2861 1.81595 29.355 1.81595C35.4239 1.81595 40.3436 6.73568 40.3436 12.8046C40.3436 19.254 33.4336 26.7757 29.3596 30.2032C25.2764 26.7757 18.3664 19.254 18.3664 12.8046Z"
        fill="#BFCD30"
      />
      <path
        d="M37.5964 12.8045C37.5964 8.2529 33.9066 4.56305 29.355 4.56305C24.8033 4.56305 21.1135 8.2529 21.1135 12.8045C21.1135 17.3562 24.8033 21.046 29.355 21.046C33.9043 21.0405 37.5909 17.3539 37.5964 12.8045ZM29.355 19.2146C25.8148 19.2146 22.9449 16.3447 22.9449 12.8045C22.9449 9.26437 25.8148 6.3945 29.355 6.3945C32.8951 6.3945 35.765 9.26437 35.765 12.8045C35.7609 16.3431 32.8935 19.2105 29.355 19.2146Z"
        fill="#BFCD30"
      />
      <path
        d="M17.4507 37.529C17.4507 37.0232 17.0407 36.6133 16.535 36.6133C16.0292 36.6133 15.6193 37.0233 15.6193 37.529C15.6249 42.5841 19.7215 46.6807 24.7765 46.6862C25.2823 46.6862 25.6922 46.2762 25.6922 45.7705C25.6922 45.2647 25.2822 44.8548 24.7765 44.8548C20.7324 44.8502 17.4551 41.573 17.4507 37.529Z"
        fill="#1E196B"
      />
      <path
        d="M47.2116 21.046C44.6628 21.0385 42.2728 22.2829 40.8174 24.3753C39.362 26.4677 39.0269 29.1414 39.9206 31.5283L36.8383 33.1958C36.5231 32.3166 36.1126 31.4746 35.614 30.6848C35.444 30.398 35.1316 30.2262 34.7984 30.2363C34.4651 30.2465 34.1638 30.437 34.0116 30.7336C33.8594 31.0303 33.8804 31.3861 34.0666 31.6628C36.5083 35.5297 36.2998 40.5048 33.543 44.1538C30.7861 47.8029 26.0576 49.363 21.6706 48.0708C17.2836 46.7787 14.1555 42.9045 13.8168 38.3437C13.4782 33.7829 15.9996 29.4892 20.1476 27.5633C20.4448 27.4251 20.6458 27.1388 20.6747 26.8123C20.7036 26.4857 20.5561 26.1686 20.2878 25.9804C20.0196 25.7921 19.6711 25.7612 19.3739 25.8994C18.2409 26.4271 17.1918 27.1189 16.2604 27.9524L11.4831 21.1285C14.1853 18.7152 14.5541 14.6203 12.3264 11.7631C10.0987 8.90586 6.03736 8.2649 3.038 10.2971C0.0386329 12.3293 -0.871803 16.3388 0.955833 19.4669C2.78347 22.595 6.72338 23.7709 9.96647 22.1559L14.9598 29.2985C13.0253 31.6054 11.9622 34.5184 11.9563 37.529C11.9583 39.4886 12.413 41.4213 13.2851 43.1762L10.4179 44.9967C8.32965 42.6934 4.82036 42.3853 2.36278 44.2896C-0.094905 46.1938 -0.673023 49.6687 1.03569 52.266C2.74452 54.8634 6.16446 55.708 8.88595 54.205C11.6074 52.7019 12.7137 49.3572 11.4251 46.5278L14.2025 44.7633C16.4273 48.0291 20.0374 50.0824 23.9817 50.3253C27.9259 50.5681 31.7607 48.9732 34.3694 46.005L38.7365 48.4042C37.949 50.9063 39.1991 53.5962 41.6196 54.6073C44.0401 55.6183 46.8322 54.6171 48.0585 52.2983C49.2847 49.9795 48.5407 47.1081 46.3425 45.6768C44.1444 44.2453 41.2175 44.7261 39.5927 46.7854L35.4994 44.5355C37.3495 41.7275 38.0117 38.3008 37.3409 35.0055L40.7491 33.1622C42.8156 36.2466 46.7728 37.4423 50.2015 36.0181C53.6302 34.5939 55.5756 30.9463 54.8485 27.3055C54.1217 23.6644 50.9243 21.0439 47.2116 21.046ZM1.8834 16.0095C1.8834 13.2279 4.13827 10.9731 6.91987 10.9731C9.70147 10.9731 11.9563 13.2279 11.9563 16.0095C11.9563 18.7911 9.70147 21.046 6.91987 21.046C4.13957 21.043 1.88645 18.7898 1.8834 16.0095ZM6.00419 53.0963C3.72838 53.0963 1.88351 51.2514 1.88351 48.9756C1.88351 46.6998 3.72838 44.8548 6.00419 44.8548C8.28001 44.8548 10.1249 46.6997 10.1249 48.9756C10.1224 51.2503 8.27892 53.0938 6.00419 53.0963ZM43.5487 46.6863C45.3188 46.6863 46.7537 48.1212 46.7537 49.8913C46.7537 51.6613 45.3188 53.0963 43.5487 53.0963C41.7787 53.0963 40.3437 51.6613 40.3437 49.8913C40.3437 48.1212 41.7786 46.6863 43.5487 46.6863ZM47.2116 34.7819C43.9244 34.7819 41.2595 32.117 41.2595 28.8297C41.2595 25.5424 43.9244 22.8776 47.2116 22.8776C50.4989 22.8776 53.1638 25.5424 53.1638 28.8297C53.1597 32.1153 50.4972 34.7778 47.2116 34.7819Z"
        fill="#1E196B"
      />
    </g>
    <defs>
      <clipPath id="clip0_73_133_export_barcelona">
        <rect width="55" height="55" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.1094 24.8828H30.8438C31.7498 24.8828 32.4844 24.1483 32.4844 23.2422C32.4844 22.3361 31.7498 21.6016 30.8438 21.6016H28.1094C27.2033 21.6016 26.4688 22.3361 26.4688 23.2422C26.4688 24.1483 27.2033 24.8828 28.1094 24.8828Z"
      fill="#3A367E"
    />
    <path
      d="M21.1094 21.6016H18.375C17.4689 21.6016 16.7344 22.3361 16.7344 23.2422C16.7344 24.1483 17.4689 24.8828 18.375 24.8828H21.1094C22.0154 24.8828 22.75 24.1483 22.75 23.2422C22.75 22.3361 22.0154 21.6016 21.1094 21.6016Z"
      fill="#3A367E"
    />
    <path
      d="M37.8438 24.8828H40.5781C41.4842 24.8828 42.2188 24.1483 42.2188 23.2422C42.2188 22.3361 41.4842 21.6016 40.5781 21.6016H37.8438C36.9377 21.6016 36.2031 22.3361 36.2031 23.2422C36.2031 24.1483 36.9377 24.8828 37.8438 24.8828Z"
      fill="#BFCD30"
    />
    <path
      d="M11.375 28.9844H8.64062C7.73456 28.9844 7 29.7189 7 30.625C7 31.5311 7.73456 32.2656 8.64062 32.2656H11.375C12.2811 32.2656 13.0156 31.5311 13.0156 30.625C13.0156 29.7189 12.2811 28.9844 11.375 28.9844Z"
      fill="#3A367E"
    />
    <path
      d="M21.1094 28.9844H18.375C17.4689 28.9844 16.7344 29.7189 16.7344 30.625C16.7344 31.5311 17.4689 32.2656 18.375 32.2656H21.1094C22.0154 32.2656 22.75 31.5311 22.75 30.625C22.75 29.7189 22.0154 28.9844 21.1094 28.9844Z"
      fill="#3A367E"
    />
    <path
      d="M32.4844 30.625C32.4844 29.7189 31.7498 28.9844 30.8438 28.9844H28.1094C27.2033 28.9844 26.4688 29.7189 26.4688 30.625C26.4688 31.5311 27.2033 32.2656 28.1094 32.2656H30.8438C31.7498 32.2656 32.4844 31.5311 32.4844 30.625Z"
      fill="#BFCD30"
    />
    <path
      d="M11.375 36.3672H8.64062C7.73456 36.3672 7 37.1017 7 38.0078C7 38.9139 7.73456 39.6484 8.64062 39.6484H11.375C12.2811 39.6484 13.0156 38.9139 13.0156 38.0078C13.0156 37.1017 12.2811 36.3672 11.375 36.3672Z"
      fill="#BFCD30"
    />
    <path
      d="M21.1094 36.3672H18.375C17.4689 36.3672 16.7344 37.1017 16.7344 38.0078C16.7344 38.9139 17.4689 39.6484 18.375 39.6484H21.1094C22.0154 39.6484 22.75 38.9139 22.75 38.0078C22.75 37.1017 22.0154 36.3672 21.1094 36.3672Z"
      fill="#3A367E"
    />
    <path
      d="M49.2188 30.5239V9.29688C49.2188 5.97986 46.5201 3.28125 43.2031 3.28125H40.0312V1.64062C40.0312 0.734562 39.2967 0 38.3906 0C37.4846 0 36.75 0.734562 36.75 1.64062V3.28125H30.8438V1.64062C30.8438 0.734562 30.1092 0 29.2031 0C28.2971 0 27.5625 0.734562 27.5625 1.64062V3.28125H21.6562V1.64062C21.6562 0.734562 20.9217 0 20.0156 0C19.1096 0 18.375 0.734562 18.375 1.64062V3.28125H12.4688V1.64062C12.4688 0.734562 11.7342 0 10.8281 0C9.92206 0 9.1875 0.734562 9.1875 1.64062V3.28125H6.01562C2.69861 3.28125 0 5.97986 0 9.29688V42.1094C0 44.8233 2.20795 47.0312 4.92188 47.0312H29.4899C31.4114 52.2599 36.4412 56 42.3281 56C49.8668 56 56 49.8668 56 42.3281C56 37.3007 53.2719 32.899 49.2188 30.5239ZM3.28125 9.29688C3.28125 7.78914 4.50789 6.5625 6.01562 6.5625H9.1875V8.20312C9.1875 9.10919 9.92206 9.84375 10.8281 9.84375C11.7342 9.84375 12.4688 9.10919 12.4688 8.20312V6.5625H18.375V8.20312C18.375 9.10919 19.1096 9.84375 20.0156 9.84375C20.9217 9.84375 21.6562 9.10919 21.6562 8.20312V6.5625H27.5625V8.20312C27.5625 9.10919 28.2971 9.84375 29.2031 9.84375C30.1092 9.84375 30.8438 9.10919 30.8438 8.20312V6.5625H36.75V8.20312C36.75 9.10919 37.4846 9.84375 38.3906 9.84375C39.2967 9.84375 40.0312 9.10919 40.0312 8.20312V6.5625H43.2031C44.7109 6.5625 45.9375 7.78914 45.9375 9.29688V14.2188H3.28125V9.29688ZM4.92188 43.75C4.01723 43.75 3.28125 43.014 3.28125 42.1094V17.5H45.9375V29.1408C44.7872 28.8256 43.5771 28.6562 42.3281 28.6562C34.7895 28.6562 28.6562 34.7895 28.6562 42.3281C28.6562 42.8082 28.6814 43.2825 28.73 43.75H4.92188ZM42.3281 52.7188C36.5987 52.7188 31.9375 48.0575 31.9375 42.3281C31.9375 36.5987 36.5987 31.9375 42.3281 31.9375C48.0575 31.9375 52.7188 36.5987 52.7188 42.3281C52.7188 48.0575 48.0575 52.7188 42.3281 52.7188Z"
      fill="#3A367E"
    />
    <path
      d="M47.7969 40.6875H43.9688V36.8594C43.9688 35.9533 43.2342 35.2188 42.3281 35.2188C41.4221 35.2188 40.6875 35.9533 40.6875 36.8594V42.3281C40.6875 43.2342 41.4221 43.9688 42.3281 43.9688H47.7969C48.7029 43.9688 49.4375 43.2342 49.4375 42.3281C49.4375 41.4221 48.7029 40.6875 47.7969 40.6875Z"
      fill="#BFCD30"
    />
  </svg>
);

const RouteIcon = () => (
  <svg
    width="54"
    height="55"
    viewBox="0 0 54 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_73_174)">
      <path
        d="M9.99253 31.8166C9.06261 32.3785 8.4375 33.411 8.4375 34.5898C8.4375 36.3668 9.8569 37.8125 11.6016 37.8125C12.9765 37.8125 14.1488 36.9143 14.5842 35.6641H22.7812C24.5259 35.6641 25.9453 37.1097 25.9453 38.8867C25.9453 40.6637 24.5259 42.1094 22.7812 42.1094H10.125C7.21723 42.1094 4.85156 44.5188 4.85156 47.4805C4.85156 50.4421 7.21723 52.8516 10.125 52.8516H20.6719C21.2544 52.8516 21.7266 52.3706 21.7266 51.7773C21.7266 51.1841 21.2544 50.7031 20.6719 50.7031H10.125C8.38034 50.7031 6.96094 49.2574 6.96094 47.4805C6.96094 45.7035 8.38034 44.2578 10.125 44.2578H22.7812C25.689 44.2578 28.0547 41.8483 28.0547 38.8867C28.0547 35.9251 25.689 33.5156 22.7812 33.5156H14.5842C14.3348 32.7993 13.8435 32.199 13.2106 31.8166L21.2661 18.355C22.5333 16.4149 23.2031 14.1543 23.2031 11.8164C23.2031 5.30084 17.9987 0 11.6016 0C5.20446 0 0 5.30084 0 11.8164C0 14.1543 0.669832 16.4149 1.93704 18.355L9.99253 31.8166ZM11.6016 35.6641C11.02 35.6641 10.5469 35.1822 10.5469 34.5898C10.5469 33.9975 11.02 33.5156 11.6016 33.5156C12.1831 33.5156 12.6562 33.9975 12.6562 34.5898C12.6562 35.1822 12.1831 35.6641 11.6016 35.6641ZM11.6016 2.14844C16.8356 2.14844 21.0938 6.48549 21.0938 11.8164C21.0938 13.7358 20.5425 15.5907 19.4996 17.1805C19.4915 17.1929 19.4836 17.2054 19.476 17.2182L11.6016 30.3773C11.6016 30.3773 3.71166 17.1929 3.70354 17.1805C2.66066 15.5907 2.10938 13.7358 2.10938 11.8164C2.10938 6.48549 6.36757 2.14844 11.6016 2.14844Z"
        fill="#BFCD30"
      />
      <path
        d="M11.6016 17.1875C14.5093 17.1875 16.875 14.778 16.875 11.8164C16.875 8.85479 14.5093 6.44531 11.6016 6.44531C8.69379 6.44531 6.32812 8.85479 6.32812 11.8164C6.32812 14.778 8.69379 17.1875 11.6016 17.1875ZM11.6016 8.59375C13.3462 8.59375 14.7656 10.0394 14.7656 11.8164C14.7656 13.5934 13.3462 15.0391 11.6016 15.0391C9.8569 15.0391 8.4375 13.5934 8.4375 11.8164C8.4375 10.0394 9.8569 8.59375 11.6016 8.59375Z"
        fill="#BFCD30"
      />
      <path
        d="M42.3984 17.832C36.0013 17.832 30.7969 23.1329 30.7969 29.6484C30.7969 31.9901 31.4688 34.2542 32.74 36.1962L40.7655 49.0181C40.144 49.4011 39.6622 49.9958 39.4159 50.7031H30.1641C29.5816 50.7031 29.1094 51.1841 29.1094 51.7773C29.1094 52.3706 29.5816 52.8516 30.1641 52.8516H39.4158C39.8512 54.1018 41.0234 55 42.3984 55C44.1431 55 45.5625 53.5543 45.5625 51.7773C45.5625 50.6085 44.9484 49.5831 44.0315 49.0181L52.0569 36.1962C53.3281 34.2542 54 31.9901 54 29.6484C54 23.1329 48.7955 17.832 42.3984 17.832ZM42.3984 52.8516C41.8169 52.8516 41.3438 52.3697 41.3438 51.7773C41.3438 51.185 41.8169 50.7031 42.3984 50.7031C42.98 50.7031 43.4531 51.185 43.4531 51.7773C43.4531 52.3697 42.98 52.8516 42.3984 52.8516ZM50.2965 35.0125C50.2924 35.019 42.3984 47.6305 42.3984 47.6305C42.3984 47.6305 34.5045 35.0189 34.5004 35.0125C33.4575 33.4227 32.9062 31.5679 32.9062 29.6484C32.9062 24.3175 37.1644 19.9805 42.3984 19.9805C47.6324 19.9805 51.8906 24.3175 51.8906 29.6484C51.8906 31.5679 51.3393 33.4227 50.2965 35.0125Z"
        fill="#1E196B"
      />
      <path
        d="M42.3984 24.2773C39.4907 24.2773 37.125 26.6868 37.125 29.6484C37.125 32.6101 39.4907 35.0195 42.3984 35.0195C45.3062 35.0195 47.6719 32.6101 47.6719 29.6484C47.6719 26.6868 45.3062 24.2773 42.3984 24.2773ZM42.3984 32.8711C40.6538 32.8711 39.2344 31.4254 39.2344 29.6484C39.2344 27.8715 40.6538 26.4258 42.3984 26.4258C44.1431 26.4258 45.5625 27.8715 45.5625 29.6484C45.5625 31.4254 44.1431 32.8711 42.3984 32.8711Z"
        fill="#1E196B"
      />
      <path
        d="M25.418 52.8516C26.0005 52.8516 26.4727 52.3706 26.4727 51.7773C26.4727 51.1841 26.0005 50.7031 25.418 50.7031C24.8355 50.7031 24.3633 51.1841 24.3633 51.7773C24.3633 52.3706 24.8355 52.8516 25.418 52.8516Z"
        fill="#1E196B"
      />
    </g>
    <defs>
      <clipPath id="clip0_73_174">
        <rect width="54" height="55" fill="white" />
      </clipPath>
    </defs>
  </svg>
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

};

export default GlobelinkEgyptExportEmail;
