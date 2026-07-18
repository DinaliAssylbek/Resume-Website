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
  },
  {
    title: "Ring Rise Smart Ring",
    description:   "Engineered Ring Rise, a wearable embedded system featuring a custom PCB, STM32 microcontroller, I²C-based biometric sensors, and vibration motor control. Developed embedded C firmware for real-time sensor acquisition, alarm scheduling, and health monitoring to support sleep tracking and smart wake-up functionality, winning the Get Seeded competition.",
    date: "SEP 2023",
    skills: ["C", "STM32", "Embedded Systems", "PCB Design", "I²C", "Firmware Development"],
    imagePath: "/RingRise.jpeg"
  },
  {
    title: "AI Style Transfer Platform",
    description:
      "Built an end-to-end AI application featuring a Flutter mobile frontend and Flask REST API for real-time image style transfer. Trained custom CycleGAN models on curated artist datasets to transform photos into the styles of Van Gogh, Monet, and Munch.",
    date: "MAY 2025",
    skills: ["Flutter", "Flask", "Python", "PyTorch", "Railway"],
    link: "https://github.com/DinaliAssylbek/Style_Transfer_API/tree/main"
  }
];
