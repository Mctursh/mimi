"use client";
import AncientScroll from "@/component/AncientScroll/ancientScroll";
import styles from "./page.module.css";
import LoveMessage from "@/component/LottieAnimations/loveMessage";
import HappyValentine from "@/component/LottieAnimations/happyValentine";
import Image from "next/image";
import AncientScrollModal from "@/component/AncientScroll/ancientScrollModal";
import { useEffect, useRef, useState } from "react";
import { Marck_Script, Tangerine } from "next/font/google";

const marckScipt = Marck_Script({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    if (showModal && scrollRef?.current) {
      scrollRef.current.style.transform = "scale(1)";
    }
  }, [showModal]);

  return (
    <>
      <Image
        src={"/loveBg.svg"}
        width={1000}
        height={1000}
        alt="background"
        style={{
          width: "100%",
          height: "100dvh",
          objectFit: "cover",
          position: "absolute",
          opacity: 0.7,
          top: 0,
        }}
      />
      <main className={styles.main}>
        <div style={{ marginTop: "0.3rem" }}>
          <HappyValentine />
        </div>
        <LoveMessage
          clickEvent={() => {
            setShowModal(true);
          }}
        />

        <AncientScrollModal
          bg="transparent"
          show={showModal}
          onHide={() => {
            if (scrollRef?.current && showModal) {
              scrollRef.current.style.transform = "scale(0.1)";
            }
            setTimeout(() => {
              setShowModal(false);
            }, 700);
          }}
        >
          <div
            style={{
              width: "100%",
              height: "600px",
              borderRadius: "0px 0px 8px 8px",
              overflow: "hidden",
              transition: "transform 0.6s ease",
              transform: "scale(0.1)",
            }}
            ref={scrollRef}
          >
            <AncientScroll
              outerBg="transparent"
              textFontFamily={marckScipt.style?.fontFamily}
              textFontSize="2.2rem"
              textStyle={{ fontWeight: "bold" }}
            >
              <div
                style={{
                  display: "flex",
                  height: "80%",
                  flexFlow: "column nowrap",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    textAlign: "left",
                    marginBottom: "8px",
                  }}
                >
                  <b>My Dearest, Mimi</b>
                </span>
                <>
                  As I code these words, my heart overflows with love and
                  gratitude for having you in my life. In your presence, each
                  moment becomes a cherished memory, your smile, like a sunbeam,
                  brightens even the darkest corners of my world. Words cannot
                  express my deepest appreciation for you &quot;&nbsp;I LOVE
                  YOU&nbsp;&quot;.
                  <div style={{ marginTop: "8px" }}>
                    Happy Valentine&nbsp;&apos;s Day, my love, Here&nbsp;&apos;s
                    to us and the beautiful journey we continue to embark upon
                    together.
                  </div>
                </>
                <span style={{ width: "100%", textAlign: "right" }}>
                  Your Love Ayoade
                </span>
              </div>
            </AncientScroll>
          </div>
        </AncientScrollModal>
        <div></div>
      </main>
    </>
  );
}

//394 - 200
//498 - 80
