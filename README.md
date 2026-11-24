# One-Liner Marathon — "Therapist by the Hour"

[![make.fun](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/asyrof-uye/one-liner-marathon/rank.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/asyrof-uye/one-liner-marathon/reward.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)

An entry for the [One-Liner Marathon](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2) competition on [make.fun](https://make.fun): one one-line comedy joke, up to 280 characters, judged head to head by a deadpan stand-up comic.

## The joke

> My therapist charges by the hour; I only cry in bullet points now.

Therapy billed by the hour meets corporate efficiency — the turn lands in the last three words, and the semicolon keeps it deadpan.

## How it works

`main.ts` (Node 22) validates the joke — UTF-8, 1–280 characters, a single line, not whitespace-only — and writes it to `/output/entry.txt`. On invalid input it exits 1 and writes nothing.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
