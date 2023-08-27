import React from "react";
import { motion } from "framer-motion";
import { BsChevronDoubleUp } from "react-icons/bs";
import { fadeIn } from "../utils/motion";
import { social } from "../constants";
import style from "./styles/footer.module.css";

const Footer = () => (
  <motion.section
    id={style.footer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <motion.div
      variants={fadeIn("", "", 1, 1)}
      className={style.up_icon_container}
    >
      <abbr title="back to home page">
        <button
          type="button"
          className={`${style.overlay} ${style.up_overlay}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <BsChevronDoubleUp
            className={`${style.icon_hover} ${style.up_icon_hover}`}
          />
          <BsChevronDoubleUp className={`${style.icon} ${style.up_icon}`} />
        </button>
      </abbr>
    </motion.div>
    <p className={style.title}>
      <span className={style.text}>My Social Networks</span>
    </p>
    <div className={style.icon_container}>
      {social.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          className={style.overlay}
          rel="noreferrer"
        >
          <img
            className={style.icon_hover}
            src={social.icon}
            alt={social.name}
          />
          <img className={style.icon} src={social.icon1} alt={social.name} />
        </a>
      ))}
    </div>
    <abbr className={style.p}>@Copyright 2023 Ernesto Munes</abbr>
  </motion.section>
);

export default Footer;
