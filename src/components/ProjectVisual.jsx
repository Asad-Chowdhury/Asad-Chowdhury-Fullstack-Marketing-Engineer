function Bars({ count = 5 }) {
  return (
    <div className="flex h-24 items-end gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="flex-1 rounded-t bg-black"
          style={{ height: `${34 + index * 11}%`, opacity: 0.18 + index * 0.12 }}
        />
      ))}
    </div>
  );
}

export default function ProjectVisual({ type }) {
  if (type === "pipeline") {
    return (
      <div className="grid h-full min-h-52 content-center gap-5">
        {["Website", "CRM", "Server GTM", "Ad Platforms"].map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-black text-white">
              {index + 1}
            </span>
            <span className="h-2 flex-1 rounded-full bg-black/10">
              <span
                className="block h-full rounded-full bg-blue-600"
                style={{ width: `${52 + index * 12}%` }}
              />
            </span>
            <span className="w-28 text-right text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
              {step}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "shopify") {
    return (
      <div className="grid h-full min-h-52 grid-cols-[0.9fr_1.1fr] gap-5">
        <div className="rounded-lg bg-white p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
            Checkout
          </p>
          <div className="mt-5 space-y-3">
            <span className="block h-3 rounded-full bg-black/12" />
            <span className="block h-3 w-4/5 rounded-full bg-black/12" />
            <span className="block h-10 rounded bg-green-600/15" />
          </div>
        </div>
        <div className="rounded-lg bg-black p-4 text-white">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">
            Events
          </p>
          <div className="mt-5 space-y-3 text-xs font-bold">
            {["view_item", "add_to_cart", "purchase"].map((event) => (
              <div key={event} className="flex items-center justify-between">
                <span>{event}</span>
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="grid h-full min-h-52 gap-4">
        <div className="grid grid-cols-3 gap-3">
          {["Leads", "SQL", "Revenue"].map((item) => (
            <div key={item} className="rounded-lg bg-white p-4">
              <p className="text-xs font-bold text-zinc-500">{item}</p>
              <p className="mt-2 text-2xl font-black text-black">
                {item === "Revenue" ? "$42k" : item === "SQL" ? "38%" : "1.8k"}
              </p>
            </div>
          ))}
        </div>
        <Bars count={7} />
      </div>
    );
  }

  if (type === "portfolio") {
    return (
      <div className="grid h-full min-h-52 content-center gap-4">
        <div className="rounded-lg bg-black p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/50">
            Positioning
          </p>
          <p className="mt-4 text-3xl font-black leading-none">
            Growth systems,
            <br />
            not just websites.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["Work", "Skills", "Contact"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-3 py-2 text-center text-xs font-bold text-zinc-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full min-h-52 gap-4">
      <div className="flex items-center justify-between rounded-lg bg-white p-4">
        <span className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
          Tracking Health
        </span>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
          Live
        </span>
      </div>
      <Bars count={6} />
      <div className="grid grid-cols-3 gap-3">
        {["GA4", "GTM", "CAPI"].map((item) => (
          <span
            key={item}
            className="rounded bg-black px-3 py-3 text-center text-xs font-black text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
