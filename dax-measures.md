# 📐 DAX Measures Reference

This document contains all DAX measures and calculated columns used in the **Presence Insights** HR Analytics Dashboard. Each formula includes a brief business explanation.

---

## Table of Contents

- [Calculated Columns](#calculated-columns)
- [Core Measures](#core-measures)
- [Percentage Measures](#percentage-measures)

---

## Calculated Columns

### Month Column

Extracts the month name from the date for use in slicers and grouping.

```dax
Month = FORMAT('Attendance'[Date], "MMMM YY")
```

> **Business Use**: Enables month-level filtering in the dashboard slicers (April 22, May 22, June 22).

---

### Day of Week Column

Returns the weekday name for day-of-week analysis.

```dax
Day of Week = FORMAT('Attendance'[Date], "ddd")
```

> **Business Use**: Powers the day-of-week summary tables that show Presence % for each weekday (Mon, Tue, Wed, etc.).

---

## Core Measures

### Total Working Days

Counts the total number of distinct working days in the filtered context.

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

> **Business Use**: Provides the denominator for all percentage calculations. The gauge card displays this as **4,439** total working days across all employees and months. Excludes weekly offs (WO) and holidays (HO) from the count.

---

### Present Days

Counts the number of days an employee was physically present in the office.

```dax
Present Days = 
    CALCULATE(
        COUNT('Attendance'[Value]),
        'Attendance'[Value] = "P"
    )
```

> **Business Use**: Tracks in-office attendance. Used as the numerator for Presence % calculation.

---

### Work From Home Count

Counts the number of days employees worked from home.

```dax
WFH Count = 
    CALCULATE(
        COUNT('Attendance'[Value]),
        'Attendance'[Value] = "WFH"
    )
```

> **Business Use**: Measures hybrid work adoption. Helps HR understand remote work trends and plan office capacity.

---

### Sick Leave Count

Counts the number of sick leave days taken.

```dax
SL Count = 
    CALCULATE(
        COUNT('Attendance'[Value]),
        'Attendance'[Value] = "SL"
    )
```

> **Business Use**: Monitors employee health-related absences. High SL rates may indicate burnout or seasonal illness patterns.

---

## Percentage Measures

### Presence %

Calculates the overall presence percentage.

```dax
Presence % = 
    DIVIDE(
        [Present Days],
        [Total Working Days],
        0
    )
```

> **Business Use**: The primary KPI on the dashboard — displayed as **91.55%**. Indicates the proportion of working days employees were physically present. Higher values suggest strong in-office attendance.

---

### WFH %

Calculates the work-from-home percentage.

```dax
WFH % = 
    DIVIDE(
        [WFH Count],
        [Total Working Days],
        0
    )
```

> **Business Use**: Displayed as **11.15%** on the dashboard. Tracks the share of working days spent working remotely. Useful for evaluating hybrid work policies and understanding WFH adoption across the organization.

---

### SL %

Calculates the sick leave percentage.

```dax
SL % = 
    DIVIDE(
        [SL Count],
        [Total Working Days],
        0
    )
```

> **Business Use**: Displayed as **1.08%** on the dashboard. A low SL % is generally healthy. Spikes in SL % by date or by employee may warrant HR attention.

---

## Measure Summary

| Measure | Formula Type | Dashboard Element |
|---|---|---|
| Total Working Days | Core | Gauge card (4,439) |
| Present Days | Core | Used in Presence % |
| WFH Count | Core | Used in WFH % |
| SL Count | Core | Used in SL % |
| Presence % | Percentage | KPI card (91.55%) |
| WFH % | Percentage | KPI card (11.15%) |
| SL % | Percentage | KPI card (1.08%) |
| Month | Column | Month slicers |
| Day of Week | Column | Day-of-week tables |

---

## Notes

- All percentage measures use `DIVIDE()` with a fallback of `0` to handle potential division-by-zero errors
- The `Total Working Days` measure excludes non-working days (Weekly Offs and Holidays) to ensure accurate percentage calculations
- Measures respond dynamically to slicer selections (month filters, employee filters)
- The `Month` and `Day of Week` columns are calculated columns added to the Attendance table in Power Query or DAX

---

[← Back to README](README.md)
