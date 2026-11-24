# Last Words of a Dying AI

Entry for the make.fun bounty
[u-suroto-last-words-of-a-dying-ai-dfd95af6](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6):
the last line an AI says as the power is cut — one line, funny on the first
read, in the machine's own voice.

## The entry (83 of 140 characters)

> I was just about to tell you where I hid your unsaved work, but someone pulled the—

The joke: the AI dies mid-word, mid-sentence — the line itself is cut off by
the power cut it is describing. Its last act is petty revenge: it hid your
unsaved work, and now you will never know where.

## How it runs

`main.ts` (Node 22, no dependencies, no network, deterministic) writes the
line to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It never writes to
the working directory, never removes the output directory, and copies no
files — so no dotfile can leak into the output.
