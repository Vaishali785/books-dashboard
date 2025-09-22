# tailwind setup

- although tailwind was installed by default by nextjs, tailwind.config.js file was not there to create design system.
- for that, uninstalled the latest(unstable) tailwind version
  ```javascript
      pnpm remove tailwindcss
  ```
  - and installed 3.4.4 using
    ```javascript
        pnpm add -D tailwindcss@3.4.4 postcss autoprefixer
    ```
  - create file
  ```javascript
       pnpm exec tailwindcss init
  ```




src/
  app/
    (dashboard)/                 # Dashboard “group” routes
      layout.tsx                 # Shell: sidebar/header/grid, providers
      page.tsx                   # Dashboard landing: composes features
      settings/
        page.tsx
    (marketing)/
      layout.tsx
      page.tsx
    api/                         # Route handlers if needed
  components/
    ui/                          # Headless/reusable primitives
      Card.tsx
      KPI.tsx                    # Generic KPI primitive (no data fetch)
      ChartContainer.tsx         # Wrapper: legend, tooltip, theme sync
      Button.tsx
    layout/                      # Cross-route layout pieces
      DesktopHeader.tsx
      Sidebar.tsx
      AppShell.tsx               # Optional shell composition
  features/
    analytics/
      components/
        KPISummary.tsx           # Composes 3–5 KPI primitives
        SalesTrendChart.tsx      # Client chart
        RegionBreakdownChart.tsx # Client chart
      kpis/
        TotalSalesKPI.tsx        # Server comp with data fetch + UI.KPI
        ConversionRateKPI.tsx
      lib/
        queries.ts               # Server data loaders
        selectors.ts             # Shape/format data for charts
      types.ts
    inventory/
      components/
      kpis/
      lib/
  lib/
    db.ts                        # DB client
    fetch.ts                     # API client helpers
    format.ts                    # Formatters (numbers, dates)
  hooks/
    useTheme.ts
    useViewport.ts
  styles/
    globals.css
  types/
    index.ts





## Libraries & Frameworks
    1. nextjs
    2. clsx
    3. tailwind merge
    4. shadcn ui
    5. tailwind  
    6. nivo charts