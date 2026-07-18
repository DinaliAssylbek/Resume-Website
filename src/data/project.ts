import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "TerminalBench Agent Evaluation",
    description:
        "Conducted a comparative evaluation of frontier LLM agents across 40 software engineering, security, and systems tasks, analyzing execution trajectories, shell command usage, runtime, API cost, and failure patterns.",
    date: "JUN 2026",
    skills: ["Python", "Kimi K2.6", "Claude Haiku", "Deepseek V4 Pro", "Daytona", "Docent"],
    link: "/llmEvaluation",
  },
  {
    title: "Real-Time Operating System",
    description:
    "A learning-focused real-time operating system for the STM32F103 Cortex-M3, built from scratch to explore scheduling, context switching, synchronization, and timing close to the hardware. It implements priority-based preemptive scheduling, round-robin task execution, ARM assembly context switching, sleep queues, semaphores, and timer-driven thread switching.",
    date: "APR 2026",
    skills: ["C", "STM32", "Cortex-M3", "Assembly"],
    link: "https://github.com/DinaliAssylbek/Simple_RTOS",
    imagePath: "/RTOS.jpeg"
  },
  {
    title: "Wearable Navigation System - UVU Hackathon - 1st Place",
    description: "Built a wearable obstacle-aware navigation system during a 24-hour hackathon using Raspberry Pi/Linux, integrating a rotating ultrasonic sensor for environmental scanning and Bluetooth audio feedback to headphones for real-time navigation assistance.",
    date: "MAR 2024",
    skills: ["Linux", "Python", "Raspberry Pi", "Sensors"],
    imagePath: "/Hackathon.jpeg"
  },
  {
    title: "FPGA Pong Game",
    description: "Designed a custom CPU in Verilog implementing a custom instruction set architecture (ISA), developed VGA display and input controller modules, created a compiler to translate code into instruction set, and executed a Pong game entirely on FPGA hardware using synchronous digital logic and finite state machines.",
    date: "MAY 2024",
    skills: ["Verilog", "Assembly", "CPU Architecture", "DE1-SoC", "ModelSim", "Python"],
    link: "https://github.com/DinaliAssylbek/Pong-FPGA",
    imagePath: "/PongFPGA.png"
  },
  {
    title: "This Website",
    description:
      "Built a responsive portfolio website with Next.js, React, and TypeScript, using reusable components and structured data to showcase projects, technical skills, education, publications, and detailed project reports.",
    date: "JUL 2026",
    skills: ["Next.js", "Typescript", "React"],
    link: "https://github.com/DinaliAssylbek/Resume-Website"
  }
];
