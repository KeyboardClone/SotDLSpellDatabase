// initialize or open the sqlite database
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: "SotDLSpells.sqlite"});

(async () => {
    // setting up to reading the input file line by line
    const lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('Spells.txt')
    });
      
    // perform specific operations per line within the file
    lineReader.on('line', function (line) {
        const entry = line.split(/`/);
        // console.log(entry);

        // put in an entry into the database, if it already exists
        // we then update that entry
        db.set(entry[0], {bookOrigin: entry[1], 
                            spellTradition: entry[2],
                            spellType: entry[3],
                            spellLevel: entry[4],
                            spellDescription: entry[5]});

    });

    // Testing to see if we can display an entry in the database
    console.log("MONSTROUS TRANSFORMATION");
    console.log(await db.get("MONSTROUS TRANSFORMATION"));
})();