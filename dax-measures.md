# 📐 DAX Measures Reference

All DAX measures and calculated columns used in the **Presence Insights** dashboard. Each formula includes a brief explanation of what it calculates and how it is used.

---

## Calculated Columns

### Month
```dax
Month = FORMAT('Attendance'[Date], "MMMM YY")
```
Extracts the month name and year (e.g., `April 22`) from the date column. Used in the month slicer buttons at the top of the dashboard.

---

### Day of Week
```dax
Day of Week = FORMAT('Attendance'[Date], "ddd")
```
Returns the abbreviated weekday name (e.g., `Mon`, `Tue`). Used in the day-of-week attendance table.

---

## Core Measures

### Total Working Days
```dax
Total Working Days = 
VAR totaldays = COUNT('Attendance'[Value])
VAR nonworkingdays = 
    CALCULATE(
        COUNT('Attendance'[Value]),
        'Attendance'[Value] IN {"WO", "HO"}
    )
RETURN
    totaldays - nonworkingdays
```
Counts all attendance records and subtracts Weekly Offs (`WO`) and Holidays (`HO`). This gives the total active working days — **4,439** across the dataset. Used as the denominator for all percentage KPIs.

---

### Present Days
```dax
Present Days = 
    CALCULATE(
        COUNT('Attendance'[Value]),
        'Attendance'[Value] = "P"
    )
```
Counts the number of days employees were physically present in the office. Used as the numerator for Presence %.

---

### WFH Count
```dax
WFH Count = 
    CALCULATE(
        COUNT('Attendance'[Value]),
        'Attendance'[Value] = "WFH"
    )
```
Counts the number of work-from-home days. Helps measure hybrid work adoption across the organization.

---

### SL Count
```dax
SL Count = 
    CALCULATE(
        COUNT('Attendance'[Value]),
        'Attendance'[Value] = "SL"
    )
```
Counts sick leave days taken. Used to track unplanned absences.

---

## Percentage KPIs

### Presence %
```dax
Presence % = 
    DIVIDE(
        [Present Days],
        [Total Working Days],
        0
    )
```
The primary KPI — shows **91.55%** on the dashboard. Calculates what proportion of working days employees were physically in the office.

---

### WFH %
```dax
WFH % = 
    DIVIDE(
        [WFH Count],
        [Total Working Days],
        0
    )
```
Shows **11.15%** on the dashboard. Measures the share of working days spent working remotely.

---

### SL %
```dax
SL % = 
    DIVIDE(
        [SL Count],
        [Total Working Days],
        0
    )
```
Shows **1.08%** on the dashboard. Tracks the sick leave rate. Low values indicate good employee health; spikes may signal burnout or seasonal illness.

---

## Summary Table

| Measure | Type | Dashboard Element | Value |
|---|---|---|---|
| Month | Column | Month slicers | April 22, May 22, June 22 |
| Day of Week | Column | Weekday table | Mon–Sun |
| Total Working Days | Measure | Gauge card | 4,439 |
| Presence % | Measure | KPI card + matrix | 91.55% |
| WFH % | Measure | KPI card + matrix | 11.15% |
| SL % | Measure | KPI card + matrix | 1.08% |

---

### Design Notes
- All percentage measures use `DIVIDE()` instead of the `/` operator to prevent division-by-zero errors
- Measures respond dynamically to slicer and filter selections
- The layered approach (core counts → derived percentages) keeps formulas modular and easy to maintain

---

[← Back to README](README.md)
