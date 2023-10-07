"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import ObserverComponent from "@/components/ObserverComponent";
import FramerMotion from "@/components/FramerMotion";
import RandomText from "@/components/RandomText";
import FramerMotionObserver from "@/components/FramerMotionObserver";

export default function Home() {
  return (
    <main className="flex flex-col w-full px-[10rem] pt-[10rem]">
      <FramerMotion />

      <ObserverComponent />
      <FramerMotionObserver/>
      <RandomText/>
    </main>
  );
}
