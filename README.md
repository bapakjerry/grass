require("colors");

function displayJelocyEmoji() {
  process.stdout.write("\x1Bc"); // Membersihkan konsol

  console.log(`
            ${"🟦 🟥 🟩 🟨 🟦 🟥".rainbow}
            ${"🟨 🟦 🟥 🟩 🟨 🟦".cyan}
            ${"🟩 🟨 🟦 🟥 🟩 🟨".green}
            ${"🟥 🟩 🟨 🟦 🟥 🟩".yellow}
            ${"🟦 🟥 🟩 🟨 🟦 🟥".blue}
            ${"🟨 🟦 🟥 🟩 🟨 🟦".red}

            ${"JELOCY".bold.brightMagenta}
  `.split("\n").map(line => line.padStart(50)).join("\n"));
}

module.exports = displayJelocyEmoji;

