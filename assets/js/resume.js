// jQuery(function ($, undefined) {
//     $('#term_demo').terminal(function (command) {
//         if (command !== '') {
//             var result = window.eval(command);
//             if (result != undefined) {
//                 this.echo(String(result));
//             }
//         }
//     }, {
//         greetings: 'Thank you ',
//         name: 'js_demo',
//         height: '100%' ,
//         width: '100%' ,
//         prompt: 'js> '
//     });
// });


let Resume = new Object();

Resume.prototype.cv = {
    first_name: "Varun Bhat",
    last_name: "Kilenje Nataraj",
    prefered_name: "Varun",
    contact:{
        email: 'varunbhat.kn@gmail.com',
        webpage: 'varunbhat.me',
        linkedin: 'https://in.linkedin.com/in/varunbhatkn',
        github: 'https://github.com/varunbhat',
        mobile: '+1 (650)228-3691'
    },
    education: [
        {
            Degree: 'Masters',
            Graduated: false,
            Major: 'Electrical Engineering',
            University: 'Colorado State University',
            Location: 'Fort Collins, CO',
            GPSCoordinates: '40.5734° N, 105.0865° W',
            StartDate: new Date(2016, 1, 19),
            EndDate: new Date(2018, 5, 12),
            Courses: [
                'FPGA Signal Processing/Software Radio',
                'Embedded Systems',
                'Analysis of Algorithms',
                'Machine Learning',
                'Parallel Processing',
                'Advanced Computer Architecture',
                'Advanced VLSI Design',
                'Internet Engineering'
            ],
            GPA: 3.5
        },
        {
            Degree: 'Bachelors',
            Graduated: true,
            Major: 'Electronics and Communication',
            University: 'Visvesvaraya Technological University',
            Location: '13.1172435° N ,77.6321605° E',
            StartDate: new Date(2009, 8, 19),
            EndDate: new Date(2013, 5, 20),
            Courses: [],
            GPA: '72%',
        }
    ],
    experience: [
        {
            Company: 'Synaptics Inc.',
            JobTitle: "Concept Prototyping Intern",
            JobType: 'Internship',
            StartDate: new Date(2017, 5, 5),
            EndDate: new Date(2017, 8, 25),
            JobSummary: [
                "Designed Synaptics touch-display & fingerprint drivers and integrated into Android by addition of system service - kernel bindings.",
                "Built a customized Board Support Package (BSP) from Linaro kernel involving addition of SPI/I2C devices to the kernel device tree and other proprietary blobs to the bootloader package; contributed to Qualcomm Dragonboard 410c firmware codebase.",
                "Suggested changes to the PCB daughterboard for display integration and the addition of a Camera Module.",
                "Gained experience in Linux Kernel driver development, automating build using Docker and scripting languages, Cross compiling for ARM architecture, PCB design using Altium, Agile for software and hardware maintenance."
            ],
            tags: ['hardware', 'firmware', 'software']
        },
        {
            Company: "Council of Scientific and Industrial research",
            JobTitle: "Project Engineer",
            JobType: "Contract",
            StartDate: new Date(2017, 1, 12),
            EndDate: new Date(2017, 5, 30),
            JobSummary: [
                "Designed circuit prototype of Weighing scale, Pulse Oximeter and Thermometer using Analog Front End(AFE) ICs from TI and interfacing the sensors to the PCB with the integration of Low power Bluetooth 4.0 (BLE) support",
                "Interfaced with JTAG and Integrated Circuit debuggers(ICD) for in circuit testing.",
                "Integrated the devices to an android application for data aggregation and storage on the cloud (AWS)",
                "Reduced the cost of maintenance of records in Primary health centers(PHC) after being deployed & tested in 50 PHC across India."
            ],
            tags: ['hardware', 'firmware', 'software']
        },
        {
            Company: "Tayana Software Solutions",
            JobTitle: "Software Developer",
            JobType: "Full Time",
            StartDate: new Date(2013, 7, 15),
            EndDate: new Date(2014, 8, 25),
            JobSummary: [
                "Built the Load balancer & message sorting module for incoming calls and SMS from the SS7 network.",
                "Involved in VoIP integration using SIGTRAN with Load balancer.",
                "Aided in Call Screening and Short Message Switching Centre (SMSC) codebase extension and integration with web interface."
            ],
            tags: [ 'software']
        }
    ],
    additional_experience: [
        {
            Company: 'Colorado State University',
            JobTitle: "Teaching Assistant",
            JobType: "GRA",
            StartDate: new Date(2017, 1, 20),
            EndDate: new Date(2017, 12, 18),
            JobSummary: [
                "Teaching assistant for Computer Organization and Architecture & Embedded Systems courses.",
                "Assist and formulating assignments for curriculum involving FreeRTOS, gem5, McPat, NoCSim, SystemC.",
                "Demonstrated excellent communication and managing skills in handling assignments and concerns of students."
            ]
        },
        {
            Company: 'Colorado State University',
            JobTitle: "Web Developer",
            JobType: "Hourly",
            StartDate: new Date(2016, 8, 20),
            EndDate: new Date(2017, 3, 18),
            JobSummary: [
                "Implemented an infrastructure model using Docker for creating and managing webapp by the department.",
                "Well versed in software design strategies; developed web tools using NodeJS, Python, PHP, JQuery with MySQL, SQLite, NoSQL backend."
            ]
        },
        {
            Company: 'freelancer.com',
            JobTitle: "Freelance Developer",
            JobType: "Freelance Contract",
            StartDate: new Date(2017, 1, 1),
            EndDate: new Date(2017, 5, 30),
            JobSummary: [
                "Negotiated with clients to obtain projects from across the globe; 90% completion rate & 30% repeat hire from over 20 projects in a span of 5 months.",
                "Excelled in developing software for embedded systems, cloud applications and organizing code using Git"
            ]
        },
        {
            Company: 'freelancer.com',
            JobTitle: "Freelance Developer",
            JobType: "Freelance Contract",
            StartDate: new Date(2017, 1, 1),
            EndDate: new Date(2017, 5, 30),
            JobSummary: [
                "Negotiated with clients to obtain projects from across the globe; 90% completion rate & 30% repeat hire from over 20 projects in a span of 5 months.",
                "Excelled in developing software for embedded systems, cloud applications and organizing code using Git"
            ]
        },
    ],
    projects: [
        {
            Name: "Hardware Security on Photonics Network on Chip",
            Type: "Graduate Dissertation Project",
            Description: [
                "Designed a framework to exploit process variations inside a chip-multiprocessor to enable secure communication in the photonic waveguide.",
                "Used SystemC/TLM to calculate the system performance, throughput and Python PNoC models to calculate SNR.",
                "Coauthored the paper currently under review; SOTERIA: Exploiting Process Variations to Enhance Hardware Security with Photonic NoC Architectures",
            ]
        },
        {
            Name: "MIL-1553 BUS Protocol Implementation ",
            Type: "Undergraduate Dissertation Project",
            Description: [
                "Implemented the bus controller & remote terminal subsystems with the 8051 IP Core implemented on Actel FPGA"
            ]

        },
        {
            Name: 'RISC-V FREERTOS Port',
            Description: [
                "Currently working on porting FreeRTOS to RISC-V ISA and testing it implementation of the Rocket chip on zynq FPGA."
            ]
        },
        {
            Name: "RISC-V Hardware Optimization for Approximate computing support",
            Description: [
                "Adding hardware support (microarchitecture) for approximate computing in RISC-V ISA; testing optimization on Rocket chip",
                "Adding compiler support on GNU Toolchain for the custom opcodes built for approximate computing"
            ]
        },
        {
            Name: "High Precision Digital Lock-in Amplifier",
            Description: [
                "Developed the RTL for Xilinx zynq FPGA using DSP48 slices to implement the FIR and IIR filters used in IQ modulator and Demodulator in the Amplifier for sample rate conversion."
            ]
        },
        {
            Name: "Ultrasound Tomography",
            Description: ["Designed the custom PCB and Firmware to interface ADC signals from 20 channels and process data using NIOS II on Altera FPGA"]
        },
        {
            Name: "IoT P2P Network and service discovery using Kademelia",
            Description: ["Designed a POC and tested the IoT network implementation for service discovery with the underlying protocol used in torrents."]
        },
        {
            Name: "Handwriting Recognition Using Deep Learning",
            Description: ["Implemented a modified version of LeNet-5 Convolution Neural Net for offline handwriting recognition"]
        },
        {
            Name: "OpenCV Time-lapse Video Generator",
            Description: ["Designed a backend server application that pulls image from a camera through raspberry pi to AWS server"]
        },
        {
            Name: "BEAM-INTERRUPTION-BASED VEHICLE CLASSIFIER",
            Description: ["Implemented the hardware from the paper  ; Designed the ADC circuits and firmware for an ARM M0+ μC."]
        },
        {
            Name: "MISCELLANEOUS ARDUINO PROJECTS",
            Description: "•\tSpeech to text, LED dot Matrix display, Arduino Clock, Home automation using RPi/Arduino, Smart TV controller UG Intern project at DFYGraviti, OpenCV Arduino Maze solver, SMS event registration using Symbian OS, … "
        }
    ],
    skills: {
        languages: [
            {language: 'C', proficiency: 9},
            {language: 'C++', proficiency: 9},
            {language: 'bash', proficiency: 9},
            {language: 'Python', proficiency: 9},
            {language: 'Java', proficiency: 8},
            {language: 'Javascript', proficiency: 9},
            {language: 'MATLAB', proficiency: 8},
            {language: 'Verilog/SystemVerilog', proficiency: 7},
            {language: 'VHDL', proficiency: 7},
            {language: 'NodeJs', proficiency: 8},
            {language: 'HTML', proficiency: 9},
            {language: 'CSS', proficiency: 9},
            {language: 'Scala', proficiency: 5},
            {language: 'MySQL', proficiency: 8},
            {language: 'NoSQL', proficiency: 7},
            {language: 'PHP', proficiency: 7},
        ],
        protocols: ['UART', 'I2C', 'SPI', 'CAN', 'AXI', 'PCIe', 'SATA', 'Bluetooth 4.0 (BLE)', 'Wi-Fi', 'ZigBee'],
        os: ['μClinux', 'Busybox', 'FreeRTOS', 'RTEMS', 'yocto', 'Android'],
        hardware_platform: ['AVR', 'ARM Cortex M0+/M3/M7', 'ARMv51', 'Xilinx zedboard', 'Altera cyclone 2/4'],
        developer_tools: ['Eclipse', 'Pycharm', 'Intellij', 'Android Studio', 'Keil', 'DS5', 'MPLAB', 'LABView', 'Eagle'],
        version_management: ['git']
    }
};
