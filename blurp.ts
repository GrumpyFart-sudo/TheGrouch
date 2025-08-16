import { handleMood } from "./theGrouchDaemon";
import { Mood } from "./moodLexicon";

const moodInput = process.argv[2] as Mood;
const vaultLog = process.argv.includes("--log");

handleMood(moodInput, vaultLog);
