// SCROLL FIX (header offset)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const offset = 80;

        const position = target.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });
    });
});

// FADE-IN ANIMATION
const elements = document.querySelectorAll(".card, .steps div");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

function showFeature(type) {

    const modal = document.getElementById("featureModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    const data = {
        Detection: {
            title: "Real-time Vehicle Detection",
            text: "Uses YOLOv8 to detect cars, buses, bikes and trucks in real-time from multiple cameras."
        },
        AI: {
            title: "AI Signal Control",
            text: "AI dynamically adjusts signal timing based on traffic density in each lane."
        },
        Emergency: {
            title: "Emergency Priority System",
            text: "RFID detects ambulance/fire vehicles and instantly gives green signal."
        },
        Dashboard: {
            title: "Live Monitoring Dashboard",
            text: "Displays live vehicle count, active lane and system status."
        },
        Telegram: {
            title: "Telegram Control",
            text: "Allows manual override and monitoring using Telegram bot."
        },
        Alerts: {
            title: "Email & WhatsApp Alerts",
            text: "Sends alerts when traffic is high or emergency is detected."
        }
    };

    title.innerText = data[type].title;
    text.innerText = data[type].text;

    modal.style.display = "block";
}

/* CLOSE MODAL */
document.querySelector(".close").onclick = function() {
    document.getElementById("featureModal").style.display = "none";
}

/* CLICK OUTSIDE CLOSE */
window.onclick = function(e) {
    const modal = document.getElementById("featureModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

function openFeature(type) {
    const modal = document.getElementById("featureModal");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    modal.style.display = "block";

    // ================= VEHICLE DETECTION =================
    if(type === "detection"){
        title.innerText = "🚗 Real-time Vehicle Detection";

        body.innerHTML = `
        <p>
        In this project, <b>YOLOv8</b> is used to detect vehicles from 4 different camera feeds in real-time.
        The system identifies cars, bikes, buses, and trucks and tracks them using unique IDs.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>Capture live/video input from 4 lanes</li>
            <li>Each frame is processed using YOLOv8 model</li>
            <li>Bounding boxes are generated for each vehicle</li>
            <li>ByteTrack assigns unique IDs to vehicles</li>
            <li>Vehicles crossing detection line are counted</li>
        </ul>

        <h4>🎯 Why It Matters</h4>
        <ul>
            <li>Accurate traffic density calculation</li>
            <li>Works in real-time environment</li>
            <li>Handles multiple lanes simultaneously</li>
        </ul>

        <h4>🛠 Technologies Used</h4>
        <p>YOLOv8, OpenCV, Python, ByteTrack</p>
        `;
    }

    // ================= AI SIGNAL =================
    else if(type === "ai"){
        title.innerText = "🤖 AI-based Signal Control";

        body.innerHTML = `
        <p>
        The system uses AI logic to dynamically control traffic signals based on real-time vehicle density.
        Each lane is analyzed and assigned green signal time automatically.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>Count vehicles in each lane</li>
            <li>Calculate required green signal time</li>
            <li>Sort lanes based on traffic density</li>
            <li>Give priority to highest traffic lane</li>
            <li>Repeat cycle continuously</li>
        </ul>

        <h4>🎯 Advantages</h4>
        <ul>
            <li>Reduces traffic congestion</li>
            <li>Minimizes waiting time</li>
            <li>Fully automatic signal system</li>
        </ul>

        <h4>🛠 Technologies Used</h4>
        <p>Python Logic, OpenCV, YOLO Output Data</p>
        `;
    }

    // ================= EMERGENCY =================
    else if(type === "emergency"){
        title.innerText = "🚑 Emergency Priority System";

        body.innerHTML = `
        <p>
        The system uses <b>RFID technology</b> to detect emergency vehicles such as ambulances
        and immediately provides signal clearance.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>Emergency vehicle carries RFID tag</li>
            <li>RFID reader detects signal</li>
            <li>Arduino sends signal to Python system</li>
            <li>Current traffic cycle is interrupted</li>
            <li>Emergency lane gets instant green signal</li>
        </ul>

        <h4>🚨 Smart Features</h4>
        <ul>
            <li>Automatic override system</li>
            <li>Returns to normal after emergency clears</li>
            <li>Sends alerts to control system</li>
        </ul>

        <h4>🛠 Technologies Used</h4>
        <p>RFID Module, Arduino Mega, Serial Communication, Python</p>
        `;
    }

    // ================= LIVE =================
    else if(type === "live"){
        title.innerText = "📡 Live Monitoring Dashboard";

        body.innerHTML = `
        <p>
        The system provides real-time monitoring of traffic conditions across all lanes.
        It displays live counts, active lane, and timing details.
        </p>

        <h4>⚙️ Features</h4>
        <ul>
            <li>Live vehicle count per lane</li>
            <li>Active signal display</li>
            <li>Countdown timer visualization</li>
            <li>Emergency status indicator</li>
        </ul>

        <h4>🎯 Benefits</h4>
        <ul>
            <li>Real-time system visibility</li>
            <li>Useful for traffic authorities</li>
            <li>Improves monitoring efficiency</li>
        </ul>

        <h4>🛠 Technologies Used</h4>
        <p>Python, JSON, OpenCV Display</p>
        `;
    }

    // ================= TELEGRAM =================
    else if(type === "telegram"){
        title.innerText = "📲 Telegram Control System";

        body.innerHTML = `
        <p>
        The system can be controlled remotely using a Telegram bot interface.
        It allows manual override and real-time monitoring.
        </p>

        <h4>⚙️ Features</h4>
        <ul>
            <li>Manual lane control</li>
            <li>Emergency activation</li>
            <li>Live dashboard updates</li>
            <li>System start/stop control</li>
        </ul>

        <h4>🎯 Use Case</h4>
        <ul>
            <li>Remote traffic management</li>
            <li>Smart city integration</li>
        </ul>

        <h4>🛠 Technologies Used</h4>
        <p>Telegram Bot API, Python</p>
        `;
    }

    // ================= ALERTS =================
    else if(type === "alerts"){
        title.innerText = "📩 Email & WhatsApp Alerts";

        body.innerHTML = `
        <p>
        The system automatically sends alerts when traffic congestion is high
        or an emergency vehicle is detected.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>Detect high traffic density</li>
            <li>Trigger alert system</li>
            <li>Send Email notification</li>
            <li>Send WhatsApp alert via Twilio</li>
        </ul>

        <h4>📢 Alerts Include</h4>
        <ul>
            <li>Lane number</li>
            <li>Vehicle count</li>
            <li>Time of detection</li>
        </ul>

        <h4>🛠 Technologies Used</h4>
        <p>SMTP (Email), Twilio API (WhatsApp), Python</p>
        `;
    }
}

function closeModal(){
    document.getElementById("featureModal").style.display = "none";
}

function openTech(type){
    const modal = document.getElementById("featureModal"); // ✅ use SAME modal
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    modal.style.display = "block";

    // ================= YOLO =================
    if(type === "yolo"){
        title.innerText = "🧠 YOLOv8 - Object Detection";

        body.innerHTML = `
        <p>
        YOLOv8 is the core AI model used in this project to detect vehicles in real-time.
        It processes video frames and identifies cars, bikes, buses, and trucks instantly.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>Camera captures live traffic feed</li>
            <li>Frames passed to YOLOv8 model</li>
            <li>Model detects objects using deep learning</li>
            <li>Bounding boxes generated for vehicles</li>
            <li>Output used for traffic decision</li>
        </ul>

        <h4>🔥 Why Used</h4>
        <ul>
            <li>High accuracy in object detection</li>
            <li>Real-time performance</li>
            <li>Supports multiple objects simultaneously</li>
        </ul>

        <h4>📌 Role in Project</h4>
        <p>Main component for traffic density calculation.</p>
        `;
    }

    // ================= OPENCV =================
    else if(type === "opencv"){
        title.innerText = "📷 OpenCV - Image Processing";

        body.innerHTML = `
        <p>
        OpenCV is used to handle video processing and image manipulation before AI detection.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>Capture frames from cameras</li>
            <li>Resize and optimize images</li>
            <li>Draw bounding boxes</li>
            <li>Display processed output</li>
        </ul>

        <h4>🔥 Why Used</h4>
        <ul>
            <li>Fast image processing</li>
            <li>Easy integration with Python</li>
            <li>Real-time visualization</li>
        </ul>

        <h4>📌 Role in Project</h4>
        <p>Acts as bridge between camera input and AI model.</p>
        `;
    }

    // ================= PYTHON =================
    else if(type === "python"){
        title.innerText = "🐍 Python - Core System Logic";

        body.innerHTML = `
        <p>
        Python controls the entire system logic including AI processing, decision making,
        and hardware communication.
        </p>

        <h4>⚙️ Responsibilities</h4>
        <ul>
            <li>Run YOLO model</li>
            <li>Calculate vehicle density</li>
            <li>Control traffic signals</li>
            <li>Handle serial communication</li>
        </ul>

        <h4>🔥 Why Used</h4>
        <ul>
            <li>Easy AI integration</li>
            <li>Strong library support</li>
            <li>Fast development</li>
        </ul>

        <h4>📌 Role in Project</h4>
        <p>Main brain of the entire system.</p>
        `;
    }

    // ================= ARDUINO =================
    else if(type === "arduino"){
        title.innerText = "🔌 Arduino Mega - Hardware Controller";

        body.innerHTML = `
        <p>
        Arduino Mega is used to control physical traffic signals and hardware devices.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>Receives commands from Python</li>
            <li>Controls LEDs (traffic lights)</li>
            <li>Operates servo motors</li>
            <li>Reads RFID input</li>
        </ul>

        <h4>🔥 Why Used</h4>
        <ul>
            <li>Reliable hardware control</li>
            <li>Multiple pin support</li>
            <li>Easy integration</li>
        </ul>

        <h4>📌 Role in Project</h4>
        <p>Executes real-world traffic signal actions.</p>
        `;
    }

    // ================= RFID =================
    else if(type === "rfid"){
        title.innerText = "📡 RFID Module - Emergency Detection";

        body.innerHTML = `
        <p>
        RFID module detects emergency vehicles using RFID tags and triggers signal override.
        </p>

        <h4>⚙️ How It Works</h4>
        <ul>
            <li>RFID tag attached to ambulance</li>
            <li>Reader detects tag signal</li>
            <li>System identifies emergency</li>
            <li>Signal immediately changes</li>
        </ul>

        <h4>🔥 Why Used</h4>
        <ul>
            <li>Fast detection</li>
            <li>Reliable communication</li>
            <li>Works without camera</li>
        </ul>

        <h4>📌 Role in Project</h4>
        <p>Ensures emergency vehicles get priority.</p>
        `;
    }

    // ================= TELEGRAM =================
    else if(type === "telegram"){
        title.innerText = "📲 Telegram Bot - Remote Control";

        body.innerHTML = `
        <p>
        Telegram bot allows remote control and monitoring of the traffic system.
        </p>

        <h4>⚙️ Features</h4>
        <ul>
            <li>Manual lane control</li>
            <li>Emergency activation</li>
            <li>Live system status</li>
            <li>Remote commands</li>
        </ul>

        <h4>🔥 Why Used</h4>
        <ul>
            <li>Easy remote access</li>
            <li>No extra app required</li>
            <li>Fast communication</li>
        </ul>

        <h4>📌 Role in Project</h4>
        <p>Provides remote control interface.</p>
        `;
    }
}

function closeTech(){
    document.getElementById("techModal").style.display = "none";
}

function checkOrientation() {
    const rotate = document.getElementById("rotateMessage");

    if (window.innerHeight > window.innerWidth) {
        // Portrait → show message
        rotate.style.display = "flex";
    } else {
        // Landscape → hide message
        rotate.style.display = "none";
    }
}

// Run on load
checkOrientation();

// Run on resize / rotate
window.addEventListener("resize", checkOrientation);

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// SCROLL UP
document.getElementById("scrollUp").onclick = function () {
    window.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth"
    });
};

// SCROLL DOWN
document.getElementById("scrollDown").onclick = function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
};

// SELECT ALL IMAGES INSIDE WORKING SECTION
const images = document.querySelectorAll("#working img");

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

// APPLY CLICK TO ALL IMAGES
images.forEach(img => {
    img.style.cursor = "pointer"; // 👈 show clickable

    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// ================= MODAL HANDLER (FINAL FIX) =================

// FEATURE + TECH MODAL
const featureModal = document.getElementById("featureModal");

// IMAGE MODAL
const imgModal = document.getElementById("imgModal");

// CLOSE BUTTONS (ALL)
document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        featureModal.style.display = "none";
        imgModal.style.display = "none";
    });
});

// OUTSIDE CLICK CLOSE
window.addEventListener("click", function (e) {
    if (e.target === featureModal) {
        featureModal.style.display = "none";
    }
    if (e.target === imgModal) {
        imgModal.style.display = "none";
    }
});