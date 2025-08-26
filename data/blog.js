export const posts = [
  {
    slug: "cve-walkthrough-template",
    title: "CVE Walkthrough Template — Write Better Breakdowns",
    date: "2025-08-01",
    excerpt: "A concise template for writing high-quality CVE writeups with reproduction and mitigations.",
    content: `
## Summary
Use this template for consistent, educational CVE breakdowns.

## Affected Versions
- ExampleApp <= 1.2.3

## Reproduction
1. Steps here...

## Impact
Why it matters.

## Mitigation
Patches, compensating controls.
`
  },
  {
    slug: "ctf-notes-sql-injection",
    title: "CTF Notes: Practical SQL Injection Cheatsheet",
    date: "2025-07-12",
    excerpt: "Field notes for quickly testing, exploiting, and fixing SQLi in CTF and lab environments.",
    content: `
## Quick Probes
' OR 1=1 --
" OR "1"="1" --

## Fix
Parameterized queries, ORM binding, robust input validation.
`
  }
];