interface HighlightedTextProps {
  text: string;
  className?: string;
  highlightClassName?: string;
  extraKeywords?: string[];
}

const DEFAULT_KEYWORDS = [
  "production",
  "embedded",
  "firmware",
  "ble",
  "nfc",
  "ota",
  "security",
  "secure",
  "reliability",
  "reliable",
  "scalable",
  "real time",
  "freertos",
  "zephyr",
  "mcuboot",
  "coredump",
  "diagnostics",
  "deployed",
];

const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default function HighlightedText({
  text,
  className,
  highlightClassName = "text-blue-600 font-semibold",
  extraKeywords = [],
}: HighlightedTextProps) {
  const keywords = Array.from(
    new Set([...DEFAULT_KEYWORDS, ...extraKeywords].map((k) => k.toLowerCase()))
  );

  const keywordPattern = keywords.map(escapeRegex).join("|");
  const numberPattern =
    "\\b\\d+[,.]?\\d*%|\\b\\d+[+]\\b|\\b\\d+\\s*(?:days?|weeks?|months?|years?)\\b|\\b\\d+\\s*to\\s*\\d+\\s*(?:seconds?|minutes?|hours?)\\b";
  const pattern = new RegExp(`(${numberPattern}|\\b(?:${keywordPattern})\\b)`, "gi");
  const matcher = new RegExp(`^(${numberPattern}|\\b(?:${keywordPattern})\\b)$`, "i");

  const parts = text.split(pattern);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        matcher.test(part) ? (
          <span key={i} className={highlightClassName}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
