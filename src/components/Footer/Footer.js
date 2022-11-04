import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import image from "../../../src/DEBSOClogowhitePNG.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <a
          href="https://www.youtube.com/channel/UCx7ixKEIib3ikQd_QBEY9Qw"
          className={styles.youtube}
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://m.facebook.com/debatingsociety3103.nitd/"
          className={styles.facebook}
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a
          href="https://www.instagram.com/debsocnitd/"
          className={styles.instagram}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href=" " className={styles.github}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.debsocnitdgp.in/" target="_blank">
          <img className={styles.logods} src={image} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
