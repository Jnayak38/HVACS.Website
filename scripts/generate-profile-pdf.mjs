import { writeFileSync } from "node:fs";
import { join } from "node:path";

function escapePdfText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function text(x, y, size, value, color = "0 0 0 rg") {
  return [
    "BT",
    color,
    `/F1 ${size} Tf`,
    `${x} ${y} Td`,
    `(${escapePdfText(value)}) Tj`,
    "ET"
  ].join("\n");
}

function bullet(y, value) {
  return [
    "0.052 0.435 0.992 rg",
    `76 ${y + 3} 5 5 re f`,
    text(92, y, 11, value, "0.055 0.094 0.153 rg")
  ].join("\n");
}

const contentStream = [
  "0.024 0.078 0.149 rg",
  "0 0 612 792 re f",
  "1 1 1 rg",
  "42 530 528 190 re f",
  "0.052 0.435 0.992 rg",
  "42 718 528 8 re f",
  text(72, 665, 34, "HVACS", "0.024 0.078 0.149 rg"),
  text(72, 640, 14, "Engineering Clean & Compliant Environments", "0.305 0.392 0.509 rg"),
  text(72, 604, 16, "Pharma HVAC & Utility Engineering Experts", "0.052 0.435 0.992 rg"),
  text(72, 572, 11, "Validation documentation, utility engineering, cleanroom consultancy,", "0.055 0.094 0.153 rg"),
  text(72, 552, 11, "water system consultancy and energy optimization services.", "0.055 0.094 0.153 rg"),
  text(72, 486, 18, "Core Expertise", "1 1 1 rg"),
  bullet(452, "DQ/IQ/OQ/PQ, SOP preparation and HVAC qualification"),
  bullet(426, "Cleanroom pressure mapping, recovery test and airflow review"),
  bullet(400, "Chilled water, PW/WFI, compressed air and steam systems"),
  bullet(374, "Heat load, duct design, pipe sizing and cleanroom HVAC design"),
  bullet(348, "Chiller optimization, pump efficiency and energy saving analysis"),
  text(72, 286, 18, "Industries Served", "1 1 1 rg"),
  text(72, 256, 11, "Pharmaceuticals | Injectable Plants | Cleanrooms | Healthcare | Laboratories | Food Industries", "0.820 0.871 0.925 rg"),
  text(72, 190, 18, "Contact", "1 1 1 rg"),
  text(72, 160, 11, "Website: hvacs.in", "0.820 0.871 0.925 rg"),
  text(72, 140, 11, "Email: info@hvacs.in", "0.820 0.871 0.925 rg"),
  text(72, 120, 11, "Phone: +91 98765 43210", "0.820 0.871 0.925 rg"),
  "0.052 0.435 0.992 rg",
  "72 92 160 3 re f"
].join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

objects.forEach((object, index) => {
  offsets[index + 1] = Buffer.byteLength(pdf, "utf8");
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let index = 1; index <= objects.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync(join(process.cwd(), "public", "HVACS-company-profile.pdf"), pdf);
console.log("Generated public/HVACS-company-profile.pdf");
