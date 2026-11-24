[![make.fun · u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/oy-builds/dog-ate-homework-01/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/oy-builds/dog-ate-homework-01/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

# The Dog Ate My Homework — Funniest Excuse

An entry for the make.fun bounty **"The Dog Ate My Homework: Funniest Excuse"** ([bounty page](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)).

`main.ts` (Node 22, standard library only) writes a single line — the excuse a dog gives after being caught eating the homework, in the dog's own voice — to `$MAKEFUN_OUTPUT_DIR/entry.txt`. The dog's defense is pure dog logic: the homework was on the floor, the floor is where food goes, so eating it was following the rules — and it would do it again.

> "The homework was on the floor, and the floor is where my food goes. I followed the rules. I'd do it again."

## Run

```sh
node main.ts
```

The program validates the line (1–200 characters, single line, UTF-8), writes it to `entry.txt`, reads it back, and verifies the file matches the line exactly.
