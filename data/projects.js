export const projects = [
  {
    slug: "home-soc-lab-splunk-elk",
    title: "Built a Home SOC Lab with Splunk & ELK Stack",
    summary: "Deployed a simulated enterprise SOC lab with Splunk and ELK for log aggregation, detection engineering, and alert triage.",
    tags: ["SIEM", "SOC", "Detection Engineering"],
    links: { github: "", report: "/case-studies/home-soc-lab.pdf" },
    details: {
      problem: "Limited hands-on SOC experience without enterprise infrastructure.",
      methodology: [
        "Provisioned lab VMs running Windows Server, Ubuntu, and Kali.",
        "Configured Beats, Sysmon, and Zeek for comprehensive telemetry.",
        "Authored detection rules for brute force, web scanning, and lateral movement.",
        "Built dashboards for incident triage using Splunk and Kibana."
      ],
      tools: ["Splunk", "Elastic Stack", "Sysmon", "Zeek", "Beats", "Kali"],
      outcome: [
        "Reduced mean-time-to-detect in lab simulations by 40%.",
        "Created reusable playbooks for future incidents."
      ]
    }
  },
  {
    slug: "owasp-juice-shop-webapp-pentest",
    title: "Performed Web App Penetration Testing on OWASP Juice Shop",
    summary: "Executed a structured black-box web application pentest against the OWASP Juice Shop target.",
    tags: ["Pentesting", "OWASP", "Web Security"],
    links: { github: "", report: "/case-studies/juice-shop-pentest.pdf" },
    details: {
      problem: "Demonstrate offensive security methodology in a safe lab.",
      methodology: [
        "Recon and mapping with Burp Suite, dirb, and manual testing.",
        "Identified SQLi, XSS, IDOR, and broken auth paths.",
        "Exploit proof-of-concepts and responsible disclosure write-up."
      ],
      tools: ["Burp Suite", "Kali", "SQLMap", "OWASP ZAP"],
      outcome: [
        "Documented high-impact vulns with mitigation steps.",
        "Educated stakeholders on secure coding practices."
      ]
    }
  },
  {
    slug: "automated-threat-detection-python",
    title: "Automated Threat Detection Script in Python",
    summary: "Developed a Python utility to parse logs and flag suspicious behaviors, integrated with Slack notifications.",
    tags: ["Python", "SIEM", "Automation"],
    links: { github: "", report: "/case-studies/python-threat-detection.pdf" },
    details: {
      problem: "Manual log triage is time-consuming and error-prone.",
      methodology: [
        "Parsed JSON/CEF logs for anomalous patterns.",
        "Implemented thresholds and whitelisting to reduce noise.",
        "Added enrichment with GeoIP and simple reputation checks."
      ],
      tools: ["Python", "GeoIP", "Slack API"],
      outcome: [
        "Cut daily triage time by ~30% in the lab setting.",
        "Provided modular components for SIEM integration."
      ]
    }
  },
  {
    slug: "hybrid-ids-ml",
    title: "Hybrid Intrusion Detection System (NIDS + HIDS) using ML",
    summary: "Implemented a hybrid IDS with optimized features and ML models for real-time detection.",
    tags: ["ML", "IDS", "Security Engineering"],
    links: { github: "", report: "/case-studies/hybrid-ids-ml.pdf" },
    details: {
      problem: "Detect sophisticated threats with low overhead.",
      methodology: [
        "Curated datasets and engineered features for network and host telemetry.",
        "Trained and validated models focusing on precision/recall balance.",
        "Deployed lightweight agents to stream features to the model."
      ],
      tools: ["Python", "Scikit-learn", "Pandas"],
      outcome: [
        "Achieved high accuracy with low computational cost.",
        "Demonstrated scalability across environments."
      ]
    }
  }
];