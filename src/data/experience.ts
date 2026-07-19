import { Experience } from "@/types/experience";

export const experiences:Experience[] = [
    {
        company: "Suntra MedTech Solutions",
        title: "Software Engineer I",
        from: "AUG 2025",
        to: "PRESENT",
        info: ["Developed production software for embedded Linux medical devices, working across Yocto-based systems, embedded firmware, Linux/Windows applications, and device bring-up from manufacturing through deployment.", "Built and maintained cloud-connected device services supporting secure telemetry, OTA versioning, remote device management, and operational monitoring using AWS (EC2, S3, Lambda, CloudWatch, Secrets Manager).", "Owned engineering infrastructure including CI/CD pipelines, Docker development environments, deployment automation, and internal tooling to improve developer productivity and release reliability."]
    },
    {
        company: "Laboratory of Circuits and Systems (LCAS)",
        title: "Research Assistant",
        from: "JAN 2025",
        to: "AUG 2025",
        info: ["Developed a Python/C ML evaluation pipeline for weight perturbation, data transfer, inference, and results collection across 50 iterations of 100-image MNIST batches, measuring accuracy degradation and identifying a 5.5-percentage-point fixed- versus floating-point baseline gap.", "Built a reusable TensorFlow-to-FPGA deployment and profiling framework using HLS4ML and Vivado, evaluating networks up to 10,497 parameters across reuse factors and precision settings; identified DSP utilization as the primary scalability bottleneck and reduced usage from 88 blocks to 3 (96.6%)."],
        links: [["Report", "/LCAS FPGA Emulation Report.pdf"]]
    },
    {
        company: "Sanchez Research Lab",
        title: "Research Assistant",
        from: "AUG 2023",
        to: "DEC 2024",
        info: ["Reengineered a MATLAB-based electrical impedance tomography pipeline as an object-oriented, multithreaded Python application for noninvasive arterial imaging, enabling concurrent acquisition, data processing, visualization, and storage while increasing reconstruction throughput from 4.2 to 50 FPS, a 12x improvement.", "Engineered a modular, asynchronous Flutter mobile application with a Firebase cloud backend that collected survey responses, images, and geolocation data from 800+ study participants, integrating Authentication, Firestore, and Storage with input validation, upload timeouts, and event logging."],
        links: [["Mobile App", "https://apps.apple.com/us/app/sanchez-research-lab/id6502211500?l=fr-FR#information"], ["Demo", "https://www.linkedin.com/feed/update/urn:li:activity:7320177717302169602/"]]
    },
    {
        company: "University IT Department",
        title: "Software Engineering Intern",
        from: "JAN 2023",
        to: "AUG 2023",
        info: ["Built a containerized monitoring platform using Python, FastAPI, SQL, and Docker, developing RESTful APIs and automated pipelines to collect and expose Linux virtual-machine health metrics for real-time observability."]   
    }
]