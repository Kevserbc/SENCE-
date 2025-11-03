"use client";
import React, { useState, useRef, useEffect } from "react";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Merhaba! Size nasıl yardımcı olabilirim?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

const handleSend = async () => {
  if (!input) return;

  const newMessages = [...messages, { role: "user", content: input }];
  setMessages(newMessages);
  setInput("");
  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages([...newMessages, { role: "assistant", content: data.reply }]);
  } catch (error) {
    console.error("Chat Hatası:", error);
    setMessages([
      ...newMessages,
      { role: "assistant", content: "Üzgünüm, şu anda yanıt veremiyorum." },
    ]);
  }

  setLoading(false);
};


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Sohbet Balonu Aç/Kapat Butonu */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition"
        >
          💬
        </button>
      )}

      {/* Sohbet Kutusu */}
      {open && (
        <div className="w-72 bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden">
          {/* Başlık */}
          <div className="bg-indigo-600 text-white p-3 font-bold flex justify-between items-center">
            <span>PortTech Asistan</span>
            <button onClick={() => setOpen(false)} className="ml-2">✖</button>
          </div>

          {/* Mesaj Listesi */}
          <div className="flex-1 p-3 overflow-y-auto h-52 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 p-2 rounded-2xl max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-indigo-100 text-gray-800 self-end ml-auto"
                    : "bg-gray-100 text-gray-800 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 italic text-xs">Yazıyor...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Giriş Alanı */}
          <div className="flex border-t border-gray-300 p-2">
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 text-sm transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


