import { useMemo, useState } from "react";
import { initTg, tg } from "./lib/telegram";

const mockVideos = [
  { id: "1", title: "Demo video 1", author: "Channel A", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "2", title: "Demo video 2", author: "Channel B", url: "https://www.w3schools.com/html/movie.mp4" },
];

export default function App() {
  const { insideTelegram, user } = useMemo(() => initTg(), []);
  const [activeId, setActiveId] = useState(mockVideos[0].id);
  const active = mockVideos.find(v => v.id === activeId);

  const onPrimaryAction = () => {
    const webapp = tg();
    if (!webapp) return alert("Browser preview");
    webapp.showAlert?.("Hello from Mini App!");
  };

  return (
    <div style={{ padding: 16, fontFamily: "system-ui", background: "#000" }}>
      <div style={{ opacity: 0.75, marginBottom: 12 }}>
        {insideTelegram ? `Inside Telegram: ${user?.first_name ?? "user"}` : "Browser preview (not Telegram)"}
      </div>

      <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 12, background: "#000" }}>
        <video src={active.url} controls playsInline style={{ width: "100%", display: "block" }} />
      </div>

      <div style={{ fontSize: 18, fontWeight: 700 }}>{active.title}</div>
      <div style={{ opacity: 0.7, marginBottom: 12 }}>{active.author}</div>

      <button onClick={onPrimaryAction} style={{ padding: 12, borderRadius: 12, width: "100%" }}>
        Primary action
      </button>

      <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
        {mockVideos.map(v => (
          <button
            key={v.id}
            onClick={() => setActiveId(v.id)}
            style={{
              textAlign: "left",
              padding: 12,
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.12)",
              background: v.id === activeId ? "rgba(0,0,0,0.06)" : "white",
              cursor: "pointer",
            }}
          >
            <div style={{ fontWeight: 600 }}>{v.title}</div>
            <div style={{ opacity: 0.7, fontSize: 13 }}>{v.author}</div>
          </button>
        ))}
      </div>
    </div>
  );
}