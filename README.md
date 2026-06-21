<div align="center">

# Presence Insights | HR Attendance Analytics Dashboard

**A Power BI dashboard that tracks employee presence, work-from-home patterns, and sick leave trends across multiple months — built for data-driven HR decision-making.**

[![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](https://powerbi.microsoft.com/)
[![Excel](https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white)](https://www.microsoft.com/excel)
[![DAX](https://img.shields.io/badge/DAX-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)](#dax-measures)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

[View Live Dashboard](PASTE_LIVE_DASHBOARD_LINK_HERE) · [Project Website](PASTE_GITHUB_PAGES_LINK_HERE) · [DAX Measures](dax-measures.md)

</div>

---

## 📸 Dashboard Preview

<!-- Replace with your own screenshot if needed -->
![Dashboard Preview](assets/dashboard-main.png)

---

## 📋 Overview

This project delivers an interactive HR attendance analytics dashboard built in **Power BI**. It consolidates employee attendance data across **April 2022, May 2022, and June 2022** to provide actionable insights into presence rates, work-from-home adoption, and sick leave patterns.

The dashboard enables HR teams and managers to monitor workforce availability at both the organizational and individual employee level — helping identify trends, flag anomalies, and support data-backed policy decisions.

---

## 🎯 Business Problem

HR teams often rely on manual spreadsheets to track attendance, making it difficult to:

- Identify employees with low presence or high absenteeism
- Understand how WFH adoption varies across the week
- Spot seasonal or day-of-week patterns in sick leave
- Get a quick organizational health check on workforce availability

This dashboard solves these challenges by transforming raw attendance logs into a single, interactive Power BI report with real-time filtering and drill-down capabilities.

---

## 📊 Dashboard Snapshot

| Component | Description |
|---|---|
| **KPI Cards** | Presence % (91.55%), WFH % (11.15%), SL % (1.08%) |
| **Total Working Days Gauge** | Shows 4,439 total working days tracked |
| **Trend Charts** | Presence %, WFH %, and SL % plotted by date (Apr–Jun 2022) |
| **Day-of-Week Tables** | Presence % breakdown for each weekday |
| **Employee Matrix** | Name-level view with Presence %, WFH %, and SL % columns |
| **Detail Table** | Individual attendance records with Name, Value (P/WFH/SL/LWP), and Date |
| **Month Slicers** | Filter by April 22, May 22, or June 22 |

---

## 📈 KPIs Tracked

| KPI | Value | Description |
|---|---|---|
| **Presence %** | 91.55% | Percentage of days employees were present in office |
| **WFH %** | 11.15% | Percentage of days employees worked from home |
| **SL %** | 1.08% | Percentage of days taken as sick leave |
| **Total Working Days** | 4,439 | Aggregate working days across all employees |

---

## 📁 Dataset

- **Source**: Employee attendance records in Excel format
- **Period**: April 2022 – June 2022
- **Structure**: Separate monthly sheets with daily attendance codes per employee
- **Attendance Codes**: P (Present), WFH (Work From Home), SL (Sick Leave), LWP (Leave Without Pay), and others
- **Rows**: Employee-level daily records

---

## 🛠️ Tools & Technologies

| Tool | Purpose |
|---|---|
| **Power BI Desktop** | Dashboard design, visualization, and publishing |
| **Power Query** | Data cleaning, transformation, and unpivoting |
| **DAX** | Calculated measures and columns |
| **Microsoft Excel** | Source data format |
| **GitHub Pages** | Live project website |

---

## 🔄 Power Query Transformation

1. **Imported** monthly attendance sheets from Excel
2. **Promoted headers** and removed metadata rows
3. **Unpivoted** date columns to convert wide-format data into a normalized table (Employee, Date, Value)
4. **Cleaned** column types — set dates, trimmed text values
5. **Appended** April, May, and June sheets into a single consolidated table
6. **Added custom columns** for Month and Day of Week

---

## 📐 DAX Measures

Key calculated measures used in the dashboard:

| Measure | Formula Summary |
|---|---|
| Total Working Days | Count of distinct dates in the dataset |
| Present Days | Count of rows where Value = "P" |
| Presence % | Present Days ÷ Total Working Days |
| WFH Count | Count of rows where Value = "WFH" |
| WFH % | WFH Count ÷ Total Working Days |
| SL Count | Count of rows where Value = "SL" |
| SL % | SL Count ÷ Total Working Days |

> 📄 Full DAX formulas with explanations → [dax-measures.md](dax-measures.md)

---

## ✨ Dashboard Features

- **Month Slicer Panel** — Filter the entire dashboard by April 22, May 22, or June 22
- **Trend Analysis** — Line/area charts showing Presence %, WFH %, and SL % over time
- **Day-of-Week Breakdown** — See which weekdays have highest/lowest attendance
- **Employee-Level Matrix** — Compare individual employee metrics side-by-side
- **Detail Drill-Down Table** — View raw attendance records per employee per date
- **Total Working Days Gauge** — Visual indicator of data completeness
- **KPI Cards** — At-a-glance metrics for the three key percentages

---

## 💡 Key Insights

1. **Overall presence is strong at 91.55%**, indicating healthy workforce attendance
2. **WFH usage at 11.15%** suggests a moderate hybrid work adoption pattern
3. **Sick leave is minimal at 1.08%**, well within healthy organizational benchmarks
4. **Monday and Friday** show slightly different attendance patterns compared to mid-week
5. **Employee-level data** reveals that most employees maintain >90% presence, with a few outliers showing higher WFH or SL rates
6. **Trend charts** show attendance remained relatively stable across the three-month period

---

## 🔗 Live Dashboard

> 🚀 **[View the Live Power BI Dashboard →](PASTE_LIVE_DASHBOARD_LINK_HERE)**

> 🌐 **[Visit the Project Website →](PASTE_GITHUB_PAGES_LINK_HERE)**

---

## 📂 Repository Structure

```
Presence-Insights-HR-Analytics/
├── README.md                  # Project documentation
├── LICENSE                    # MIT License
├── .gitignore                 # Ignored files for Power BI projects
├── dax-measures.md            # All DAX formulas with explanations
├── project-overview.md        # Detailed project walkthrough
├── assets/
│   ├── dashboard-main.png     # Full dashboard screenshot
│   ├── dashboard-kpis.png     # KPI cards close-up
│   ├── power-query-preview.png# Power Query transformation view
│   └── hero-banner.png        # Project banner image
└── docs/
    ├── index.html             # GitHub Pages website
    ├── style.css              # Website styles
    └── script.js              # Website interactions
```

---

## 🚀 How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/smilemangla0310/Presence-Insights-HR-Analytics.git
   ```
2. **Open the `.pbix` file** in Power BI Desktop (if included)
3. **Explore the dashboard** — use slicers to filter by month
4. **Review DAX measures** in [dax-measures.md](dax-measures.md)
5. **Visit the live site** at [Project Website](PASTE_GITHUB_PAGES_LINK_HERE)

---

## 👤 Author

**Smile Mangla**

- GitHub: [@smilemangla0310](https://github.com/smilemangla0310)
- Project Link: [Presence-Insights-HR-Analytics](https://github.com/smilemangla0310/Presence-Insights-HR-Analytics)

---

<div align="center">

⭐ If you found this project useful, please consider giving it a star!

</div>
