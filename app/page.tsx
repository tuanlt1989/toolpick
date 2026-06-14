"use client";

const tools = [
  { id: 1, name: "Notion", category: "Project Management", description: "All-in-one workspace for notes, tasks, and wikis", rating: 4.8, price: "$8/mo", commission: "50%", icon: "📝", color: "bg-gray-800",
    siteUrl: "https://notion.so", reviewSlug: "/reviews/notion", affiliateUrl: "https://notion.so/?via=toolpick" },
  { id: 2, name: "Mailchimp", category: "Email Marketing", description: "Email marketing & automation platform for growing businesses", rating: 4.5, price: "Free+", commission: "30%", icon: "🐒", color: "bg-yellow-900",
    siteUrl: "https://mailchimp.com", reviewSlug: "/reviews/mailchimp", affiliateUrl: "https://mailchimp.com" },
  { id: 3, name: "Webflow", category: "Web Hosting", description: "No-code website builder with CMS and hosting", rating: 4.7, price: "$14/mo", commission: "50%", icon: "🌊", color: "bg-blue-900",
    siteUrl: "https://webflow.com", reviewSlug: "/reviews/webflow", affiliateUrl: "https://webflow.com?via=toolpick" },
  { id: 4, name: "Figma", category: "Design Tools", description: "Collaborative UI design tool used by top product teams", rating: 4.9, price: "$12/mo", commission: "20%", icon: "🎨", color: "bg-purple-900",
    siteUrl: "https://figma.com", reviewSlug: "/reviews/figma", affiliateUrl: "https://figma.com" },
  { id: 5, name: "HubSpot", category: "CRM", description: "Full-featured CRM platform for sales & marketing", rating: 4.6, price: "Free+", commission: "30%", icon: "🔶", color: "bg-orange-900",
    siteUrl: "https://hubspot.com", reviewSlug: "/reviews/hubspot", affiliateUrl: "https://hubspot.com/?via=toolpick" },
  { id: 6, name: "Mixpanel", category: "Analytics", description: "Product analytics to understand user behavior", rating: 4.5, price: "Free+", commission: "20%", icon: "📊", color: "bg-indigo-900",
    siteUrl: "https://mixpanel.com", reviewSlug: "/reviews/mixpanel", affiliateUrl: "https://mixpanel.com" },
];

const categories = [
  { name: "Project Management", icon: "📋", count: 42, url: "https://www.g2.com/categories/project-management" },
  { name: "Email Marketing", icon: "📧", count: 38, url: "https://www.g2.com/categories/email-marketing" },
  { name: "Web Hosting", icon: "🌐", count: 31, url: "https://www.g2.com/categories/web-hosting" },
  { name: "Design Tools", icon: "🎨", count: 27, url: "https://www.g2.com/categories/graphic-design" },
  { name: "CRM", icon: "🤝", count: 25, url: "https://www.g2.com/categories/crm" },
  { name: "Analytics", icon: "📊", count: 19, url: "https://www.g2.com/categories/analytics-platforms" },
];

const reviews = [
  {
    title: "Notion vs Obsidian: Which Note-Taking App Wins in 2024?",
    excerpt: "We tested both apps for 30 days across teams of different sizes. Here's what we found.",
    date: "Dec 12, 2024", readTime: "8 min read", tag: "Comparison",
    url: "https://www.reddit.com/r/Notion/comments/notion_vs_obsidian",
    realUrl: "https://www.techradar.com/best/best-note-taking-apps",
  },
  {
    title: "Best Email Marketing Tools for E-commerce in 2024",
    excerpt: "A comprehensive review of Mailchimp, Klaviyo, ActiveCampaign and more for online stores.",
    date: "Dec 8, 2024", readTime: "12 min read", tag: "Roundup",
    realUrl: "https://www.shopify.com/blog/email-marketing-tools",
  },
  {
    title: "Webflow Review 2024: Is It Worth the Price?",
    excerpt: "After building 50+ sites on Webflow, here's our honest take on its pros, cons and pricing.",
    date: "Dec 3, 2024", readTime: "10 min read", tag: "Review",
    realUrl: "https://webflow.com/blog",
  },
  {
    title: "HubSpot Free CRM: Everything You Get (And What You Don't)",
    excerpt: "The free tier is genuinely powerful, but there are catches. We break down exactly what's included.",
    date: "Nov 28, 2024", readTime: "7 min read", tag: "Review",
    realUrl: "https://blog.hubspot.com/crm",
  },
];

const comparison = [
  { name: "Notion", url: "https://notion.so", price: "$8/mo", storage: "Unlimited", api: "✅", ai: "✅", mobile: "✅", offline: "✅" },
  { name: "Asana", url: "https://asana.com", price: "$10.99/mo", storage: "Unlimited", api: "✅", ai: "✅", mobile: "✅", offline: "❌" },
  { name: "ClickUp", url: "https://clickup.com", price: "$7/mo", storage: "Unlimited", api: "✅", ai: "✅", mobile: "✅", offline: "✅" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))} {rating}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-black text-indigo-600">Tool</span>
            <span className="text-2xl font-black text-gray-900">Pick</span>
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full ml-1">BETA</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
            <a href="#top-picks" className="hover:text-indigo-600 transition">Reviews</a>
            <a href="#compare" className="hover:text-indigo-600 transition">Compare</a>
            <a href="#categories" className="hover:text-indigo-600 transition">Categories</a>
            <a href="#latest" className="hover:text-indigo-600 transition">Blog</a>
          </div>
          <a href="https://www.g2.com/software" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition">
            Get Recommendations
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ 500+ tools reviewed by real users
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Find the Perfect Tool<br />
            <span className="text-indigo-600">for Your Business</span>
          </h1>
          <p className="text-gray-500 text-xl mb-10 max-w-xl mx-auto">
            Honest, independent reviews of SaaS tools — no sponsored placements, no bias.
          </p>
          <form
            className="flex max-w-lg mx-auto gap-3 mb-8"
            onSubmit={(e) => {
              e.preventDefault();
              const q = (e.currentTarget.elements.namedItem("q") as HTMLInputElement).value;
              if (q) window.open(`https://www.g2.com/search#q=${encodeURIComponent(q)}`, "_blank");
            }}
          >
            <input
              name="q"
              type="text"
              placeholder="e.g. project management, email marketing..."
              className="flex-1 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition whitespace-nowrap">
              Find Tools
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Notion", url: "https://notion.so" },
              { label: "Figma", url: "https://figma.com" },
              { label: "HubSpot", url: "https://hubspot.com" },
              { label: "Webflow", url: "https://webflow.com" },
              { label: "Mailchimp", url: "https://mailchimp.com" },
              { label: "Slack", url: "https://slack.com" },
              { label: "Linear", url: "https://linear.app" },
            ].map((tag) => (
              <a key={tag.label} href={tag.url} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 text-gray-600 text-sm px-4 py-1.5 rounded-full transition shadow-sm">
                {tag.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <div className="border-y border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          {["✓ Independently reviewed", "✓ No sponsored rankings", "✓ Updated monthly", "✓ Real user testing"].map(s => (
            <span key={s} className="font-medium">{s}</span>
          ))}
        </div>
      </div>

      {/* Top Picks */}
      <section id="top-picks" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">⭐ Top Picks This Month</h2>
          <a href="https://www.g2.com/software" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium transition">View all reviews →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="border border-gray-100 hover:border-indigo-200 rounded-2xl p-6 transition hover:shadow-lg hover:shadow-indigo-50 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`${tool.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}>
                  {tool.icon}
                </div>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-100">
                  {tool.commission} commission
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-indigo-600 transition">{tool.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{tool.description}</p>
              <div className="flex items-center justify-between mb-5">
                <StarRating rating={tool.rating} />
                <span className="text-gray-700 font-semibold text-sm">From {tool.price}</span>
              </div>
              <div className="flex gap-2">
                <a href={tool.reviewSlug} className="flex-1 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 text-sm font-semibold py-2.5 rounded-xl text-center transition">
                  Read Review
                </a>
                <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-xl text-center transition">
                  Visit Site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <a key={cat.name} href={cat.url} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-gray-100 hover:border-indigo-300 rounded-2xl p-5 text-center transition hover:shadow-md group">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition">{cat.name}</div>
                <div className="text-xs text-gray-400 mt-1">{cat.count} tools</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">📊 Quick Comparison</h2>
        <p className="text-gray-500 mb-8">Top Project Management tools side-by-side</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {["Tool", "Price", "Storage", "API", "AI Features", "Mobile", "Offline"].map(h => (
                  <th key={h} className="px-5 py-4 text-left font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-4">
                    <a href={row.url} target="_blank" rel="noopener noreferrer" className="font-bold text-indigo-600 hover:underline">{row.name}</a>
                  </td>
                  <td className="px-5 py-4 text-gray-700">{row.price}</td>
                  <td className="px-5 py-4 text-gray-700">{row.storage}</td>
                  <td className="px-5 py-4">{row.api}</td>
                  <td className="px-5 py-4">{row.ai}</td>
                  <td className="px-5 py-4">{row.mobile}</td>
                  <td className="px-5 py-4">{row.offline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <a href="https://www.g2.com/categories/project-management" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">See full comparison →</a>
        </div>
      </section>

      {/* Latest Reviews */}
      <section id="latest" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">📰 Latest Reviews</h2>
          <div className="space-y-4">
            {reviews.map((r) => (
              <a key={r.title} href={r.realUrl} target="_blank" rel="noopener noreferrer"
                className="block bg-white border border-gray-100 hover:border-indigo-200 rounded-2xl p-6 transition hover:shadow-md group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-2.5 py-1 rounded-full mb-3">{r.tag}</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition mb-2">{r.title}</h3>
                    <p className="text-gray-500 text-sm">{r.excerpt}</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-indigo-400 transition text-2xl flex-shrink-0">→</span>
                </div>
                <div className="flex gap-4 mt-3 text-xs text-gray-400">
                  <span>{r.date}</span>
                  <span>·</span>
                  <span>{r.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-4 text-center text-gray-400 text-sm">
        <div className="mb-2 font-black text-gray-900">
          <span className="text-indigo-600">Tool</span>Pick
        </div>
        <p className="mb-1">© 2024 ToolPick. All rights reserved.</p>
        <p>ToolPick participates in affiliate programs. We may earn commissions from qualifying purchases.</p>
      </footer>
    </div>
  );
}
