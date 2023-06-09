const {DiceRoll} = require('@dice-roller/rpg-dice-roller');
const {getAndPrintRandomCyphers} = require('../cyphers');

const descriptors = [
  {min: 1, max: 1, description: 'Addicted'},
  {min: 2, max: 2, description: 'Adventurous'},
  {min: 3, max: 3, description: 'Affluent'},
  {min: 4, max: 4, description: 'Alcoholic'},
  {min: 5, max: 5, description: 'Amiable'},
  {min: 6, max: 6, description: 'Bohemian'},
  {min: 7, max: 7, description: 'Carefree'},
  {min: 8, max: 8, description: 'Charming'},
  {min: 9, max: 9, description: 'Cheerful'},
  {min: 10, max: 10, description: 'Comedic'},
  {min: 11, max: 11, description: 'Confident'},
  {min: 12, max: 12, description: 'Conformist'},
  {min: 13, max: 13, description: 'Conning'},
  {min: 14, max: 14, description: 'Conniving'},
  {min: 15, max: 15, description: 'Conservative'},
  {min: 16, max: 16, description: 'Cool'},
  {min: 17, max: 17, description: 'Corrupt'},
  {min: 18, max: 18, description: 'Crazy'},
  {min: 19, max: 19, description: 'Cultured'},
  {min: 20, max: 20, description: 'Dangerous'},
  {min: 21, max: 21, description: 'Deadly'},
  {min: 22, max: 22, description: 'Deceitful'},
  {min: 23, max: 23, description: 'Dependable'},
  {min: 24, max: 24, description: 'Diligent'},
  {min: 25, max: 25, description: 'Disdainful'},
  {min: 26, max: 26, description: 'Dominant'},
  {min: 27, max: 27, description: 'Dull'},
  {min: 28, max: 28, description: 'Elderly'},
  {min: 29, max: 29, description: 'Ethical'},
  {min: 30, max: 30, description: 'Evil'},
  {min: 31, max: 31, description: 'Famous'},
  {min: 32, max: 32, description: 'Flamboyant'},
  {min: 33, max: 33, description: 'Flippant'},
  {min: 34, max: 34, description: 'Forthright'},
  {min: 35, max: 35, description: 'Generous'},
  {min: 36, max: 36, description: 'Gluttonous'},
  {min: 37, max: 37, description: 'Gratuitous'},
  {min: 38, max: 38, description: 'Greedy'},
  {min: 39, max: 39, description: 'Gregarious'},
  {min: 40, max: 40, description: 'Helpful'},
  {min: 41, max: 41, description: 'Hilarious'},
  {min: 42, max: 42, description: 'Idealistic'},
  {min: 43, max: 43, description: 'Idiotic'},
  {min: 44, max: 44, description: 'Indifferent'},
  {min: 45, max: 45, description: 'Infamous'},
  {min: 46, max: 46, description: 'Inquisitive'},
  {min: 47, max: 47, description: 'Jealous'},
  {min: 48, max: 48, description: 'Jolly'},
  {min: 49, max: 49, description: 'Kindly'},
  {min: 50, max: 50, description: 'Kindly'},
  {min: 51, max: 51, description: 'Lazy'},
  {min: 52, max: 52, description: 'Liberal'},
  {min: 53, max: 53, description: 'Logical'},
  {min: 54, max: 54, description: 'Loveable'},
  {min: 55, max: 55, description: 'Loyal'},
  {min: 56, max: 56, description: 'Mean'},
  {min: 57, max: 57, description: 'Meddling'},
  {min: 58, max: 58, description: 'Miserable'},
  {min: 59, max: 59, description: 'Miserly'},
  {min: 60, max: 60, description: 'Mystical'},
  {min: 61, max: 61, description: 'Nefarious'},
  {min: 62, max: 62, description: 'Notorious'},
  {min: 63, max: 63, description: 'Optimistic'},
  {min: 64, max: 64, description: 'Ostentatious'},
  {min: 65, max: 65, description: 'Outspoken'},
  {min: 66, max: 66, description: 'Overbearing'},
  {min: 67, max: 67, description: 'Overruling'},
  {min: 68, max: 68, description: 'Paranoid'},
  {min: 69, max: 69, description: 'Passionate'},
  {min: 70, max: 70, description: 'Pessimistic'},
  {min: 71, max: 71, description: 'Petty'},
  {min: 72, max: 72, description: 'Philosophical'},
  {min: 73, max: 73, description: 'Pious'},
  {min: 74, max: 74, description: 'Possessive'},
  {min: 75, max: 75, description: 'Practical'},
  {min: 76, max: 76, description: 'Practical'},
  {min: 77, max: 77, description: 'Rational'},
  {min: 78, max: 78, description: 'Rebellious'},
  {min: 79, max: 79, description: 'Religious'},
  {min: 80, max: 80, description: 'Renowned'},
  {min: 81, max: 81, description: 'Romantic'},
  {min: 82, max: 82, description: 'Scholarly'},
  {min: 83, max: 83, description: 'Seductive'},
  {min: 84, max: 84, description: 'Sensible'},
  {min: 85, max: 85, description: 'Serious'},
  {min: 86, max: 86, description: 'Skilled'},
  {min: 87, max: 87, description: 'Smooth'},
  {min: 88, max: 88, description: 'Spiritual'},
  {min: 89, max: 89, description: 'Stubborn'},
  {min: 90, max: 90, description: 'Submissive'},
  {min: 91, max: 91, description: 'Superfluous'},
  {min: 92, max: 92, description: 'Thoughtful'},
  {min: 93, max: 93, description: 'Timid'},
  {min: 94, max: 94, description: 'Unpredictable'},
  {min: 95, max: 95, description: 'Unruly'},
  {min: 96, max: 96, description: 'Whimsical'},
  {min: 97, max: 97, description: 'Wicked'},
  {min: 98, max: 98, description: 'Wild'},
  {min: 99, max: 99, description: 'Youthful'},
  {min: 100, max: 100, description: 'Zealous'},
];

const types = [
  {min: 1, max: 1, description: 'Adept'},
  {min: 2, max: 2, description: 'Adventurer'},
  {min: 3, max: 3, description: 'Agent'},
  {min: 4, max: 4, description: 'Archaeologist'},
  {min: 5, max: 5, description: 'Artist'},
  {min: 6, max: 6, description: 'Assassin'},
  {min: 7, max: 7, description: 'Astrologer'},
  {min: 8, max: 8, description: 'Athlete'},
  {min: 9, max: 9, description: 'Automaton'},
  {min: 10, max: 10, description: 'Automaton'},
  {min: 11, max: 11, description: 'Bartender'},
  {min: 12, max: 12, description: 'Bodyguard'},
  {min: 13, max: 13, description: 'Bounty Hunter'},
  {min: 14, max: 14, description: 'Brothel Owner'},
  {min: 15, max: 15, description: 'Business Person'},
  {min: 16, max: 16, description: 'Captain'},
  {min: 17, max: 17, description: 'Celebrity'},
  {min: 18, max: 18, description: 'Chef'},
  {min: 19, max: 19, description: 'Cleric'},
  {min: 20, max: 20, description: 'Comedian'},
  {min: 21, max: 21, description: 'Craftsman'},
  {min: 22, max: 22, description: 'Crime Lord'},
  {min: 23, max: 23, description: 'Doctor'},
  {min: 24, max: 24, description: 'Druid'},
  {min: 25, max: 25, description: 'Enchanter'},
  {min: 26, max: 26, description: 'Engineer'},
  {min: 27, max: 27, description: 'Explorer'},
  {min: 28, max: 28, description: 'Extra Terrestrial'},
  {min: 29, max: 29, description: 'Farmer'},
  {min: 30, max: 30, description: 'Fighter'},
  {min: 31, max: 31, description: 'Fisherman'},
  {min: 32, max: 32, description: 'Fixer'},
  {min: 33, max: 33, description: 'Gambler'},
  {min: 34, max: 34, description: 'Genius'},
  {min: 35, max: 35, description: 'Government Official'},
  {min: 36, max: 36, description: 'Guru'},
  {min: 37, max: 37, description: 'Gypsy'},
  {min: 38, max: 38, description: 'Hacker'},
  {min: 39, max: 39, description: 'Henchman'},
  {min: 40, max: 40, description: 'Hermit'},
  {min: 41, max: 41, description: 'Hero'},
  {min: 42, max: 42, description: 'Historian'},
  {min: 43, max: 43, description: 'Informant'},
  {min: 44, max: 44, description: 'Innkeeper'},
  {min: 45, max: 45, description: 'Inventor'},
  {min: 46, max: 46, description: 'Judge'},
  {min: 47, max: 47, description: 'Landowner'},
  {min: 48, max: 48, description: 'Law Enforcer'},
  {min: 49, max: 49, description: 'Librarian'},
  {min: 50, max: 50, description: 'Mage'},
  {min: 51, max: 51, description: 'Maid'},
  {min: 52, max: 52, description: 'Martial Artist'},
  {min: 53, max: 53, description: 'Mercenary'},
  {min: 54, max: 54, description: 'Merchant'},
  {min: 55, max: 55, description: 'Messenger'},
  {min: 56, max: 56, description: 'Money Lender'},
  {min: 57, max: 57, description: 'Murderer'},
  {min: 58, max: 58, description: 'Musician'},
  {min: 59, max: 59, description: 'Mutant'},
  {min: 60, max: 60, description: 'Necromancer'},
  {min: 61, max: 61, description: 'Noble-born'},
  {min: 62, max: 62, description: 'Nomad'},
  {min: 63, max: 63, description: 'Outcast'},
  {min: 64, max: 64, description: 'Outlaw'},
  {min: 65, max: 65, description: 'Pauper'},
  {min: 66, max: 66, description: 'Peace-keeper'},
  {min: 67, max: 67, description: 'Performer'},
  {min: 68, max: 68, description: 'Pilot'},
  {min: 69, max: 69, description: 'Pirate'},
  {min: 70, max: 70, description: 'Preacher'},
  {min: 71, max: 71, description: 'Priest'},
  {min: 72, max: 72, description: 'Prostitute'},
  {min: 73, max: 73, description: 'Psychic'},
  {min: 74, max: 74, description: 'Rebel'},
  {min: 75, max: 75, description: 'Refugee'},
  {min: 76, max: 76, description: 'Royalty'},
  {min: 77, max: 77, description: 'Sage'},
  {min: 78, max: 78, description: 'Scholar'},
  {min: 79, max: 79, description: 'Scientist'},
  {min: 80, max: 80, description: 'Sergeant'},
  {min: 81, max: 81, description: 'Servant'},
  {min: 82, max: 82, description: 'Shaman'},
  {min: 83, max: 83, description: 'Shape Shifter'},
  {min: 84, max: 84, description: 'Shop Owner'},
  {min: 85, max: 85, description: 'Smuggler'},
  {min: 86, max: 86, description: 'Soldier'},
  {min: 87, max: 87, description: 'Sorcerer'},
  {min: 88, max: 88, description: 'Spectre'},
  {min: 89, max: 89, description: 'Student'},
  {min: 90, max: 90, description: 'Telepath'},
  {min: 91, max: 91, description: 'Thief'},
  {min: 92, max: 92, description: 'Trader'},
  {min: 93, max: 93, description: 'Tradesman'},
  {min: 94, max: 94, description: 'Tramp'},
  {min: 95, max: 95, description: 'Vet'},
  {min: 96, max: 96, description: 'Weapons Expert'},
  {min: 97, max: 97, description: 'Witch'},
  {min: 98, max: 98, description: 'Wizard'},
  {min: 99, max: 99, description: 'Wizard'},
  {min: 100, max: 100, description: 'Zealot'},
];

const focusA = [
  {min: 1, max: 1, description: 'Accept'},
  {min: 2, max: 2, description: 'Administer'},
  {min: 3, max: 3, description: 'Admire'},
  {min: 4, max: 4, description: 'Advise'},
  {min: 5, max: 5, description: 'Analyze'},
  {min: 6, max: 6, description: 'Attempt'},
  {min: 7, max: 7, description: 'Attempt'},
  {min: 8, max: 8, description: 'Balance'},
  {min: 9, max: 9, description: 'Battle'},
  {min: 10, max: 10, description: 'Bend'},
  {min: 11, max: 11, description: 'Boast'},
  {min: 12, max: 12, description: 'Break'},
  {min: 13, max: 13, description: 'Burn'},
  {min: 14, max: 14, description: 'Calculate'},
  {min: 15, max: 15, description: 'Cheat'},
  {min: 16, max: 16, description: 'Collect'},
  {min: 17, max: 17, description: 'Compare'},
  {min: 18, max: 18, description: 'Complete'},
  {min: 19, max: 19, description: 'Conjure'},
  {min: 20, max: 20, description: 'Conquer'},
  {min: 21, max: 21, description: 'Continue'},
  {min: 22, max: 22, description: 'Control'},
  {min: 23, max: 23, description: 'Create'},
  {min: 24, max: 24, description: 'Deceive'},
  {min: 25, max: 25, description: 'Delight'},
  {min: 26, max: 26, description: 'Deliver'},
  {min: 27, max: 27, description: 'Destroy'},
  {min: 28, max: 28, description: 'Discover'},
  {min: 29, max: 29, description: 'Divide'},
  {min: 30, max: 30, description: 'Dress'},
  {min: 31, max: 31, description: 'Encourage'},
  {min: 32, max: 32, description: 'Enjoy'},
  {min: 33, max: 33, description: 'Entertain'},
  {min: 34, max: 34, description: 'Examine'},
  {min: 35, max: 35, description: 'Expand'},
  {min: 36, max: 36, description: 'Explain'},
  {min: 37, max: 37, description: 'Fix'},
  {min: 38, max: 38, description: 'Fly'},
  {min: 39, max: 39, description: 'Fulfil'},
  {min: 40, max: 40, description: 'Guard'},
  {min: 41, max: 41, description: 'Guide'},
  {min: 42, max: 42, description: 'Handle'},
  {min: 43, max: 43, description: 'Help'},
  {min: 44, max: 44, description: 'Hope'},
  {min: 45, max: 45, description: 'Hover'},
  {min: 46, max: 46, description: 'Hunt'},
  {min: 47, max: 47, description: 'Inform'},
  {min: 48, max: 48, description: 'Inject'},
  {min: 49, max: 49, description: 'Invite'},
  {min: 50, max: 50, description: 'Learn'},
  {min: 51, max: 51, description: 'License'},
  {min: 52, max: 52, description: 'Listen'},
  {min: 53, max: 53, description: 'Live'},
  {min: 54, max: 54, description: 'Make'},
  {min: 55, max: 55, description: 'Memorize'},
  {min: 56, max: 56, description: 'Notice'},
  {min: 57, max: 57, description: 'Observe'},
  {min: 58, max: 58, description: 'Obtain'},
  {min: 59, max: 59, description: 'Order'},
  {min: 60, max: 60, description: 'Organize'},
  {min: 61, max: 61, description: 'Pedal'},
  {min: 62, max: 62, description: 'Pick'},
  {min: 63, max: 63, description: 'Plunder'},
  {min: 64, max: 64, description: 'Possess'},
  {min: 65, max: 65, description: 'Preserve'},
  {min: 66, max: 66, description: 'Pretend'},
  {min: 67, max: 67, description: 'Produce'},
  {min: 68, max: 68, description: 'Program'},
  {min: 69, max: 69, description: 'Provide'},
  {min: 70, max: 70, description: 'Punish'},
  {min: 71, max: 71, description: 'Pursue'},
  {min: 72, max: 72, description: 'Question'},
  {min: 73, max: 73, description: 'Realize'},
  {min: 74, max: 74, description: 'Reject'},
  {min: 75, max: 75, description: 'Save'},
  {min: 76, max: 76, description: 'Scatter'},
  {min: 77, max: 77, description: 'Seek'},
  {min: 78, max: 78, description: 'Settle'},
  {min: 79, max: 79, description: 'Smash'},
  {min: 80, max: 80, description: 'Spy'},
  {min: 81, max: 81, description: 'Steal'},
  {min: 82, max: 82, description: 'Strengthen'},
  {min: 83, max: 83, description: 'Support'},
  {min: 84, max: 84, description: 'Surround'},
  {min: 85, max: 85, description: 'Tame'},
  {min: 86, max: 86, description: 'Tempt'},
  {min: 87, max: 87, description: 'Terrify'},
  {min: 88, max: 88, description: 'Trace'},
  {min: 89, max: 89, description: 'Trade'},
  {min: 90, max: 90, description: 'Transport'},
  {min: 91, max: 91, description: 'Travel'},
  {min: 92, max: 92, description: 'Twist'},
  {min: 93, max: 93, description: 'Uncover'},
  {min: 94, max: 94, description: 'Unite'},
  {min: 95, max: 95, description: 'Wander'},
  {min: 96, max: 96, description: 'Warp'},
  {min: 97, max: 97, description: 'Waste'},
  {min: 98, max: 98, description: 'Watch'},
  {min: 99, max: 99, description: 'Welcome'},
  {min: 100, max: 100, description: 'Wreck'},
];

const focusB = [
  {min: 1, max: 1, description: 'Academia'},
  {min: 2, max: 2, description: 'Acceptance'},
  {min: 3, max: 3, description: 'Allies'},
  {min: 4, max: 4, description: 'Amusement'},
  {min: 5, max: 5, description: 'Anger'},
  {min: 6, max: 6, description: 'Art'},
  {min: 7, max: 7, description: 'Assistance'},
  {min: 8, max: 8, description: 'Authority'},
  {min: 9, max: 9, description: 'Beasts'},
  {min: 10, max: 10, description: 'Beauty'},
  {min: 11, max: 11, description: 'Cargo'},
  {min: 12, max: 12, description: 'Change'},
  {min: 13, max: 13, description: 'Charity'},
  {min: 14, max: 14, description: 'Children'},
  {min: 15, max: 15, description: 'Committee'},
  {min: 16, max: 16, description: 'Communications'},
  {min: 17, max: 17, description: 'Company'},
  {min: 18, max: 18, description: 'Competition'},
  {min: 19, max: 19, description: 'Confidence'},
  {min: 20, max: 20, description: 'Conspiracy'},
  {min: 21, max: 21, description: 'Contraband'},
  {min: 22, max: 22, description: 'Contract'},
  {min: 23, max: 23, description: 'Creation'},
  {min: 24, max: 24, description: 'Creatures'},
  {min: 25, max: 25, description: 'Cult'},
  {min: 26, max: 26, description: 'Debt'},
  {min: 27, max: 27, description: 'Delight'},
  {min: 28, max: 28, description: 'Diligence'},
  {min: 29, max: 29, description: 'Direction'},
  {min: 30, max: 30, description: 'Discovery'},
  {min: 31, max: 31, description: 'Distribution'},
  {min: 32, max: 32, description: 'Doubt'},
  {min: 33, max: 33, description: 'Drugs'},
  {min: 34, max: 34, description: 'Elite'},
  {min: 35, max: 35, description: 'Equipment'},
  {min: 36, max: 36, description: 'Existence'},
  {min: 37, max: 37, description: 'Failure'},
  {min: 38, max: 38, description: 'Faith'},
  {min: 39, max: 39, description: 'Fame'},
  {min: 40, max: 40, description: 'Family'},
  {min: 41, max: 41, description: 'Freedom'},
  {min: 42, max: 42, description: 'Friendship'},
  {min: 43, max: 43, description: 'Government'},
  {min: 44, max: 44, description: 'Greed'},
  {min: 45, max: 45, description: 'Growth'},
  {min: 46, max: 46, description: 'Happiness'},
  {min: 47, max: 47, description: 'Hardship'},
  {min: 48, max: 48, description: 'Harmony'},
  {min: 49, max: 49, description: 'Health'},
  {min: 50, max: 50, description: 'Humility'},
  {min: 51, max: 51, description: 'Industry'},
  {min: 52, max: 52, description: 'Injustice'},
  {min: 53, max: 53, description: 'Justice'},
  {min: 54, max: 54, description: 'Knowledge'},
  {min: 55, max: 55, description: 'Language'},
  {min: 56, max: 56, description: 'Law'},
  {min: 57, max: 57, description: 'Laziness'},
  {min: 58, max: 58, description: 'Liberation'},
  {min: 59, max: 59, description: 'Lies'},
  {min: 60, max: 60, description: 'Life'},
  {min: 61, max: 61, description: 'Love'},
  {min: 62, max: 62, description: 'Loyalty'},
  {min: 63, max: 63, description: 'Lust'},
  {min: 64, max: 64, description: 'Magic'},
  {min: 65, max: 65, description: 'Medicine'},
  {min: 66, max: 66, description: 'Meek'},
  {min: 67, max: 67, description: 'Modesty'},
  {min: 68, max: 68, description: 'Music'},
  {min: 69, max: 69, description: 'Myths'},
  {min: 70, max: 70, description: 'News'},
  {min: 71, max: 71, description: 'Notoriety'},
  {min: 72, max: 72, description: 'Optimism'},
  {min: 73, max: 73, description: 'Pain'},
  {min: 74, max: 74, description: 'Patience'},
  {min: 75, max: 75, description: 'Pleasure'},
  {min: 76, max: 76, description: 'Pride'},
  {min: 77, max: 77, description: 'Pride'},
  {min: 78, max: 78, description: 'Prosperity'},
  {min: 79, max: 79, description: 'Redemption'},
  {min: 80, max: 80, description: 'Regret'},
  {min: 81, max: 81, description: 'Religion'},
  {min: 82, max: 82, description: 'Representative'},
  {min: 83, max: 83, description: 'Resources'},
  {min: 84, max: 84, description: 'Revenge'},
  {min: 85, max: 85, description: 'Sensuality'},
  {min: 86, max: 86, description: 'Society'},
  {min: 87, max: 87, description: 'Strength'},
  {min: 88, max: 88, description: 'Submission'},
  {min: 89, max: 89, description: 'Success'},
  {min: 90, max: 90, description: 'Technology'},
  {min: 91, max: 91, description: 'Theories'},
  {min: 92, max: 92, description: 'Truth'},
  {min: 93, max: 93, description: 'Universe'},
  {min: 94, max: 94, description: 'Visions'},
  {min: 95, max: 95, description: 'Voyage'},
  {min: 96, max: 96, description: 'Weakness'},
  {min: 97, max: 97, description: 'Wealth'},
  {min: 98, max: 98, description: 'Weapons'},
  {min: 99, max: 99, description: 'Wellbeing'},
  {min: 100, max: 100, description: 'Worthy'},
];

const disposition = [
  {min: 1, max: 2, description: 'Shy'},
  {min: 3, max: 4, description: 'Aloof/Superior'},
  {min: 5, max: 8, description: 'Foolish/Idiotic'},
  {min: 9, max: 10, description: 'Cocky/Arrogant'},
  {min: 11, max: 12, description: 'Envious'},
  {min: 13, max: 14, description: 'Grumpy'},
  {min: 15, max: 16, description: 'Mischievous (good or evil)'},
  {min: 17, max: 20, description: 'Playful/Joking'},
  {min: 21, max: 22, description: 'Insane'},
  {min: 23, max: 24, description: 'Abrupt/Unpredictable'},
  {min: 25, max: 26, description: 'Melancholic/Airy'},
  {min: 27, max: 30, description: 'Romantic'},
  {min: 31, max: 32, description: 'Frustrated'},
  {min: 33, max: 34, description: 'Stressed'},
  {min: 35, max: 36, description: 'Weird'},
  {min: 37, max: 40, description: 'Serene/Peaceful'},
  {min: 41, max: 42, description: 'Cagy/Mysterious'},
  {min: 43, max: 44, description: 'Distracted'},
  {min: 45, max: 46, description: 'Sad'},
  {min: 47, max: 50, description: 'Single Minded'},
  {min: 51, max: 52, description: 'Angry'},
  {min: 53, max: 54, description: 'Blase'},
  {min: 55, max: 56, description: 'Joyous'},
  {min: 57, max: 60, description: 'Vengeful'},
  {min: 61, max: 62, description: 'Malicious'},
  {min: 63, max: 64, description: 'Afraid'},
  {min: 65, max: 66, description: 'Disgusted'},
  {min: 67, max: 70, description: 'Resignation'},
  {min: 71, max: 72, description: 'Nostalgic'},
  {min: 73, max: 74, description: 'Envious'},
  {min: 75, max: 76, description: 'Determined'},
  {min: 77, max: 80, description: 'Pity'},
  {min: 81, max: 82, description: 'Disdain'},
  {min: 83, max: 85, description: 'Hopelessness'},
  {min: 86, max: 88, description: 'Amused'},
  {min: 89, max: 92, description: 'Reckless'},
  {min: 93, max: 95, description: 'Lonely'},
  {min: 96, max: 98, description: 'Frivolous'},
  {min: 99, max: 100, description: 'Disoriented'},
];

const creatures = [
  {min: 1, max: 1, description: 'Humanoid'},
  {min: 2, max: 2, description: 'Automaton'},
  {min: 3, max: 3, description: 'Reptillian'},
  {min: 4, max: 4, description: 'Mammalian'},
  {min: 5, max: 5, description: 'Flying'},
  {min: 6, max: 6, description: 'Insect'},
  {min: 7, max: 7, description: 'Vaporous'},
  {min: 8, max: 8, description: 'Ooze/Slime'},
  {min: 9, max: 9, description: 'Mechanical'},
  {min: 10, max: 10, description: 'Plant'},
  {min: 11, max: 11, description: 'Arachnid'},
  {min: 12, max: 12, description: 'Hound'},
  {min: 13, max: 13, description: 'Undead'},
  {min: 14, max: 14, description: 'Ghost'},
  {min: 15, max: 15, description: 'Chimera'},
  {min: 16, max: 16, description: 'Golem'},
  {min: 17, max: 17, description: 'Liquid'},
  {min: 18, max: 18, description: 'Alien'},
  {min: 19, max: 19, description: 'Draconic'},
  {min: 20, max: 20, description: 'Elemental'},
];

const motivations = [
  {min: 1, max: 1, description: 'Destruction'},
  {min: 2, max: 2, description: 'Defense'},
  {min: 3, max: 3, description: 'Curiosity'},
  {min: 4, max: 4, description: 'Hungers for flesh'},
  {min: 5, max: 5, description: 'Craves blood'},
  {min: 6, max: 6, description: 'Feeds on life-force'},
  {min: 7, max: 7, description: 'Consumes brainwaves'},
  {min: 8, max: 8, description: 'Inexplicable'},
  {min: 9, max: 9, description: 'Requires host for reproduction'},
  {min: 10, max: 10, description: 'Live flesh'},
  {min: 11, max: 11, description: 'Feeds on fear'},
  {min: 12, max: 12, description: 'Collects skulls'},
  {min: 13, max: 13, description: 'Hatred'},
  {min: 14, max: 14, description: 'Territorial'},
  {min: 15, max: 15, description: 'Protection'},
  {min: 16, max: 16, description: 'Human organs'},
  {min: 17, max: 17, description: 'Exploration'},
  {min: 18, max: 18, description: 'Survival'},
  {min: 19, max: 19, description: 'Self modification'},
  {min: 20, max: 20, description: 'Mind controlled'},
];

const loot = [
  {min: 1, max: 1, description: getAndPrintRandomCyphers()},
  {min: 2, max: 2, description: 'Artifact/Oddity'},
  {
    min: 3,
    max: 3,
    description: `${new DiceRoll('1d4').total} inexpensive items`,
  },
  {
    min: 4,
    max: 4,
    description: `${new DiceRoll('1d6').total} inexpensive items`,
  },
  {min: 5, max: 5, description: `${new DiceRoll('1d4').total} moderate items`},
  {min: 6, max: 6, description: `${new DiceRoll('1d6').total} moderate items`},
  {min: 7, max: 7, description: `${new DiceRoll('1d4').total} expensive items`},
  {min: 8, max: 8, description: getAndPrintRandomCyphers()},
];

module.exports = {
  descriptors,
  types,
  focusA,
  focusB,
  disposition,
  creatures,
  motivations,
  loot,
};
