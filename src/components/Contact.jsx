import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import style from "./styles/contact.module.css";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // // Submit the form
    // form.submit();
    const templateParams = {
      email: form.email,
      from_name: form.name,
      to_name: "Ernesto Munes",
      message: form.message,
    };

    emailjs
      .send(
        "service_w2yymkb",
        "template_ekmwmpf",
        templateParams,
        "dxftUjOt8Lx-jFcg5"
      )
      .then(
        (result) => {},
        (error) => {}
      );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        I&apos;m always excited to hear about new opportunities and
        collaborations. Don&apos;t hesitate to reach out and let&apos;s make
        something great.
      </motion.p>
      <div className={style.container}>
        <form
          variants={slideIn("left", "", 0, 1)}
          onSubmit={handleSubmit}
          className={style.form}
        >
          <input
            type="text"
            placeholder="Name"
            required
            maxLength="30"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={style.input}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            className={style.input}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Say something"
            required
            maxLength="500"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`${style.input} ${style.textarea}`}
          />
          <button type="submit" className={style.btn_container}>
            <span className={style.btn_hover}>Get in touch</span>
            <span className={style.btn}>Get in touch</span>
          </button>
        </form>
        <motion.div
          variants={slideIn("right", "", 0, 1)}
          className={style.mapContainer}
        >
          <MapContainer
            center={[49.992863, 8.247253]}
            zoom={10}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
              attribution="© OpenStreetMap contributors"
            />
            <Marker position={[49.992863, 8.247253]} icon={customIcon}>
              <Popup>
                Wanna have a virtual coffee? <br /> Send me a message.
              </Popup>
            </Marker>
            <div className={style.info}>
              <p>Ernesto Munes</p>
              <p>Mainz, Germany</p>
            </div>
          </MapContainer>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact", "my-0");
