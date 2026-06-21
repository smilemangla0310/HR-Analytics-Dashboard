# 📄 Project Overview — Presence Insights

A comprehensive walkthrough of the HR Attendance Analytics Dashboard built in Power BI.

---

## Problem Statement

Organizations with 50–500+ employees often struggle to get a clear, real-time picture of employee attendance. HR teams typically manage attendance data in Excel spreadsheets — one sheet per month — making it time-consuming to:

- Calculate attendance rates across the organization
- Compare month-over-month attendance trends
- Identify employees with unusually high absenteeism or WFH usage
- Understand which days of the week see the lowest office presence
- Present data-backed insights to leadership

This project addresses these challenges by building an interactive Power BI dashboard that consolidates attendance data and delivers actionable insights through visualizations.

---

## How HR Teams Can Use This Dashboard

### Monitoring Workforce Availability
The KPI cards provide an instant health check:
- **Presence % (91.55%)** — Are employees coming to the office?
- **WFH % (11.15%)** — How much remote work is happening?
- **SL % (1.08%)** — Is sick leave within acceptable limits?

### Tracking Trends Over Time
Line charts for Presence %, WFH %, and SL % plotted by date (April–June 2022) help HR teams:
- Spot dips in attendance on specific dates
- Correlate WFH spikes with events or seasons
- Detect gradual increases in sick leave

### Day-of-Week Analysis
Day-of-week tables reveal behavioral patterns:
- Are Fridays or Mondays seeing lower attendance?
- Is WFH concentrated on certain weekdays?
- Which days have the strongest in-office presence?

### Employee-Level Accountability
The employee matrix breaks down Presence %, WFH %, and SL % per individual, enabling:
- Performance reviews with attendance data
- Conversations with high-absenteeism employees
- Recognition of employees with consistent presence

---

## Data Transformation with Power Query

The raw data came as an Excel workbook with **separate sheets for each month** (April, May, June 2022). Each sheet had:
- Employee names as rows
- Dates as columns
- Attendance codes as values (P, WFH, SL, LWP, WO, HO, etc.)

### Transformation Steps

1. **Import & Promote Headers**
   - Loaded each monthly sheet into Power Query
   - Promoted the first row as column headers

2. **Remove Metadata Rows**
   - Cleaned out any summary rows, blank rows, or header duplicates

3. **Unpivot Date Columns**
   - Converted the wide-format table (dates as columns) into a normalized long-format table
   - Result: Three columns — `Employee Name`, `Date`, `Value`

4. **Set Data Types**
   - Converted the Date column to proper Date type
   - Ensured Value column was Text type
   - Trimmed whitespace from employee names

5. **Append Queries**
   - Combined April, May, and June tables into a single consolidated `Attendance` table

6. **Add Custom Columns**
   - Added `Month` column using `FORMAT(Date, "MMMM YY")`
   - Added `Day of Week` column using `FORMAT(Date, "ddd")`

---

## DAX Measure Design

The dashboard uses a layered DAX approach:

### Foundation Layer — Core Counts
- `Total Working Days` — Counts all attendance entries minus Weekly Offs and Holidays
- `Present Days` — Filters for Value = "P"
- `WFH Count` — Filters for Value = "WFH"
- `SL Count` — Filters for Value = "SL"

### Insight Layer — Percentages
- `Presence %` = Present Days ÷ Total Working Days
- `WFH %` = WFH Count ÷ Total Working Days
- `SL %` = SL Count ÷ Total Working Days

All percentage measures use `DIVIDE()` with a zero fallback for safety.

> Full formulas available in [dax-measures.md](dax-measures.md)

---

## Dashboard Design Logic

### Layout Philosophy
The dashboard follows a **scannable, top-to-bottom** layout:

1. **Top**: Title ("Presence Insights") and month slicers for quick filtering
2. **Left Column**: Trend charts (Presence %, WFH %, SL % by date) for temporal patterns
3. **Center**: Day-of-week tables and employee matrix for detailed breakdowns
4. **Right Column**: KPI cards and Total Working Days gauge for at-a-glance metrics
5. **Bottom-Center**: Detail table for drill-down into individual records

### KPI Selection Rationale
- **Presence %** — The most direct measure of workforce availability
- **WFH %** — Critical in the post-pandemic hybrid work era
- **SL %** — An early indicator of employee well-being concerns
- **Total Working Days** — Provides context for all other metrics

### Color Choices
- Green for Presence (positive)
- Blue/purple for WFH (neutral)
- Pink/red for SL (attention-worthy)

---

## Business Value & Insights

### Key Findings

1. **91.55% Presence** — The organization maintains strong in-office attendance
2. **11.15% WFH** — Hybrid work is present but not dominant, suggesting most work requires office presence
3. **1.08% SL** — Very low sick leave indicates either good employee health or possible underreporting
4. **Day-of-Week Patterns** — Monday (92.66%) and Friday (90.08%) show expected variations
5. **Employee Variations** — Most employees cluster around the 90–98% presence range, with a few outliers worth monitoring

### Actionable Recommendations
- **For HR Policy**: Consider formal hybrid work guidelines given the 11% WFH rate
- **For Managers**: Use employee-level data in monthly reviews
- **For Leadership**: The stable 91%+ presence rate supports current office policies
- **For Facilities**: Plan office capacity based on day-of-week attendance patterns

---

## Key Learnings

1. **Power Query is essential** — Transforming wide-format Excel data into an analytics-ready format requires careful unpivoting and cleaning
2. **DAX measures should be layered** — Build core counts first, then derive percentages from them
3. **Dashboard layout matters** — Placing KPIs where the eye naturally goes (top-right) improves readability
4. **Context is everything** — Percentages are meaningless without understanding the Total Working Days denominator
5. **Month slicers add interactivity** — Letting users filter by month turns a static report into an exploration tool
6. **Employee-level granularity drives action** — Aggregate KPIs show the big picture, but individual breakdowns enable targeted conversations

---

## Technical Stack Summary

| Component | Technology |
|---|---|
| Data Source | Microsoft Excel (.xlsx) |
| Data Transformation | Power Query (M Language) |
| Data Modeling | Power BI Data Model |
| Calculations | DAX (Data Analysis Expressions) |
| Visualization | Power BI Desktop |
| Publishing | Power BI Service (Publish to Web) |
| Portfolio Website | HTML, CSS, JavaScript (GitHub Pages) |

---

[← Back to README](README.md) · [DAX Measures →](dax-measures.md)
