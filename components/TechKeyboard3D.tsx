"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { RotateCw, Sparkles } from "lucide-react";

// ── 1. Clean SVG Icons for 16 Tech Stack Keys ──────────────────────────────────
const SVG_ICONS: Record<string, string> = {
  "C#": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M116.14 34.92L67.66 6.93a7.35 7.35 0 00-7.34 0L11.86 34.92a7.35 7.35 0 00-3.67 6.36v55.97a7.35 7.35 0 003.67 6.36l48.46 27.99a7.35 7.35 0 007.34 0l48.48-27.99a7.35 7.35 0 003.67-6.36V41.28a7.35 7.35 0 00-3.67-6.36z" fill="#9B4993"/><path d="M64 15.5L18.5 41.77v52.54L64 120.57l45.5-26.26V41.77L64 15.5z" fill="#68217A"/><path d="M62.65 84.18a22.25 22.25 0 01-16.12-6.52c-4.32-4.32-6.7-10.15-6.7-16.41 0-6.26 2.38-12.09 6.7-16.41 4.32-4.32 10.15-6.52 16.12-6.52 5.2 0 10.05 1.7 14.03 4.93l-6.17 7.7a12.56 12.56 0 00-7.86-2.73c-3.1 0-6.08 1.13-8.28 3.33-2.2 2.2-3.41 5.18-3.41 8.7 0 3.52 1.21 6.5 3.41 8.7 2.2 2.2 5.18 3.33 8.28 3.33 3.03 0 5.79-.98 8.2-2.91l6.17 7.7a22.56 22.56 0 01-14.37 4.61z" fill="#ffffff"/><path d="M84.5 50.5l-1.2 5h-4.8l1.2-5h-3.8l-1.2 5h-4.2v3.6h3.4l-1.4 6h-4.2v3.6h3.4l-1.2 5h3.8l1.2-5h4.8l-1.2 5h3.8l1.2-5h4.2v-3.6h-3.4l1.4-6h4.2v-3.6h-3.4l1.2-5h-3.8zm-5.2 8.6l-1.4 6h-4.8l1.4-6h4.8z" fill="#82C841"/></svg>`,

  "ASP.NET Core": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#512BD4"><path d="M0 4.196C0 1.88 2.682 0 5.989 0h12.022C21.319 0 24 1.88 24 4.196v15.608C24 22.12 21.318 24 18.011 24H5.99C2.682 24 0 22.12 0 19.804V4.196zm8.25 2.65v10.302h1.922V12.9h3.588v4.248H15.7V6.846h-1.94v4.394H10.17V6.846zm6.22 9.867h.42l1.11-1.18v.948h.344v-1.6h-.42l-1.11 1.18v-.948h-.344zm2.275-.546c0 .62.427.976 1.048.976.62 0 1.048-.356 1.048-.976 0-.62-.428-.976-1.048-.976-.62 0-1.048.356-1.048.976zm.36 0c0-.39.264-.648.688-.648.425 0 .688.258.688.648 0 .39-.263.648-.688.648-.424 0-.688-.258-.688-.648z"/></svg>`,

  "Python": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.804v.826H3.844S0 5.766 0 11.908c0 6.14 3.35 5.922 3.35 5.922h2.004v-2.816s-.11-3.35 3.297-3.35h5.645s3.188.051 3.188-3.082V3.082S17.965 0 11.914 0zm-3.23 1.734a1.074 1.074 0 1 1 0 2.148 1.074 1.074 0 0 1 0-2.148z" fill="#3776AB"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752H11.99v-.826h8.166s3.844.468 3.844-5.674c0-6.14-3.35-5.922-3.35-5.922h-2.004v2.816s.11 3.35-3.297 3.35H9.704s-3.188-.051-3.188 3.082v5.438s-.477 3.082 5.57 3.082zm3.23-1.734a1.074 1.074 0 1 1 0-2.148 1.074 1.074 0 0 1 0 2.148z" fill="#FFD43B"/></svg>`,

  "SQL Server": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CC292B"><path d="M12 2C6.477 2 2 4.477 2 7.5v9C2 19.523 6.477 22 12 22s10-2.477 10-5.5v-9C22 4.477 17.523 2 12 2zm8 14.5c0 1.933-3.582 3.5-8 3.5s-8-1.567-8-3.5V14.1c1.563 1.07 4.266 1.9 8 1.9s6.437-.83 8-1.9zm0-4.5c0 1.933-3.582 3.5-8 3.5s-8-1.567-8-3.5V9.6c1.563 1.07 4.266 1.9 8 1.9s6.437-.83 8-1.9zM12 10C7.582 10 4 8.433 4 6.5S7.582 3 12 3s8 1.567 8 3.5S16.418 10 12 10z"/></svg>`,

  "TypeScript": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#3178C6"/><path d="M12.75 15.15v2.318c.376.194.82.34 1.33.435.51.096 1.05.144 1.62.144.552 0 1.077-.052 1.574-.156.497-.104.933-.276 1.31-.516.376-.24.674-.556.894-.947.22-.39.33-.87.33-1.44 0-.414-.062-.776-.185-1.087a2.416 2.416 0 0 0-.535-.822 3.51 3.51 0 0 0-.84-.63 8.98 8.98 0 0 0-1.11-.5c-.29-.11-.55-.216-.78-.318a3.36 3.36 0 0 1-.6-.328 1.34 1.34 0 0 1-.383-.377.85.85 0 0 1-.135-.474c0-.16.042-.304.126-.433a1.07 1.07 0 0 1 .354-.334c.152-.093.337-.165.556-.216.22-.05.463-.076.732-.076.194 0 .399.014.615.043.216.029.433.072.65.13.217.058.427.13.63.216.203.086.39.185.562.297V8.99a5.35 5.35 0 0 0-1.083-.282 8.32 8.32 0 0 0-1.35-.1c-.545 0-1.062.058-1.55.174a3.93 3.93 0 0 0-1.28.548 2.79 2.79 0 0 0-.878.955c-.216.39-.324.858-.324 1.404 0 .698.202 1.293.606 1.785.404.492.988.895 1.752 1.208.303.124.586.245.848.363.263.118.49.24.683.367.194.126.347.263.46.41.113.147.17.313.17.5a.83.83 0 0 1-.11.42 1 1 0 0 1-.328.33 1.7 1.7 0 0 1-.55.216 3.2 3.2 0 0 1-.767.078c-.48 0-.955-.084-1.425-.252a4.42 4.42 0 0 1-1.313-.756zM9.7 9.024H6.836V17.9H4.664V9.024H1.8V7.1h7.9z" fill="#ffffff"/></svg>`,

  "React": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0088cc"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.581.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.578-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.29zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z"/></svg>`,

  "Next.js": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0f172a"><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474.0001.8978.0118 1.086.108 1.7498C1.0952 19.9867 5.8435 23.9495 11.583 23.9995c.09.0009.1783.0009.268 0 .4617-.004.6538-.0118.9604-.0388 3.9567-.3536 7.3457-2.6893 9.0555-6.164.7925-1.6472 1.2248-3.3846 1.2773-5.0645.008-.2525.0084-.2948.0084-1.7388 0-1.4441-.0004-1.4864-.0084-1.739-.0525-1.6798-.4848-3.4173-1.2773-5.0644C19.9283 2.689 16.5393.353 12.5826.007 12.276-.019 12.084-.027 11.5725 0zm.0001 2.1826c4.7264 0 8.5823 3.2842 9.4635 7.7424.1396.7087.2066 1.3926.2066 2.0826 0 .6851-.0672 1.3663-.2064 2.0756-.8812 4.4558-4.7371 7.7422-9.4637 7.7422-4.7267 0-8.5827-3.2864-9.4638-7.7422-.1393-.7093-.2064-1.3905-.2064-2.0756 0-.6899.0669-1.3739.2065-2.0826.8809-4.458 4.7369-7.7424 9.4637-7.7424z"/></svg>`,

  "Node.js": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#43853d"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.890V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.111,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/></svg>`,

  "Tailwind CSS": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0284c7"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/></svg>`,

  "Prisma ORM": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a202c"><path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.626l-9.17 14.539a1.315 1.315 0 0 0 .016 1.436l4.011 6.076c.316.484.87.768 1.452.756a1.62 1.62 0 0 0 .433-.066l13.311-3.758a1.318 1.318 0 0 0 .536-2.326zm-1.886 1.107L7.937 22.794a.272.272 0 0 1-.231-.035L4.06 17.017c-.043-.07-.047-.166-.007-.24L11.988 3.01c.04-.073.078-.086.103-.088a.112.112 0 0 1 .085.048l8.03 16.962a.108.108 0 0 1-.029.133z"/></svg>`,

  "TiDB Cloud": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E30C34"><path d="M12 0a12 12 0 1 0 0 24A12 12 0 0 0 12 0zm0 3.6c4.64 0 8.4 3.76 8.4 8.4 0 4.64-3.76 8.4-8.4 8.4-4.64 0-8.4-3.76-8.4-8.4 0-4.64 3.76-8.4 8.4-8.4zM7.2 7.2v3.6h9.6V7.2H7.2zm0 4.8v3.6h9.6v-3.6H7.2zm0 4.8v1.5l4.8 1.2 4.8-1.2V16.8H7.2z"/></svg>`,

  "MySQL": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00758F"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.147-.04-.067-.126-.1-.182-.144zm5.409 1.107c-.723 0-1.287.267-1.679.793-.333.459-.493 1.054-.493 1.76 0 .3.027.587.08.853.12.56.373 1.027.747 1.373.347.32.8.48 1.34.48.413 0 .76-.06 1.04-.2.293-.14.533-.36.72-.68.193-.333.293-.8.293-1.387.013-.6-.067-1.12-.253-1.533-.18-.4-.44-.693-.793-.88a2.498 2.498 0 0 0-1.002-.58zm-6.71 1.561c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm-5 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg>`,

  "Express.js": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e293b"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 7.764L7.808 0l-3.18 4.498-4.626-.734zm0 8.457L4.122 24 0 15.453zm7.791 7.782l-3.185-4.5 4.627-.733-1.442 5.233zm16.207-8.453L20.32 24l-4.003-8.541 4.626.733z"/></svg>`,

  "SQLite": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#003B57"><path d="M21.678.521C20.368-.29 18.91-.22 17.81.7l-.23.19C15.031.075 12.088.787 9.683 2.753 7.48 4.557 6.099 7.11 5.701 9.942c-1.185.338-2.21.909-2.924 1.727-2.216 2.531-1.683 6.724.373 10.103 1.5 2.474 3.517 3.936 5.42 3.97.37.006.733-.05 1.083-.17L22.29 19.55c.59-.44.97-1.13.99-1.89.36-3.36.42-13.66-1.6-17.14z"/></svg>`,

  "Socket.io": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0f172a"><path d="M11.9358 0C5.3455 0 0 5.3535 0 11.9358c0 6.5904 5.3455 11.9358 11.9358 11.9358 6.5904 0 11.9359-5.3454 11.9359-11.9358C23.8716 5.3535 18.5261 0 11.9358 0zm.0004 2.2947l-6.248 9.3604 6.248-2.7727 6.248 2.7727zm0 19.2108l6.248-9.3604-6.248 2.7726-6.248-2.7726z"/></svg>`,

  "Selenium": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008a00"><path d="M23.958 5.87L12.15.015 0 5.928l6.396 3.383L0 12.674l6.396 3.382L0 19.472 12.15 24l11.808-4.528-6.396-3.398 6.396-3.382-6.396-3.363zM12.15 21.57l-8.19-3.14 4.796-2.534 3.394 1.794 3.376-1.797 4.796 2.534zm3.394-6.853l-3.394 1.797-3.394-1.797-3.001-1.588 6.395-3.382 6.396 3.382zm-6.395-6.865l3.394-1.793 3.394 1.793 4.794 2.533-3.394-1.793-3.394-1.793-3.394-1.793z"/></svg>`,

  "Git": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`,
};

// ── 2. Unified Key Model Object ────────────────────────────────────────────────
interface TechKeyModel {
  id: string;
  name: string;
  row: number;
  col: number;
}

// 4 Rows x 4 Columns = 16 Keys (Completely Balanced & Centered)
const KEYBOARD_DATA: TechKeyModel[][] = [
  // Row 1 (Top)
  [
    { id: "csharp", name: "C#", row: 0, col: 0 },
    { id: "aspnet", name: "ASP.NET Core", row: 0, col: 1 },
    { id: "python", name: "Python", row: 0, col: 2 },
    { id: "sqlserver", name: "SQL Server", row: 0, col: 3 },
  ],
  // Row 2 (Upper)
  [
    { id: "typescript", name: "TypeScript", row: 1, col: 0 },
    { id: "react", name: "React", row: 1, col: 1 },
    { id: "nextjs", name: "Next.js", row: 1, col: 2 },
    { id: "nodejs", name: "Node.js", row: 1, col: 3 },
  ],
  // Row 3 (Home)
  [
    { id: "tailwind", name: "Tailwind CSS", row: 2, col: 0 },
    { id: "prisma", name: "Prisma ORM", row: 2, col: 1 },
    { id: "tidb", name: "TiDB Cloud", row: 2, col: 2 },
    { id: "mysql", name: "MySQL", row: 2, col: 3 },
  ],
  // Row 4 (Bottom)
  [
    { id: "express", name: "Express.js", row: 3, col: 0 },
    { id: "sqlite", name: "SQLite", row: 3, col: 1 },
    { id: "socketio", name: "Socket.io", row: 3, col: 2 },
    { id: "git", name: "Git", row: 3, col: 3 },
  ],
];

/** Helper to draw crisp, high-DPI keycap texture (512x512) directly on 2D Canvas */
function generateKeycapTexture(name: string, svgContent?: string): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // 1. White / Metallic Silver PBT keycap base
  const bgGrad = ctx.createLinearGradient(0, 0, 0, size);
  bgGrad.addColorStop(0, "#ffffff");
  bgGrad.addColorStop(0.3, "#f8fafc");
  bgGrad.addColorStop(1, "#e2e8f0");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, size, size);

  // 2. Subtle chamfer bevel inner border
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, size - 14, size - 14);

  // 3. Top subtle highlight rim
  ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
  ctx.lineWidth = 8;
  ctx.strokeRect(16, 16, size - 32, size - 32);

  // 4. Laser-Etched Tech Name Text
  ctx.fillStyle = "#0f172a";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Dynamic font sizing for long titles
  if (name.length > 10) {
    ctx.font = "bold 34px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace";
  } else if (name.length > 7) {
    ctx.font = "bold 40px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace";
  } else {
    ctx.font = "bold 46px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace";
  }
  ctx.fillText(name, size / 2, size - 120);

  // 5. Draw SVG Icon
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  texture.generateMipmaps = true;

  if (svgContent) {
    const img = new Image();
    const svgBlob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      const iconSize = 160;
      ctx.drawImage(img, size / 2 - iconSize / 2, 80, iconSize, iconSize);
      texture.needsUpdate = true;
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  return texture;
}

interface SingleKeyProps {
  keyData: TechKeyModel;
  position: [number, number, number];
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

/** Individual 3D Mechanical Keycap with fused Canvas Texture Decal */
function KeyCapItem({ keyData, position, isHovered, onHover }: SingleKeyProps) {
  const texture = useMemo(() => {
    if (typeof window === "undefined") return null;
    return generateKeycapTexture(keyData.name, SVG_ICONS[keyData.name]);
  }, [keyData.name]);

  useEffect(() => {
    return () => {
      texture?.dispose();
    };
  }, [texture]);

  const keyWidth = 1.04;
  const keyDepth = 0.94;
  const keyHeight = 0.28;

  // Realistic tactile keypress on hover / interaction
  const yOffset = isHovered ? position[1] - 0.04 : position[1];

  return (
    <group position={[position[0], yOffset, position[2]]}>
      {/* 1. Main Keycap Body with Beveled Corners */}
      <RoundedBox
        args={[keyWidth, keyHeight, keyDepth]}
        radius={0.07}
        smoothness={4}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(keyData.id);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
        }}
      >
        <meshPhysicalMaterial
          color={isHovered ? "#ffffff" : "#f1f5f9"}
          roughness={0.25}
          metalness={0.15}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
          emissive={isHovered ? "#cbd5e1" : "#000000"}
          emissiveIntensity={isHovered ? 0.35 : 0}
        />
      </RoundedBox>

      {/* 2. Top Laser-Etched Decal Face (Fused 100% directly to keycap top) */}
      {texture && (
        <mesh
          position={[0, keyHeight / 2 + 0.002, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[keyWidth - 0.06, keyDepth - 0.06]} />
          <meshBasicMaterial
            map={texture}
            transparent={false}
            toneMapped={false}
          />
        </mesh>
      )}
    </group>
  );
}

/** Complete 60% Solid Mechanical Keyboard Scene */
function MechanicalKeyboardScene({ autoRotate }: { autoRotate: boolean }) {
  const [hoveredKeyId, setHoveredKeyId] = useState<string | null>(null);

  // Exact Grid Spacing & Perfect Centering
  const pitchX = 1.16;
  const pitchZ = 1.06;
  const numCols = 4;
  const numRows = 4;

  const startX = -((numCols - 1) * pitchX) / 2;
  const startZ = -((numRows - 1) * pitchZ) / 2;

  return (
    <>
      {/* Studio Lighting with Soft Fill & Crisp Specular Highlights */}
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[6, 12, 6]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      <directionalLight position={[-6, 5, -4]} intensity={0.4} color="#e8ebee" />
      <pointLight position={[0, 4, 0]} intensity={0.35} color="#ffffff" />

      {/* Main Keyboard Body with 3D Isometric Tilt */}
      <group rotation={[0.22, -0.28, 0]} position={[0, -0.2, 0]}>
        {/* ── Tier 1: Outer Chrome Beveled Rim Chassis (Bottom Case) ── */}
        <RoundedBox
          args={[5.55, 0.36, 4.95]}
          radius={0.2}
          smoothness={4}
          position={[0, -0.22, 0]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#9aa3af"
            roughness={0.18}
            metalness={0.8}
            clearcoat={0.5}
          />
        </RoundedBox>

        {/* ── Tier 2: Anodized Silver Top Housing (Middle Layer) ── */}
        <RoundedBox
          args={[5.3, 0.28, 4.7]}
          radius={0.14}
          smoothness={4}
          position={[0, -0.06, 0]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#eef1f6"
            roughness={0.25}
            metalness={0.35}
          />
        </RoundedBox>

        {/* ── Tier 3: Dark Recessed Switch Plate (Inside Frame) ── */}
        <RoundedBox
          args={[4.85, 0.08, 4.25]}
          radius={0.06}
          smoothness={3}
          position={[0, 0.05, 0]}
          receiveShadow
        >
          <meshStandardMaterial
            color="#0b111e"
            roughness={0.7}
            metalness={0.6}
          />
        </RoundedBox>

        {/* ── 16 Keycaps Arranged in 4 Balanced Rows ── */}
        {KEYBOARD_DATA.map((rowItems, rIdx) => {
          // Subtle staggered row offsets for authentic typewriter/keyboard rhythm
          let rowStaggerX = 0;
          if (rIdx === 1) rowStaggerX = 0.08;
          if (rIdx === 2) rowStaggerX = -0.08;

          return rowItems.map((keyItem, cIdx) => {
            const posX = startX + cIdx * pitchX + rowStaggerX;
            const posZ = startZ + rIdx * pitchZ;

            return (
              <KeyCapItem
                key={keyItem.id}
                keyData={keyItem}
                position={[posX, 0.19, posZ]}
                isHovered={hoveredKeyId === keyItem.id}
                onHover={setHoveredKeyId}
              />
            );
          });
        })}
      </group>

      {/* 360 Degree OrbitControls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={1.5}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 6}
      />
    </>
  );
}

/** TechKeyboard3D Component Wrapper */
export default function TechKeyboard3D() {
  const [autoRotate, setAutoRotate] = useState(false);

  return (
    <div className="double-bezel-shell w-full">
      <div className="double-bezel-core overflow-hidden">
        {/* Top Header / Interactive Controls */}
        <div className="px-6 py-3.5 border-b border-white/[0.06] flex items-center justify-between flex-wrap gap-3 bg-white/[0.01]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-slate-200 font-medium tracking-wide uppercase">
              3D Mechanical Hardware Stack // 16 Ecosystem Keys
            </span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              &bull; 360&deg; Orbit View
            </span>
          </div>

          <button
            type="button"
            onClick={() => setAutoRotate((prev) => !prev)}
            className={`relative z-20 cursor-pointer flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 border ${
              autoRotate
                ? "bg-white/[0.12] border-white/30 text-white"
                : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
            }`}
            title="Toggle 360° Auto-rotation"
          >
            <RotateCw size={12} className={autoRotate ? "animate-spin text-white" : ""} />
            <span>{autoRotate ? "Auto-Rotate: ON" : "Auto-Rotate: OFF"}</span>
          </button>
        </div>

        {/* 3D WebGL Canvas Area */}
        <div className="w-full h-[460px] relative cursor-grab active:cursor-grabbing">
          <Canvas
            camera={{ position: [3.8, 4.6, 5.2], fov: 36 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            shadows
          >
            <MechanicalKeyboardScene autoRotate={autoRotate} />
          </Canvas>

          {/* Bottom Micro-hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none px-3.5 py-1 rounded-full bg-[#07090e]/90 border border-white/10 text-[10px] font-mono text-slate-400 backdrop-blur-md flex items-center gap-1.5">
            <Sparkles size={11} className="text-slate-300" />
            <span>Drag to rotate 360&deg; &bull; Hover keys for details</span>
          </div>
        </div>
      </div>
    </div>
  );
}
