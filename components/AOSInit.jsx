"use client";

import Aos from "aos";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return null;
}
