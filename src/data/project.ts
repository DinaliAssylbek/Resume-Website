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
  }
];
