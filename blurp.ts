import { handleMood } from "./theGrouchDaemon";
import { Mood } from "./moodLexicon";

const args = process.argv.slice(2);
const vaultLog = args.includes("--log");

// Map symbolic flags to moods
const moodMap: Record<string, Mood> = {
  "--sigh": Mood.Reluctant,
  "--purge": Mood.Purge,
  "--cleanse": Mood.Cleanse,
  "--reflect": Mood.Reflective
};

// Find the first mood flag
const moodFlag = args.find(arg => moodMap[arg]);
const mood = moodFlag ? moodMap[moodFlag] : (args[0] as Mood);

if (mood) {
  handleMood(mood, vaultLog);
} else {
  console.warn("🧱 Unknown mood or flag. Try --sigh, --purge, --cleanse, --reflect");
}
