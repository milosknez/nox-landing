const securityCards = [
  {
    num: "01",
    title: "End-to-End Encryption",
    description:
      "AES-256 encryption at rest, TLS 1.3 in transit. Hardware security modules for key management.",
  },
  {
    num: "02",
    title: "Immutable Audit Trail",
    description:
      "Cryptographically signed audit logs with tamper-evident storage. Full chain of custody for all operations.",
  },
  {
    num: "03",
    title: "Identity & Access Control",
    description:
      "Role-based access with attribute-based policies. Multi-factor authentication with hardware token support.",
  },
];

export default function Security() {
  return (
    <section className="flex flex-col gap-16 w-full py-24 px-[120px] bg-[var(--bg-elevated)] border-t border-[var(--border)]">
      {/* Header */}
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[4px]">
            SECURITY
          </span>
          <h2 className="text-[40px] font-semibold text-[var(--text-primary)] leading-[1.15] tracking-[-0.8px]">
            Security architecture designed
            <br />
            for zero-compromise environments.
          </h2>
        </div>
        <p className="text-[15px] text-[var(--text-secondary)] leading-[1.6] text-right max-w-[340px]">
          Every layer encrypted. Every access logged.
          <br />
          Every deployment auditable.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {securityCards.map((card) => (
          <div
            key={card.num}
            className="flex flex-col gap-5 p-7 bg-[var(--bg-surface)] rounded-[4px] border border-[var(--border)]"
          >
            <span className="font-mono text-[32px] font-light text-[var(--border)]">
              {card.num}
            </span>
            <h3 className="text-[16px] font-semibold text-[var(--text-primary)]">{card.title}</h3>
            <p className="text-[13px] text-[var(--text-secondary)] leading-[1.65]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
