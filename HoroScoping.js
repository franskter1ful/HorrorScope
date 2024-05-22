let quotes = [
    "Adding additional features beyond the original request", "Providing support for outdated software versions", "Assisting with personal projects unrelated to work", "Extending support hours beyond the agreed schedule", "Offering hardware support when only software support was agreed upon", "Troubleshooting network issues when only application support was promised", "Training users on basic computer skills", "Writing custom scripts for users", "Integrating third-party applications", "Offering on-site support when only remote support was agreed upon", "Providing support for unsupported operating systems", "Customizing software beyond the standard configurations", "Responding to requests from users outside the supported team or department", "Developing new features instead of fixing bugs", "Supporting non-standard peripherals or devices", "Assisting with data migration not included in the original scope", "Creating user documentation or manuals", "Handling tasks that are typically the responsibility of another team", "Offering ongoing maintenance instead of a one-time fix", "Supporting legacy systems beyond their end-of-life", "Extending support to other locations or offices", "Managing user permissions or access control beyond initial setup", "Conducting security audits or assessments", "Customizing user interfaces", "Supporting beta or pre-release software", "Providing detailed reports or analytics", "Offering performance tuning services", "Assisting with regulatory compliance", "Providing support for software integration projects", "Creating automated workflows", "Debugging code or scripts not developed by the support team", "Installing software or hardware not originally specified", "Offering procurement advice or services", "Providing 24/7 support instead of agreed-upon hours", "Supporting multiple languages or localizations", "Handling custom configuration requests", "Providing detailed training sessions or workshops", "Taking on project management responsibilities", "Assisting with cloud migration", "Developing custom APIs", "Offering consultancy services beyond support", "Managing backup and disaster recovery plans", "Supporting mobile apps not included in the original agreement", "Providing end-user support instead of just IT staff", "Handling escalations from third-party vendors", "Integrating social media or external platforms", "Providing user experience (UX) enhancements", "Setting up and maintaining continuous integration/continuous deployment (CI/CD) pipelines", "Managing customer feedback or surveys", "Offering proactive monitoring and alerting services"
]

// let randomNumber = Math.floor(Math.random() * quotes.length);

//console.log(randomNumber);
//console.log(quotes[randomNumber])

const newQuote = () => {
    // return quotes[randomNumber];
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
// console.log(newQuote());

