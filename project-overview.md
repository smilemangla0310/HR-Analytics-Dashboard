# 📄 Project Overview — Presence Insights

## What This Project Is

**Presence Insights** is an HR Attendance Analytics Dashboard built in Power BI. It consolidates three months of employee attendance records (April–June 2022) into a single interactive report that tracks office presence, work-from-home trends, and sick leave patterns.

## Why I Built It

In many organizations, attendance data lives in disconnected monthly Excel sheets — making it nearly impossible to spot trends or compare employees over time. I wanted to demonstrate how raw spreadsheet data can be transformed into a structured, insight-driven dashboard using the Power BI analytics stack.

## What I Did

- **Data Cleaning & Transformation**: Used Power Query to unpivot wide-format Excel sheets (dates as columns) into a normalized table with three clean columns — Employee Name, Date, and Attendance Code. Merged three monthly sheets into a single consolidated dataset.

- **DAX Measure Design**: Built a layered set of DAX measures — starting with core counts (Present Days, WFH Count, SL Count, Total Working Days) and deriving percentage KPIs using the safe `DIVIDE()` function.

- **Dashboard Layout**: Designed a single-page Power BI report with KPI cards, date-wise trend charts, day-of-week tables, an employee breakdown matrix, a detail drill-down table, and month filter slicers.

## What the Dashboard Reveals

- **91.55% Presence** — Strong in-office attendance across the quarter
- **11.15% WFH** — Moderate hybrid adoption, consistent across months
- **1.08% SL** — Minimal sick leave, indicating healthy workforce engagement
- **Friday shows lowest attendance** (90.08%) compared to mid-week peaks
- **Employee-level outliers** are identifiable for targeted HR follow-up

## Skills Demonstrated

| Skill | Applied How |
|---|---|
| Data Cleaning | Power Query — unpivoting, type casting, merging |
| Data Modeling | Single normalized fact table with derived attributes |
| DAX | Layered measures with DIVIDE(), CALCULATE(), COUNT() |
| Dashboard Design | KPI cards, trend charts, matrix, slicers, drill-down |
| Business Analysis | Translated data into actionable HR insights |

---

[← Back to README](README.md) · [DAX Measures →](dax-measures.md)
