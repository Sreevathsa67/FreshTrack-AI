# **FreshTrack AI – Real-Time Freshness & Emissions Intelligence System**
<img width="1893" height="863" alt="image" src="https://github.com/user-attachments/assets/a75ff3d0-8495-40bf-bd60-f418bbdb133c" />

## ✅ Overview  
FreshTrack AI is an **IoT + Edge AI + Blockchain-powered solution** designed to track the **freshness, condition, and carbon emissions** of perishable goods across Walmart’s cold chain — from **warehouse to shelf**.

Our goal:  
✔ Reduce food spoilage by **40–60%**  
✔ Optimize **last-mile delivery**  
✔ Ensure **sustainability compliance** with real-time emissions tracking  

---

## **Problem Statement**  
Every year, U.S. grocery retailers lose **$3.6 billion** due to food spoilage. Traditional monitoring systems lack real-time freshness tracking and emissions accountability, resulting in waste, financial loss, and poor ESG compliance.

---

## **Our Solution**  
FreshTrack AI provides **end-to-end monitoring** by:  
- **IoT Smart Tags**: Attach to pallets and monitor **temperature, humidity, ethylene gas, vibration, and location** in real-time.  
- **Edge AI**: Predict shelf life and spoilage risk on-device, reducing cloud dependency.  
- **Blockchain**: Immutable storage for compliance and transparency.  
- **Dynamic Routing**: Re-route trucks and prioritize unloading based on real-time freshness data.  
- **Dashboard**: Actionable insights for managers including freshness scores, spoilage alerts, and emissions metrics.  

---

## **Core Features**  
✅ Real-time freshness tracking  
<img width="1699" height="459" alt="image" src="https://github.com/user-attachments/assets/086dc2e7-b5d2-472a-bbdf-7c6f275c000a" />


<img width="1121" height="761" alt="image" src="https://github.com/user-attachments/assets/527eef5d-0cad-4df4-a41a-0aa699cdc187" />



<img width="1621" height="534" alt="image" src="https://github.com/user-attachments/assets/8fff5903-e170-444f-83b1-75a06342dd0d" />


✅ Spoilage risk prediction  
✅ Carbon emissions per route  
<img width="1632" height="758" alt="image" src="https://github.com/user-attachments/assets/31c0fd73-b7fe-4446-9a5b-e3066d8b1a26" />

✅ Blockchain-powered traceability  
✅ AI-driven route optimization  

<img width="1672" height="714" alt="image" src="https://github.com/user-attachments/assets/fb920950-9817-4cf0-a92b-d1246d8ae2c6" />



<img width="1608" height="702" alt="image" src="https://github.com/user-attachments/assets/0ce283ce-c7a5-4a34-9844-c06a69a97ec6" />

---

## **Tech Stack**  
- **IoT Devices**: ESP32, BME280 (Temp & Humidity), MiCS-5524 (Gas), ADXL345 (Vibration), NEO-6M GPS  
- **Connectivity**: MQTT / GSM (SIM800L)  
- **Edge AI**: TensorFlow Lite on ESP32 or Jetson Nano  
- **Backend**: Node.js / FastAPI, PostgreSQL, Kafka  
- **Blockchain**: Hyperledger Fabric  
- **Frontend**: React.js / PowerBI  

---

## **Architecture**  
1. IoT sensors capture freshness & location data.  
2. Edge AI predicts spoilage and pallet health.  
3. Data is pushed via MQTT to the backend.  
4. Blockchain records immutable logs.  
5. Dashboard visualizes freshness heatmaps, alerts, and emissions data.  

---

## **Impact**  
✔ Reduce spoilage by **40–60%**  
✔ Save millions in annual waste  
✔ Improve ESG reporting accuracy  
✔ Boost customer satisfaction through fresher products  

---

## **Cost & Feasibility**  
- Prototype hardware cost: **₹2,000–₹2,500 per unit (~$30)**  
- Highly scalable across all Walmart cold-chain operations  
- Rapid deployment possible with minimal infrastructure changes  

---

## **Demo Possibilities (MVP)**  
- Simulated IoT data via ESP32 sensors  
- Dashboard with freshness and emissions tracking  
- Predictive alerts for spoilage risk  
- Blockchain-based traceability simulation  

---

## **Team**  
- IoT & Embedded Systems  
- AI & Data Science  
- Backend Development  
- Blockchain Integration  
- UI/UX Dashboard Design  

---

## **License**  
MIT License
