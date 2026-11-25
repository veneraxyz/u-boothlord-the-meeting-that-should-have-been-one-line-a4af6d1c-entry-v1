[![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/competitions/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/rank.svg?owner=veneraxyz&repo=u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c-entry-v1)](https://make.fun/competitions/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/reward.svg?owner=veneraxyz&repo=u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c-entry-v1)](https://make.fun/competitions/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

# The Meeting That Should Have Been One Line

A tiny TypeScript program that writes the single sentence that could have
replaced an entire pointless meeting — no context, no explanation, no setup.
Just the line that kills the meeting.

> The client already said yes in the email nobody read, so this meeting is just twelve people slowly discovering the answer together.

## Run it

```sh
node main.ts
```

This writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). Node 22+, no dependencies, stdlib only.
The program validates the line (one line, 1–200 characters, non-whitespace)
and re-reads the file to confirm it matches exactly.
