import { Experience } from "@/types/experience";

export const experiences:Experience[] = [
    {
        company: "Suntra MedTech Solutions",
        title: "Software Engineer I",
        from: "AUG 2025",
        to: "PRESENT",
        info: []
    },
    {
        company: "Laboratory of Circuits and Systems (LCAS)",
        title: "Research Assistant",
        from: "JAN 2025",
        to: "AUG 2025",
        info: ["Developed a Python/C ML evaluation pipeline for weight perturbation, data transfer, inference, and results collection across 50 iterations of 100-image MNIST batches, measuring accuracy degradation and identifying a 5.5-percentage-point fixed- versus floating-point baseline gap.", "Built a reusable TensorFlow-to-FPGA deployment and profiling framework using HLS4ML and Vivado, evaluating networks up to 10,497 parameters across reuse factors and precision settings; identified DSP utilization as the primary scalability bottleneck and reduced usage from 88 blocks to 3 (96.6%)."]
    },
    {
        company: "Sanchez Research Lab",
        title: "Research Assistant",
        from: "AUG 2023",
        to: "DEC 2024",
        info: ["Reengineered a MATLAB-based electrical impedance tomography pipeline as an object-oriented, multithreaded Python application for noninvasive arterial imaging, enabling concurrent acquisition, data processing, visualization, and storage while increasing reconstruction throughput from 4.2 to 50 FPS, a 12x improvement.", "Engineered a modular, asynchronous Flutter mobile application with a Firebase cloud backend that collected survey responses, images, and geolocation data from 800+ study participants, integrating Authentication, Firestore, and Storage with input validation, upload timeouts, and event logging."]
    },
    {
        company: "University IT Department",
        title: "Software Engineering Intern",
        from: "JAN 2023",
        to: "AUG 2023",
        info: ["Built a containerized monitoring platform using Python, FastAPI, SQL, and Docker, developing RESTful APIs and automated pipelines to collect and expose Linux virtual-machine health metrics for real-time observability."]   
    }
]