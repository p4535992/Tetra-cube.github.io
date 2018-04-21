var availableBooks = [ 'EE', 'SCAG', 'VGtM', 'MR', 'XGtE', 'DMG', 'Other', 'Unofficial', 'UA' ];

var bookNames = 
{
	'PHB' : 'Player\'s Handbook',
	'EE' : 'Elemental Evil Player\'s Companion',
	'SCAG' : 'Sword Coast Adventurer\'s Guide',
	'VGtM' : 'Volo\'s Guide to Monsters',
	'MR' : 'Volo\'s Guide (Monstrous Races)',
	'XGtE' : 'Xanathar\'s Guide to Everything',
	'DMG' : 'Dungeon Master\'s Guide',
	'Other' : 'Other Content',
	'UA' : 'Unearthed Arcana',
	'Unofficial' : 'Unofficial Content'
}

var genders = ['Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Female', 'Female', 'Female', 'Nonbinary or Unknown' ];

var races =
[
	{
		'_special' : 'book-PHB',
		'_name' : 'Dragonborn',
		'Subraces and Variants' :
		{
			'Draconic Ancestry' : [ 'Black', 'Blue', 'Brass', 'Bronze', 'Copper', 'Gold', 'Green', 'Red', 'Silver', 'White' ]
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength score increases by 2, and your Charisma score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Breath Weapon' : 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can\'t use it again until you complete a short or long rest.',
			'Damage Resistance' : 'You have resistance to the damage type associated with your draconic ancestry.',
			'Languages' : 'You can speak, read, and write Common and Draconic.',
			'Ancestry Traits' :
			{
				'_special' : 'draconicancestry',
				'Black' :
				{
					'Damage' : 'Acid',
					'Breath Weapon' : '5 by 30 ft. line (Dex. save)'
				},
				'Blue' :
				{
					'Damage' : 'Lightning',
					'Breath Weapon' : '5 by 30 ft. line (Dex. save)'
				},
				'Brass' :
				{
					'Damage' : 'Fire',
					'Breath Weapon' : '5 by 30 ft. line (Dex. save)'
				},
				'Bronze' :
				{
					'Damage' : 'Lightning',
					'Breath Weapon' : '5 by 30 ft. line (Dex. save)'
				},
				'Copper' :
				{
					'Damage' : 'Acid',
					'Breath Weapon' : '5 by 30 ft. line (Dex. save)'
				},
				'Gold' :
				{
					'Damage' : 'Fire',
					'Breath Weapon' : '15 ft. cone (Dex. save)'
				},
				'Green' :
				{
					'Damage' : 'Poison',
					'Breath Weapon' : '15 ft. cone (Con. save)'
				},
				'Red' :
				{
					'Damage' : 'Fire',
					'Breath Weapon' : '15 ft. cone (Dex. save)'
				},
				'Silver' :
				{
					'Damage' : 'Cold',
					'Breath Weapon' : '15 ft. cone (Con. save)'
				},
				'White' :
				{
					'Damage' : 'Cold',
					'Breath Weapon' : '15 ft. cone  (Con. save)'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 8,
			'maxage' : 50,
			'baseheight' : 66,
			'heightmod' : '2d8',
			'baseweight' : 175,
			'weightmod' : '2d6',
			'other' : 
			{
				'Eyes' : [ 'Red', 'Gold' ],
				'Scales' : 'See Ancestry'
			}
		},
		'Childhood Nickname' : 
		{
			'_special' : 'dragonbornnickname',
			'_array' : [ 'Climber', 'Earbender', 'Leaper', 'Pious', 'Shieldbiter', 'Zealous' ]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Dwarf',
		'Subraces and Variants' : 
		{
			'Subrace' :
			{
				'_special' : 'booksort',
				'PHB' : [ 'Hill Dwarf', 'Mountain Dwarf' ],
				'SCAG' : [ 'Duergar' ]
			}
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Constitution score increases by 2.',
			'Size' : 'Medium',
			'Speed' : '25 feet. Your speed is not reduced by wearing heavy armor.',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Dwarven Resilience' : 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
			'Dwarven Combat Training' : 'You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.',
			'Tool Proficiency' : 'You gain proficiency with the Artisan\'s tools of your choice: smith\'s tools, brewer\'s supplies, or mason\'s tools.',
			'Stonecunning' : 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
			'Languages' : 'You can speak, read, and write Common and Dwarvish.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'Hill Dwarf' :
				{
					'Ability Score Increase' : 'Your Wisdom score increases by 1.',
					'Dwarven Toughness' : 'Your hit point maximum increases by 1, and it increases by 1  every time you gain a level.'
				},
				'Mountain Dwarf' :
				{
					'Ability Score Increase' : 'Your Strength score increases by 2.',
					'Dwarven Armor Training' : 'You have proficiency with light and medium armor.'
				},
				'Duergar' :
				{
					'_special' : 'book-SCAG',
					'Ability Score Increase' : 'Your Strength score increases by 1.',
					'Superior Darkvision' : 'Your darkvision has a radius of 120 feet.',
					'Extra Language' : 'You can speak, read, and write Undercommon.',
					'Duergar Resilience' : 'You have advantage on saving throws against illusions and against being charmed or paralyzed.',
					'Duergar Magic' : 'When you reach 3rd level, you can cast the enlarge/reduce spell on yourself once with this trait, using only the spell\'s enlarge option. When you reach 5th level, you can cast the invisibility spell on your self once with this trait. You don\'t need material components for either spell, and you can\'t cast them while you\'re in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spell casting ability for these spells.',
					'Sunlight Sensitivity' : 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'subracephyssort',
			'Hill Dwarf' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 300,
				'baseheight' : 44,
				'heightmod' : '2d4',
				'baseweight' : 115,
				'weightmod' : '2d6',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Hazel' ],
					'Skin' : [ 'Pale (red-tinged)', 'Fair (red-tinged)', 'Light Brown', 'Brown', 'Dark Brown' ],
					'Hair' : [ 'Black', 'Brown', 'Red', 'Reddish-brown' ]
				}
			},
			'Mountain Dwarf' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 300,
				'baseheight' : 48,
				'heightmod' : '2d4',
				'baseweight' : 130,
				'weightmod' : '2d6',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Hazel' ],
					'Skin' : [ 'Pale (red-tinged)', 'Fair (red-tinged)', 'Light Brown', 'Brown', 'Dark Brown' ],
					'Hair' : [ 'Black', 'Brown', 'Red', 'Reddish-brown' ]
				}
			},
			'Duergar' : 
			{
				'_special' : 'book-SCAG characteristics',
				'minage' : 13,
				'maxage' : 200,
				'baseheight' : 46,
				'heightmod' : '2d4',
				'baseweight' : 130,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Black' ],
					'Skin' : [ 'Gray' ],
					'Hair' : [ 'Bald', 'Bald', 'Bald', 'Gray' ]
				}
			}
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Elf',
		'Subraces and Variants' : 
		{
			'Subrace' :
			{
				'_special' : 'booksort',
				'PHB' : [ 'High Elf', 'Wood Elf', 'Drow' ],
				'DMG' : [ 'Eladrin (DMG version)' ],
				'UA' : [ 'Eladrin (UA version)', 'Avariel', 'Grugach', 'Sea Elf', 'Shadar-kai' ]
			}
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it  were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Keen Senses' : 'You have proficiency in the Perception skill.',
			'Fey Ancestry' : 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
			'Trance' : 'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
			'Languages' : 'You can speak, read, and write Common and Elvish.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'High Elf' :
				{
					'Ability Score Increase' : 'Your Intelligence score increases by 1.',
					'Elf Weapon Training' : 'You have proficiency with the longsword, shortsword, shortbow, and longbow.'
				},
				'Wood Elf' :
				{
					'Ability Score Increase' : 'Your Wisdom score increases by 1',
					'Elf Weapon Training' : 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
					'Fleet of Foot' : 'Your base walking speed increases to 35 feet',
					'Mask of the Wild' : 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
				},
				'Drow' :
				{
					'Ability Score Increase' : 'Your Charisma score increases by 1.',
					'Superior Darkvision' : 'Your darkvision has a radius of 120 feet.',
					'Sunlight Sensitivity' : 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
					'Drow Magic' : 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie firespell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.',
					'Drow Weapon Training' : 'You have proficiency with rapiers, shortswords, and hand crossbows.'
				},
				'Eladrin (DMG version)' :
				{
					'_special' : 'book-DMG',
					'Ability Score Increase' : 'Your Intelligence score increases by 1',
					'Elf Weapon Training' : 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
					'Fey Step' : 'You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest.'
				},
				'Eladrin (UA version)' :
				{
					'_special' : 'book-UA',
					'Ability Score Increase' : 'Your Intelligence or Charisma score increases by 1 (your choice).',
					'Fey Step' : 'As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can\'t do so again until you finish a short or long rest.',
					'Shifting Seasons' : 'At the end of each short or long rest, you can align yourself with the magic of one season, regardless of the season that is dominating your personality. Doing so allows you to cast a certain cantrip (Autumn: Friends, Winter: Chill touch, Spring: Minor illusion, Summer: Fire bolt). When you align yourself with a season\'s magic, you lose the cantrip associated with the previous season and gain the cantrip associated with the new season. Your spellcasting ability for these cantrips is Intelligence or Charisma, whichever is higher.'
				},
				'Avariel' :
				{
					'_special' : 'book-UA',
					'Flight' : 'You have a flying speed of 30 feet. To use this speed, you can\'t be wearing medium or heavy armor.',
					'Languages' : 'You can speak, read, and write Auran.'
				},
				'Grugach' :
				{
					'_special' : 'book-UA',
					'Ability Score Increase' : 'Your Strength score increases by 1.',
					'Grugach Weapon Training' : 'You have proficiency with the spear, shortbow, longbow, and net.',
					'Cantrip' : 'You know one cantrip of your choice from the druid spell list. Wisdom is your spellcasting ability for it.',
					'Languages' : 'Unlike other elves, you don\'t speak, read, or write Common. You instead speak, read, and write Sylvan.'
				},
				'Sea Elf' :
				{
					'_special' : 'book-UA',
					'Ability Score Increase' : 'Your Constitution  score increases by 1',
					'Sea Elf Weapon Training' : 'You have proficiency with the spear, trident, light crossbow, and net.',
					'Child of the Sea' : 'You have a swimming speed of 30 feet, and you can breathe air and water.',
					'Friend of the Sea' : 'Using gestures and sounds, you can communicate simple ideas with Small or smaller beasts that have an inborn swimming speed.',
					'Languages' : 'You can speak, read, and write Aquan.'
				},
				'Shadar-kai' :
				{
					'_special' : 'book-UA',
					'Ability Score Increase' : 'Your Charisma score increases by 1.',
					'Cantrip' : 'You know one of the following cantrips of your choice: chill touch, spare the dying, or thaumaturgy. Charisma is your spellcasting ability for it.',
					'Blessing of the Raven Queen' : 'As a bonus action, you can magically teleport up to 15 feet to an unoccupied space you can see, and you gain resistance to all damage until the start of your next turn. During that time, you appear ghostly and translucent. Once you use this ability, you can\'t use it again until you finish a short or long rest.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'subracephyssort',
			'High Elf' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 500,
				'baseheight' : 54,
				'heightmod' : '2d10',
				'baseweight' : 90,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Silver', 'Gold', 'Black', 'Gold-flecked Blue', 'Gold-flecked Green' ],
					'Skin' : [ 'Bronze', 'Alabaster', 'Blue-Tinged Alabaster' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Silver-white', 'Blue', 'Copper' ]
				}
			},
			'Wood Elf' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 500,
				'baseheight' : 54,
				'heightmod' : '2d10',
				'baseweight' : 100,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Green', 'Hazel' ],
					'Skin' : [ 'Light Copper', 'Copper', 'Dark Copper', 'Greenish-copper' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Copper' ]
				}
			},
			'Drow' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 500,
				'baseheight' : 53,
				'heightmod' : '2d6',
				'baseweight' : 75,
				'weightmod' : '1d6',
				'other' : 
				{
					'Eyes' : [ 'Pale Lilac', 'Pale Silver', 'Pale Pink', 'Pale Red', 'Pale Blue' ],
					'Skin' : [ 'Obsidian Black' ],
					'Hair' : [ 'White', 'Pale Yellow' ]
				}
			},
			'Eladrin (DMG version)' : 
			{
				'_special' : 'book-DMG characteristics',
				'minage' : 13,
				'maxage' : 600,
				'baseheight' : 54,
				'heightmod' : '2d12',
				'baseweight' : 90,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Blue', 'Violet', 'Green' ],
					'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown' ],
					'Hair' : [ 'White', 'Silver', 'Pale Gold' ]
				}
			},
			'Eladrin (UA version)' : 
			{
				'_special' : 'book-UA characteristics',
				'minage' : 13,
				'maxage' : 600,
				'baseheight' : 54,
				'heightmod' : '2d12',
				'baseweight' : 90,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Blue', 'Violet', 'Green' ],
					'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown' ],
					'Hair' : [ 'White', 'Silver', 'Pale Gold' ]
				}
			},
			'Avariel' : 
			{
				'_special' : 'book-UA characteristics',
				'minage' : 13,
				'maxage' : 500,
				'baseheight' : 56,
				'heightmod' : '2d10',
				'baseweight' : 90,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Blue', 'Green', 'Purple' ],
					'Skin' : [ 'White', 'Pale' ],
					'Hair' : [ 'Silver-white', 'Black' ],
					'Wing Color' : [ 'White', 'White', 'White', 'Black', 'Brown', 'Speckled' ]
				}
			},
			'Grugach' : 
			{
				'_special' : 'book-UA characteristics',
				'minage' : 13,
				'maxage' : 500,
				'baseheight' : 53,
				'heightmod' : '2d6',
				'baseweight' : 75,
				'weightmod' : '1d6',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Green', 'Hazel' ],
					'Skin' : [ 'Light Copper', 'Copper', 'Dark Copper', 'Greenish-copper' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Copper' ]
				}
			},
			'Sea Elf' : 
			{
				'_special' : 'book-UA characteristics',
				'minage' : 13,
				'maxage' : 500,
				'baseheight' : 54,
				'heightmod' : '2d8',
				'baseweight' : 90,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Blue', 'Gold', 'White-Silver' ],
					'Skin' : [ 'Deep Green with brown stripes', 'Blue with white stripes' ],
					'Hair' : [ 'Blue', 'Black', 'Silver', 'Red' ]
				}
			},
			'Shadar-kai' : 
			{
				'_special' : 'book-UA characteristics',
				'minage' : 13,
				'maxage' : 500,
				'baseheight' : 56,
				'heightmod' : '2d8',
				'baseweight' : 90,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Black' ],
					'Skin' : [ 'Alabaster', 'Light Gray', 'Gray', 'Dark Gray' ],
					'Hair' : [ 'Gray', 'Black' ]
				}
			}
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Gnome',
		'Subraces and Variants' : 
		{
			'Subrace' :
			{
				'_special' : 'booksort',
				'PHB' : [ 'Forest Gnome', 'Rock Gnome' ],
				'EE/SCAG' : [ 'Deep Gnome' ]
			}
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Intelligence score increases by 2.',
			'Size' : 'Small',
			'Speed' : '25 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Gnome Cunning' : 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
			'Languages' : 'You can speak, read, and write Common and Gnomish.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'Forest Gnome' :
				{
					'Ability Score Increase' : 'Your Dexterity score increases by 1.',
					'Natural Illusionist' : 'You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.',
					'Speak with Small Beasts' : 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.'
				},
				'Rock Gnome' :
				{
					'Ability Score Increase' : 'Your Constitution score increases by 1.',
					'Artificer\'s Lore' : 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.',
					'Tinker' :
					{
						'_Note' : 'You have proficiency with artisan\'s tools (tinker\'s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:',
						'Clockwork Toy' : 'This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.',
						'Fire Starter' : 'The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.',
						'Music Box' : 'When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song\'s end or when it is closed.'
					}
				},
				'Deep Gnome' :
				{
					'_special' : 'book-EE/SCAG',
					'Ability Score Increase' : 'Your Dexterity score increases by 1.',
					'Superior Darkvision' : 'Your darkvision has a radius of 120 feet.',
					'Stone Camouflage' : 'You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.',
					'Extra Language' : 'You can speak, read, and write Undercommon.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'subracephyssort',
			'Forest Gnome' :
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 350,
				'baseheight' : 35,
				'heightmod' : '2d4',
				'baseweight' : 35,
				'weightmod' : '1',
				'other' : 
				{
					'Eyes' : [ 'Glittering Black', 'Glittering Blue' ],
					'Skin' : [ 'Ruddy Tan', 'Woody Brown', 'Rocky Gray' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White' ]
				}
			},
			'Rock Gnome' :
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 350,
				'baseheight' : 35,
				'heightmod' : '2d4',
				'baseweight' : 35,
				'weightmod' : '1',
				'other' : 
				{
					'Eyes' : [ 'Glittering Black', 'Glittering Blue' ],
					'Skin' : [ 'Ruddy Tan', 'Woody Brown', 'Rocky Gray' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White' ]
				}
			},
			'Deep Gnome' :
			{
				'_special' : 'book-EE/SCAG characteristics',
				'minage' : 13,
				'maxage' : 150,
				'baseheight' : 35,
				'heightmod' : '2d4',
				'baseweight' : 90,
				'weightmod' : '1d6',
				'other' : 
				{
					'Eyes' : [ 'Gray', 'Black' ],
					'Skin' : [ 'Gray', 'Brown', 'Dun' ],
					'Hair' :
					{
						'_special' : 'gendersort',
						'Male' : [ 'Bald' ],
						'Female' : [ 'Gray' ]
					}
				}
			}
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Halfling',
		'Subraces and Variants' : 
		{
			'Subrace' :
			{
				'_special' : 'booksort',
				'PHB' : [ 'Lightfoot Halfling', 'Stout Halfling' ],
				'SCAG' : [ 'Ghostwise Halfling' ]
			}
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2.',
			'Size' : 'Small',
			'Speed' : '25 feet',
			'Lucky' : 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
			'Brave' : 'You have advantage on saving throws against being frightened.',
			'Halfling Nimbleness' : 'You can move through the space of any creature that is of a size larger than yours.',
			'Languages' : 'You can speak, read, and write Common and Halfling.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'Lightfoot Halfling' :
				{
					'Ability Score Increase' : 'Your Charisma score increases by 1',
					'Naturally Stealthy' : 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
				},
				'Stout Halfling' :
				{
					'Ability Score Increase' : 'Your Constitution score increases by 1.',
					'Stout Resilience' : 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
				},
				'Ghostwise Halfling' :
				{
					'_special' : 'book-SCAG',
					'Ability Score Increase' : 'Your Wisdom score increases by 1.',
					'Silent Speech' : 'You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 150,
			'baseheight' : 31,
			'heightmod' : '2d4',
			'baseweight' : 35,
			'weightmod' : '1',
			'other' : 
			{
				'Eyes' : [ 'Brown', 'Hazel' ],
				'Skin' : [ 'Ruddy-cast pale', 'Ruddy-cast fair', 'Tan' ],
				'Hair' : [ 'Brown', 'Sandy Brown' ]
			}
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Half-Elf',
		'Subraces and Variants' : 
		{
			'Elven Ancestry' : [ 'Wood Elf', 'High Elf', 'Drow', 'Aquatic Elf' ],
			'Human Heritage' : { '_special' : 'halfethnicity' }
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Fey Ancestry' : 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
			'Skill Versatility' : 'You gain proficiency in two skills of your choice.',
			'Languages' : 'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
			'Variant Traits' :
			{
				'_special' : 'book-SCAG halfelfvarianttraits',
				'_list' :
				{
					'_any' :
					{
						'_Note' : 'You can replace Skill Versatility with any trait listed below: ',
						'Keen Senses' : 'You have proficiency in the Perception skill.'
					},
					'Wood Elf' :
					{
						'Elf Weapon Training' : 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
						'Fleet of Foot' : 'Your base walking speed increases to 35 feet.',
						'Mask of the Wild' : 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
					},
					'High Elf' :
					{
						'Elf Weapon Training' : 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
						'Cantrip' : 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
					},
					'Drow' :
					{
						'Drow Magic' : 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.'
					},
					'Aquatic Elf' :
					{
						'Aquatic Elf Swimming' : 'A half-elf of aquatic heritage can choose a swimming speed of 30 feet.' 
					}
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'halfelfvariantphys',
			'Wood Elf' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 180,
				'baseheight' : 57,
				'heightmod' : '2d8',
				'baseweight' : 110,
				'weightmod' : '2d4',							
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Hazel', 'Green', 'Blue', 'Gray' ],
					'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown', 'Light Copper', 'Copper', 'Dark Copper', 'Greenish-copper' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White', 'Copper' ]
				}
			},
			'High Elf' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 180,
				'baseheight' : 57,
				'heightmod' : '2d8',
				'baseweight' : 110,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Hazel', 'Green', 'Blue', 'Gray', 'Silver', 'Gold', 'Black', 'Gold-flecked Blue', 'Gold-flecked Green' ],
					'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown', 'Bronze', 'Alabaster', 'Blue-Tinged Alabaster' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White' ]
				}
			},
			'Drow' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 180,
				'baseheight' : 57,
				'heightmod' : '2d8',
				'baseweight' : 110,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Hazel', 'Green', 'Blue', 'Gray', 'Pale Lilac', 'Pale Silver', 'Pale Pink', 'Pale Red', 'Pale Blue' ],
					'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown', 'Obsidian Black' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray', 'White', 'Pale Yellow' ]
				}
			},
			'Aquatic Elf' :
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 180,
				'baseheight' : 57,
				'heightmod' : '2d8',
				'baseweight' : 110,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Hazel', 'Green', 'Blue', 'Gray', 'Gold', 'White-Silver' ],
					'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown', 'Deep Green with brown stripes', 'Blue with white stripes' ],
					'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White', 'Blue', 'Silver' ]
				}
			}
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Half-Orc',
		'Subraces and Variants' : 
		{
			'_special' : 'halforcsubraces',
			'Human Heritage' : { '_special' : 'halfethnicity' }
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength score increases by 2, and your Constitution score increases by 1',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Menacing' : 'You gain proficiency in the Intimidation skill',
			'Relentless Endurance' : 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can\'t use this feature again until you finish a long rest.',
			'Savage Attacks' : 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon\'s damage dice one additional time and add it to the extra damage of the critical hit',
			'Languages' : 'You can speak, read, and write Common and Orc.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 10,
			'maxage' : 55,
			'baseheight' : 58,
			'heightmod' : '2d10',
			'baseweight' : 140,
			'weightmod' : '2d6',
			'other' : 
			{
				'Eyes' : [ 'Red', 'Gray' ],
				'Skin' : [ 'Gray', 'Greenish-gray', 'Purplish-gray', 'Bluish-gray' ],
				'Hair' : [ 'Black', 'Dark Brown', 'Gray/White' ]
			}
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Human',
		'Subraces and Variants' : 
		{
			'Ethnicity' :
			{
				'_special' : 'humanethnicity',
				'PHB' : [ 'Calishite', 'Chondathan', 'Damaran', 'Illuskan', 'Mulan', 'Rashemi', 'Shou', 'Tethyrian', 'Turami' ],
				'SCAG' : [ 'Arkaiun', 'Bedine', 'Ffolk', 'Gur', 'Halruaan', 'Imaskari', 'Nar', 'Shaaran', 'Tuigan', 'Ulutiun' ],
				'Real' : [ 'Arabic', 'Celtic', 'Chinese', 'Egyptian', 'English', 'French', 'German', 'Greek', 'Indian', 'Japanese', 'Mesoamerican', 'Niger-Congo', 'Norse', 'Polynesian', 'Roman', 'Slavic', 'Spanish' ]
			}
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your ability scores each increase by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Languages' : 'You can speak, read, and write Common and one extra language of your choice.',
			'Variant Human Traits' :
			{
				'_Note' : 'You can replace the standard Ability Score Increase with all three of these traits:',
				'Ability Score Increase' : 'Two different ability scores of your choice increase by 1.',
				'Skills' : 'You gain proficiency in one skill of your choice.',
				'Feat' : 'You gain one feat of your choice.'
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 60,
			'baseheight' : 56,
			'heightmod' : '2d10',
			'baseweight' : 110,
			'weightmod' : '2d4',
			'other' : 
			{
				'Eyes' : [ 'Brown', 'Hazel', 'Green', 'Blue', 'Gray' ],
				'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown' ],
				'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White' ]
			}
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Tiefling',
		'Subraces and Variants' :
		{
			'Subrace' :
			{
				'_special' : 'booksort',
				'PHB' : [ 'Asmodeous Tiefling' ],
				'UA' : [ 'Abyssal Tiefling', 'Baalzebul Tiefling', 'Dispater Tiefling', 'Fierna Tiefling', 'Glasya Tiefling', 'Levistus Tiefling', 'Mammon Tiefling', 'Mephistopheles Tiefling', 'Zariel Tiefling' ]
			},
			'Variant' :
			{
				'_special' : 'book-SCAG tieflingvarianttype',
				'_array' : [ '_none', 'Devil\'s Tongue', 'Hellfire', 'Winged', 'Feral', 'Feral, Devil\'s Tongue', 'Feral, Hellfire', 'Feral, Winged' ]
			},
			'Human Heritage' : { '_special' : 'halfethnicity' }
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Intelligence score increases by 1, and your Charisma score increases by 2',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Hellish Resistance' : 'You have resistance to fire damage.',
			'Infernal Legacy' : 'You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd-level spell. Once you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.',
			'Languages' : 'You can speak, read, and write Common and Infernal.',
			'Subrace Traits' :
			{
				'_special' : 'book-UA subracetraitsort',
				'Asmodeous Tiefling' : 'Standard Tiefling traits.',
				'Abyssal Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase, Hellish Resistance, Infernal Legacy, and ability to speak Infernal from the tiefling racial traits.',
					'Ability Score Increase' : 'Your Constitution score increases by 1, and your Charisma score increases by 2',
					'Abyssal Arcana' : 'Each time you finish a long rest, you gain the ability to cast cantrips and spells randomly determined from a short list. At 1st level, you can cast a cantrip. When you reach 3rd level, you can also casta 1st-level spell. At 5th level, you can cast a 2nd‑level spell. You can cast a spell gained from this trait only once until you complete your next long rest. You can cast a cantrip gained from this trait at will, as normal. For 1st‑level spells whose effect changes if cast using a spell slot of 2nd level or higher, you cast the spell as if using a 2nd‑level slot. Spells of 2nd level are cast as if using a 2nd-level slot. At the end of each long rest, you lose the cantrips and spells previously granted by this feature, even if you did not cast them. You replace those cantrips and spells by rolling for new ones on the Abyssal Arcana Spells table. Roll separately for each cantrip and spell. If you roll the same spell or cantrip you gained at the end of your previous long rest, roll again until you get a different result.',
					'Abyssal Arcana Spells' :
					{
						'1st level' : '1: Dancing Lights, 2: True Strike, 3: Light, 4: Message, 5: Spare the Dying, 6: Prestidigitation',
						'3rd level' : '1: Burning Hands, 2: Charm Person, 3: Magic Missile, 4: Cure Wounds, 5: Tasha\'s Hideous Laughter, 6: Thunderwave',
						'5th level' : '1: Alter Self, 2: Darkness, 3: Invisibility, 4: Levitate, 5: Mirror Image, 6: Spider Climb'
					},
					'Abyssal Fortitude' : 'Your hit point maximum increases by half your level (minimum 1)',
					'Languages' : 'You can speak, read, and write Abyssal.'
				},
				'Baalzebul Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase' : 'Your Charisma score increases by 2, and your Intelligence score increases by 1.',
					'Legacy of Maladomini' : 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the ray of sickness spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the crown of madness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
				},
				'Dispater Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase' : 'Your Charisma score increases by 2, and your Dexterity score increases by 1',
					'Legacy of Dis' : 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the invisibility spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
				},
				'Fierna Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase' : 'Your Charisma score increases by 2, and your Wisdom score increases by 1.',
					'Legacy of Phlegethos' : 'You know the friends cantrip. When you reach 3rd level, you can cast the charm person spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
				},
				'Glasya Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase' : 'Your Charisma score increases by 2, and your Dexterity score increases by 1.',
					'Legacy of Malbolge' : 'You know the minor illusion cantrip. When you reach 3rd level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the invisibility spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
				},
				'Levistus Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase' : 'Your Charisma score increases by 2, and your Constitution score increases by 1.',
					'Legacy of Stygia' : 'You know the ray of frost cantrip. When you reach 3rd level, you can cast the armor of Agathys spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
				},
				'Mammon Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase.' : 'Your Charisma score increases by 2, and your Intelligence score increases by 1.',
					'Legacy of Minauros' : 'You know the mage hand cantrip. When you reach 3rd level, you can cast the Tenser\'s floating disk spell once with this trait and regain the ability to do so when you finish a short or long rest. When you reach 5th level, you can cast the arcane lock spell once with this trait, requiring no material component, and regain the ability to do so when you finish a long rest.'
				},
				'Mephistopheles Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase' : 'Your Charisma score increases by 2, and your Intelligence score increases by 1.',
					'Legacy of Cania' : 'You know the mage handcantrip. When you reach 3rd level, you can cast the magic missile spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the web spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
				},
				'Zariel Tiefling' :
				{
					'_Note' : 'You lose the Ability Score Increase and Infernal Legacy tiefling racial traits.',
					'Ability Score Increase' : 'Your Charisma score increases by 2, and your Strength score increases by 1.',
					'Legacy of Avernus' : 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the searing smite spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the branding smite spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
				}
			},
			'Variant Traits' :
			{
				'_special' : 'book-SCAG tieflingvarianttraits',
				'_list' : 
				{
					'Feral' : 'Your Intelligence score increases by l , and your Dexterity score increases by 2. This trait replaces the Ability Score Increase trait.',
					'Devil\'s Tongue' : 'You know the vicious mockery cantrip. When you reach 3rd level, you can cast the charm person spell as a 2nd-level spell once with this trait. When you reach 5th level, you can cast the enthrall spell once with this trait. You must finish a long rest to cast these spells once again with this trait. Charisma is your spellcasting ability for them. This trait replaces the Infernal Legacy trait.',
					'Hellfire' : 'Once you reach 3rd level, you can cast the burning hands spell once per day as a 2nd-level spell. This trait replaces the hellish rebuke spell of the Infernal Legacy trait.',
					'Winged' : 'You have bat-like wings sprouting from your shoulder blades. You have a flying speed of 30 feet. This trait replaces the Infernal Legacy trait.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 65,
			'baseheight' : 57,
			'heightmod' : '2d8',
			'baseweight' : 110,
			'weightmod' : '2d4',
			'other' : 
			{
				'Eyes' : [ 'Black', 'Red', 'White', 'Silver', 'Gold' ],
				'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown', 'Light Red', 'Red', 'Dark Red', 'Light Red', 'Red', 'Dark Red' ],
				'Hair' : [ 'Black', 'Brown', 'Dark Red', 'Dark Blue', 'Dark Purple' ],
				'Horns' : [ 'Ram', 'Gazelle', 'Antelope', 'Bull', 'Ibex', 'Bison', 'One Broken' ],
				'Other Traits' :
				{
					'_special' : 'tieflingappearance',
					'_array' : [ 'Small horns', 'Fangs or sharp teeth', 'Forked tongue', 'Catlike eyes', 'Six fingers on each hand', 'Goat-like legs', 'Cloven hooves', 'Forked tail', 'Leathery or scaly skin', 'Red or dark blue skin', 'Cast no shadow or reflection', 'Exude a smell of brimstone' ]
				}
			}
		}
	},
	{
		'_special' : 'book-EE',
		'_name' : 'Aarakocra',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2, and your Wisdom score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '25 feet',
			'Flight' : 'You have a flying speed of 50 feet. To use this speed, you can\'t be wearing medium or heavy armor.',
			'Talons' : 'You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.',
			'Language' : 'You can speak, read, and write Common, Aarakocra, and Auran.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 3,
			'maxage' : 20,
			'baseheight' : 48,
			'heightmod' : '2d10',
			'baseweight' : 65,
			'weightmod' : '1d4',
			'other' :
			{
				'Eyes' : [ "Black" ],
				'Plumage' : 
				{
					'_special' : 'gendersort',
					'Male' : ['Red', 'Orange', 'Yellow'],
					'Female' : ['Brown', 'Gray']
				}
			}
		}
	},
	{
		'_special' : 'book-EE',
		'_name' : 'Genasi',
		'Subraces and Variants' : 
		{
			'Subrace' : [ 'Air Genasi', 'Earth Genasi', 'Fire Genasi', 'Water Genasi' ],
			'Human Heritage' : { '_special' : 'halfethnicity' }
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Constitution score increases by 2.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Languages' : 'You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'Air Genasi' :
				{
					'Ability Score Increase' : 'Your Dexterity score increases by 1.',
					'Unending Breath' : 'You can hold your breath indefinitely while you\'re not incapacitated.',
					'Mingle with the Wind' : 'You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.'
				},
				'Earth Genasi' :
				{
					'Ability Score Increase' : 'Your Strength score increases by 1.',
					'Earth Walk' : 'You can move across difficult terrain made of earth or stone without expending extra movement.',
					'Merge with Stone' : 'You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.'
				},
				'Fire Genasi' :
				{
					'Ability Score Increase' : 'Your Intelligence score increases by 1.',
					'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red.',
					'Fire Resistance' : 'You have resistance to fire damage.',
					'Reach to the Blaze' : 'You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.'
				},
				'Water Genasi' :
				{
					'Ability Score Increase' : 'Your Wisdom score increases by 1.',
					'Acid Resistance' : 'You have resistance to acid damage.',
					'Amphibious' : 'You can breathe air and water.',
					'Swim' : 'You have a swimming speed of 30 feet.',
					'Call to the Wave' : 'You know the shape water cantrip (see chapter 2). When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'subracephyssort',
			'Air Genasi' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 100,
				'baseheight' : 58,
				'heightmod' : '2d10',
				'baseweight' : 120,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Light Blue' ],
					'Skin' : [ 'Light Blue' ],
					'Hair' : [ 'Light Blue' ],
					'Voice' : [ 'Normal', 'Breathy, with a faint echo' ],
					'Other Traits' : [ '_none', '_none', '_none', '_none', 'Odd patterns on flesh', 'Crystals growing from scalp' ]
				}
			},
			'Earth Genasi' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 100,
				'baseheight' : 58,
				'heightmod' : '2d10',
				'baseweight' : 120,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Brown', 'Hazel', 'Orange', 'Blue', 'Earthlike' ],
					'Skin Color' : [ 'Brown', 'Deep Brown', 'Black' ],
					'Skin Type' : [ 'Normal', 'Dirty', 'Polished', 'Metallic', 'Rusty iron', 'Rough hide', 'Covered in crystal', 'Fissures in flesh' ],
					'Hair' : [ 'Black', 'Brown', 'Earthlike' ],
					'Voice' : [ 'Normal', 'Low and gravelly' ],
				}
			},
			'Fire Genasi' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 100,
				'baseheight' : 58,
				'heightmod' : '2d10',
				'baseweight' : 120,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Fiery' ],
					'Skin' : [ 'Flaming Red', 'Coal-black', 'Ash-gray' ],
					'Hair' : [ 'Red', 'Fire' ],
					'Voice' : [ 'Normal', 'Crackling flames' ],
					'Other Traits' : [ '_none', 'Brimstone smell' ]
				}
			},
			'Water Genasi' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 100,
				'baseheight' : 58,
				'heightmod' : '2d10',
				'baseweight' : 120,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Blue', 'Black', 'Blue-black' ],
					'Skin' : [ 'Blue', 'Green' ],
					'Hair' : [ 'Bald' ],
					'Voice' : [ 'Normal', 'Whalesong undertones', 'Trickling stream undertones' ],
					'Other Traits' : [ '_none', 'Floating Hair' ]
				}
			}
		}
	},
	{
		'_special' : 'book-EE/VGtM',
		'_name' : 'Goliath',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength score increases by 2, and your Constitution score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Natural Athlete' : 'You have proficiency in the Athletics skill.',
			'Stone\'s Endurance' : 'You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can\'t use it again until you finish a short or long rest.',
			'Powerful Build' : 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
			'Mountain Born' : 'You\'re acclimated to high altitude, including elevations above 20,000 feet. You\'re also naturally adapted to cold climates, as described in chapter 5 of the Dungeon Master\'s Guide.',
			'Languages' : 'You can speak, read, and write Common and Giant.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 60,
			'baseheight' : 65,
			'heightmod' : '2d4',
			'baseweight' : 130,
			'weightmod' : '1d8',
			'other' : 
			{
				'Eyes' : [ 'Blue', 'Green' ],
				'Skin' : [ 'Gray', 'Brown' ],
				'Hair' :
				{
					'_special' : 'gendersort',
					'Male' : [ 'Bald' ],
					'Female' : [ 'Black', 'Dark Brown', 'Dark Gray' ]
				}
			}
		}
	},
	{
		'_special' : 'book-VGtM',
		'_name' : 'Aasimar',
		'Subraces and Variants' :
		{
			'Subrace' : [ 'Protector Aasimar', 'Scourge Aasimar', 'Fallen Aasimar' ],
			'Human Heritage' : { '_special' : 'halfethnicity' }
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Charisma score increases by 2.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Celestial Resistance' : 'You have resistance to necrotic damage and radiant damage.',
			'Healing Hands' : 'As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can\'t use it again until you finish a long rest.',
			'Light Bearer' : 'You know the light cantrip. Charisma is your spellcasting ability for it.',
			'Languages' : 'You can speak, read, and write Common and Celestial.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'Protector Aasimar' :
				{
					'Ability Score Increase' : 'Your Wisdom score increases by 1.',
					'Radiant Soul' : 'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can\'t use it again until you finish a long rest.'
				},
				'Scourge Aasimar' :
				{
					'Ability Score Increase' : 'Your Constitution score increases by 1.',
					'Radiant Consumption' : 'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can\'t use it again until you finish a long rest.'
				},
				'Fallen Aasimar' :
				{
					'Ability Score Increase' : 'Your Strength score increases by 1.',
					'Necrotic Shroud' : 'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can\'t use it again until you finish a long rest.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 120,
			'baseheight' : 56,
			'heightmod' : '2d10',
			'baseweight' : 110,
			'weightmod' : '2d4',
			'other' : 
			{
				'Eyes' : [ 'White', 'Gold', 'Gray', 'Topaz' ],
				'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown', 'Emerald', 'Gold', 'Silver', 'Emerald', 'Gold', 'Silver' ],
				'Hair' : [ 'Black', 'Brown', 'Blond', 'Silver', 'Red' ]
			}
		},
		'Guide Name' : [ 'Tadriel', 'Myllandra', 'Seraphina', 'Galladia', 'Mykiel', 'Valandras' ],
		'Guide Nature' : [ 'Bookish and lecturing', 'Compassionate and hopeful', 'Practical and lighthearted', 'Fierce and vengeful', 'Stern and judgmental', 'Kind and parental' ]
	},
	{
		'_special' : 'book-VGtM',
		'_name' : 'Firbolg',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Wisdom score increases by 2, and your Strength score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet.',
			'Firbolg Magic' : 'You can cast detect magic and disguise self with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can\'t cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves.',
			'Hidden Step' : 'As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can\'t use it again until you finish a short or long rest.',
			'Powerful Build' : 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
			'Speech of Beast and Leaf' : 'You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.',
			'Languages' : 'You can speak, read, and write Common, Elvish, and Giant.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 20,
			'maxage' : 400,
			'baseheight' : 74,
			'heightmod' : '2d12',
			'baseweight' : 175,
			'weightmod' : '2d6',
			'other' : 
			{
				'Eyes' : [ 'White' ],
				'Skin' : [ 'Fleshy Pink' ],
				'Hair' : [ 'Blonde', 'Red' ]
			}
		},
		'Reason for Adventuring' :
		[
			'Outcast for murder',
			'Outcast for severely damaging home territory',
			'Clan slain by invading humanoids',
			'Clan slain by a dragon or demon',
			'Separated from the tribe and lost',
			'Homeland destroyed by natural disaster',
			'Personal quest ordained by omens',
			'Dispatched on a quest by tribe leaders' 
		]
	},
	{
		'_special' : 'book-VGtM',
		'_name' : 'Kenku',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2, and your Wisdom score increases by 1.',
			'Size' : 'Medium',
			'Speed' : 'Your base walking speed is 30 feet.',
			'Expert Forgery' : 'You can duplicate other creatures\' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.',
			'Kenku Training' : 'You are proficient in your choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.',
			'Mimicry' : 'You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.',
			'Languages' : 'You can read and write Common and Auran, but you can speak only by using your Mimicry trait.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 9,
			'maxage' : 50,
			'baseheight' : 52,
			'heightmod' : '2d8',
			'baseweight' : 50,
			'weightmod' : '1d6',
			'other' : 
			{
				'Eyes' : [ 'Black' ]
			}
		}
	},
	{
		'_special' : 'book-VGtM',
		'_name' : 'Lizardfolk',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Constitution score increases by 2, and your Wisdom score increases by 1.',
			'Size' : 'Medium',
			'Speed' : 'Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.',
			'Bite' : 'Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
			'Cunning Artisan' : 'As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan\'s tools, such as leatherworker\'s tools.',
			'Hold Breath' : 'You can hold your breath for up to 15 minutes at a time.',
			'Hunter\'s Lore' : 'You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival.',
			'Natural Armor' : 'You have tough, scaly skin. When you aren\'t wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield\'s benefits apply as normal while you use your natural armor.',
			'Hungry Jaws' : 'In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can\'t use this trait again until you finish a short or long rest.',
			'Languages' : 'You can speak, read, and write Common and Draconic.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 10,
			'maxage' : 45,
			'baseheight' : 57,
			'heightmod' : '2d10',
			'baseweight' : 120,
			'weightmod' : '2d6',
			'other' : 
			{
				'Eyes' : [ 'Yellow' ],
				'Skin/Scales' : [ 'Green', 'Black', 'Gray', 'Brown' ]
			}
		},
		'Lizardfolk Quirk' :
		[
			'You hate waste and see no reason not to scavenge fallen enemies. Fingers are tasty and portable!',
			'You sleep best while mostly submerged in water.',
			'Money is meaningless to you.',
			'You think there are only two species of humanoid: lizardfolk and meat',
			'You have learned to laugh. You use this talent in response to all emotional situations, to better fit in with your comrades.',
			'You still don\'t understand how metaphors work. That doesn\'t stop you from using them at every opportunity.',
			'You appreciate the soft humanoids who realize they need chain mail and swords to match the gifts you were born with.',
			'You enjoy eating your food while it\'s still wriggling.'
		]
	},
	{
		'_special' : 'book-VGtM',
		'_name' : 'Tabaxi',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2, and your Charisma score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Feline Agility' : 'Your reflexes and agility allow you to meve with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can\'t use it again until you move O feet on one of your turns.',
			'Cat\'s Claws' : 'Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
			'Cat\'s Talent' : 'You have proficiency in the Perception and Stealth skills.',
			'Languages' : 'You can speak, read, and write Common and one other language of your choice.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 60,
			'baseheight' : 58,
			'heightmod' : '2d10',
			'baseweight' : 90,
			'weightmod' : '2d4',
			'other' : 
			{
				'Eyes' : [ 'Green', 'Yellow' ],
				'Hair' : [ 'Yellow', 'Orange', 'Red' ]
			}
		},
		'Tabaxi Obsession' :
		[
			'A god or planar entity',
			'A monster',
			'A lost civilization',
			'A wizard\'s secrets',
			'A mundane item',
			'A magic item',
			'A location',
			'A legend or tale'
		],
		'Tabaxi Quirk' :
		[
			'You miss your tropical home and complain endlessly about the freezing weather, even in summer.',
			'You never wear the same outfit twice, unless you absolutely must.',
			'You have a minor phobia of water and hate getting wet.',
			'Your tail always betrays your inner thoughts.',
			'You purr loudly when you are happy.',
			'You keep a small ball of yarn in your hand, which you constantly fidget with.',
			'You are always in debt, since you spend your gold on lavish parties and gifts for friends.',
			'When talking about something you\'re obsessed with, you speak quickly and never pause and others can\'t understand you.',
			'You are a font of random trivia from the lore and stories you have discovered.',
			'You can\'t help but pocket interesting objects you come across. '
		]
	},
	{
		'_special' : 'book-VGtM',
		'_name' : 'Triton',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength, Constitution, and Charisma scores each increase by 1.',
			'Size' : 'Medium',
			'Speed' : 'Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.',
			'Amphibious' : 'You can breathe air and water.',
			'Control Air and Water' : 'A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it (see the spell in the sidebar). Once you cast a spell with this trait, you can\'t do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.',
			'Emissary of the Sea' : 'Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return.',
			'Guardians of the Depths' : 'Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment.',
			'Lanuages' : 'You can speak, read, and write Common and Primordial.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 150,
			'baseheight' : 54,
			'heightmod' : '2d10',
			'baseweight' : 90,
			'weightmod' : '2d4',
			'other' : 
			{
				'Eyes' : [ 'Black', 'White', 'Green', 'Blue' ],
				'Skin' : [ 'Silver', 'Silver-Blue' ],
				'Hair' : [ 'Deep Blue', 'Green-Blue' ]
			}
		},
		'Triton Quirk' :
		[
			'You phrase requests as orders that you expect to be obeyed.',
			'You are quick to boast of the greatness of your civilization.',
			'You learned an antiquated version of Common and drop "thee" and "thou" into your speech.',
			'You assume that people are telling you the truth about local customs and expectations.',
			'The surface world is a wondrous place, and you catalog all its details in a journal.',
			'You mistakenly assume that surface folk know about and are impressed by your people\'s history. '
		]
	},
	{
		'_special' : 'book-MR',
		'_name' : 'Bugbear',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength score increases by 2, and your Dexterity score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet.',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Long-Limbed' : 'When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.',
			'Powerful Build' : 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
			'Sneaky.' : 'You are proficient in the Stealth skill.',
			'Surprise Attack' : 'If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat.',
			'Languages' : 'You can speak, read, and write Common and Goblin.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 12,
			'maxage' : 60,
			'baseheight' : 72,
			'heightmod' : '2d12',
			'baseweight' : 200,
			'weightmod' : '2d6',
			'other' : 
			{
				'Eyes' : [ 'Yellow', 'Orange', 'Red', 'Brown', 'Greenish-white' ],
				'Skin' : [ 'Yellow', 'Reddish-brown' ],
				'Hair' : [ 'Brown', 'Red' ]
			}
		},
		'Monstrous Origin' : { '_special' : 'monstrousorigin' }
	},
	{
		'_special' : 'book-MR',
		'_name' : 'Goblin',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2, and your Constitution score increases by 1',
			'Size' : 'Small',
			'Speed' : '30 feet.',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Fury of the Small' : 'When you damage a creature with an attack or a spell and the creature\'s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can\'t use it again until you finish a short or long rest.',
			'Nimble Escape' : 'You can take the Disengage or Hide action as a bonus action on each of your turns.',
			'Languages' : 'You can speak, read, and write Common and Goblin.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 6,
			'maxage' : 45,
			'baseheight' : 41,
			'heightmod' : '2d4',
			'baseweight' : 35,
			'weightmod' : '1',
			'other' : 
			{
				'Eyes' : [ 'Yellow', 'Orange', 'Red' ],
				'Skin' : [ 'Yellow', 'Orange', 'Red' ],
			}
		},
		'Monstrous Origin' : { '_special' : 'monstrousorigin' }
	},
	{
		'_special' : 'book-MR',
		'_name' : 'Hobgoblin',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Constitution score increases by 2, and your Intelligence score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Martial Training' : 'You are proficient with two martial weapons of your choice and with light armor.',
			'Saving Face' : 'Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can\'t use it again until you finish a short or long rest.',
			'Languages' : 'You can speak, read, and write Common and Goblin.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 60,
			'baseheight' : 56,
			'heightmod' : '2d10',
			'baseweight' : 110,
			'weightmod' : '2d4',
			'other' : 
			{
				'Eyes' : [ 'Yellow', 'Orange', 'Red' ],
				'Skin' : [ 'Orange', 'Reddish-brown' ],
				'Hair' : [ 'Dark Brown', 'Dark Gray', 'Orange', 'Red' ]
			}
		},
		'Monstrous Origin' : { '_special' : 'monstrousorigin' }
	},
	{
		'_special' : 'book-MR',
		'_name' : 'Kobold',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2, and your Strength score is reduced by 2',
			'Size' : 'Small',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Grovel, Cower, and Beg.' : 'As an action on your tum, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use this trait, you can\'t use it again until you finish a short or long rest.',
			'Pack Tactics' : 'You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn\'t incapacitated.',
			'Sunlight Sensitivity' : 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
			'Languages' : 'You can speak, read, and write Common and Draconic.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 4,
			'maxage' : 60,
			'baseheight' : 25,
			'heightmod' : '2d4',
			'baseweight' : 25,
			'weightmod' : '1',
			'other' : 
			{
				'Eyes' : [ 'Burnt Orange', 'Red' ],
				'Skin' : [ 'Red', 'Reddish-brown' ]
			}
		},
		'Monstrous Origin' : { '_special' : 'monstrousorigin' }
	},
	{
		'_special' : 'book-MR',
		'_name' : 'Orc',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength score increases by 2, your Constitution score increases by 1, and your Intelligence score is reduced by 2',
			'Size' : 'Medium',
			'Speed' : 'Your base walking speed is 30 feet.',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Aggressive' : 'As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.',
			'Menacing' : 'You are trained in the Intimidation skill.',
			'Powerful Build' : 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
			'Languages' : 'You can speak, read, and write Common and Orc.' 
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 9,
			'maxage' : 40,
			'baseheight' : 64,
			'heightmod' : '2d8',
			'baseweight' : 175,
			'weightmod' : '2d6',
			'other' : 
			{
				'Eyes' : [ 'Red', 'Gray' ],
				'Skin' : [ 'Gray', 'Purplish-Gray', 'Bluish-Gray' ],
				'Hair' : [ 'Black' ]
			}
		},
		'Monstrous Origin' : { '_special' : 'monstrousorigin' }
	},
	{
		'_special' : 'book-MR',
		'_name' : 'Yuan-Ti Pureblood',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Charisma score increases by 2, and your Intelligence score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Innate Spellcasting' : 'You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once you cast it, you can\'t do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.',
			'Magic Resistance' : 'You have advantage on saving throws against spells and other magical effects.',
			'Poison Immunity' : 'You are immune to poison damage and the poisoned condition.',
			'Languages' : 'You can speak, read, and write Common, Abyssal, and Draconic.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 60,
			'baseheight' : 56,
			'heightmod' : '2d10',
			'baseweight' : 110,
			'weightmod' : '2d4',
			'other' : 
			{
				'Eyes' : [ 'Green' ],
				'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown' ],
				'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White' ]
			}
		},
		'Monstrous Origin' : { '_special' : 'monstrousorigin' }
	},
	{
		'_special' : 'book-Other',
		'_name' : 'Tortle',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength score increases by 2, and your Wisdom score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Claws' : 'Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
			'Hold Breath' : 'You can hold your breath for up to 1 hour at a time. Tortles aren\'t natural swimmers, but they can remain underwater for some time before needing to come up for air.',
			'Natural Armor' : 'Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn\'t affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield\'s bonus ar normal.',
			'Shell Defense' : 'You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can\'t increase, you have disadvantage on Dexterity saving throws, you can\'t take reactions, and the only action you can take is a bonus action to emerge from your shell.',
			'Survival Instinct' : 'You gain proficiency in the Survival skill. Tortles have finely honed survival instincts.',
			'Languages' : 'You can speak, read, and write Common and Aquan.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 11,
			'maxage' : 40,
			'baseheight' : 60,
			'heightmod' : '2d4',
			'baseweight' : 355,
			'weightmod' : '2d8',
			'other' : 
			{
				'Eyes' : [ 'Green', 'Blue', 'Brown', 'Black' ],
				'Skin/Shell' : [ 'Olive-Green', 'Blue-Green', 'Brown' ],
			}
		}
	},
	{
		'_special' : 'book-UA',
		'_name' : 'Changeling',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity and Charisma scores increase by 1.',
			'Size' : 'Medium',
			'Speed' : 'Your base walking speed is 30 feet.',
			'Duplicity' : 'You gain proficiency in the Deception skill.',
			'Shapechanger' : 'As an action, you can polymorph into any humanoid of your size that you have seen, or back into your true form. However, your equipment does not change with you. If you die, you revert to your natural appearance',
			'Languages' : 'You can speak, read, and write Common and two other languages of your choice.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 15,
			'maxage' : 60,
			'baseheight' : 65,
			'heightmod' : '2d4',
			'baseweight' : 120,
			'weightmod' : '1d4',
			'other' : 
			{
				'Eyes' : [ 'White' ],
				'Skin' : [ 'Pale', 'Light Gray' ],
				'Hair' : [ 'Silver', 'Platinum', 'Blonde' ]
			}
		}
	},
	{
		'_special' : 'book-UA',
		'_name' : 'Gith',
		'Subraces and Variants' :
		{
			'Subrace' : [ 'Githyanki', 'Githzerai' ]
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Intelligence score increases by 1',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Languages' : 'You can speak, read, and write Common and Gith.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'Githyanki' :
				{
					'Ability Score Increase' : 'Your Strength score increases by 2',
					'Decadent Mastery' : 'You learn one languageof your choice, and you are proficient with one skill or tool of your choice.',
					'Martial Prodigy' : 'You are proficient with light and medium armor.',
					'Githyanki Psionics' : 'You know the mage handcantrip. When you reach 3rd level, you can cast jump once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the misty step spell once with this trait, and you regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells. You can cast all of them without components.'
				},
				'Githzerai' :
				{
					'Ability Score Increase' : 'Your Wisdom score increases by 2.',
					'Monastic Training' : 'You gain a +1 bonus to AC while you aren\'t wearing medium or heavy armor and aren\'t using a shield.',
					'Githzerai Psionics' : 'You know the mage hand cantrip. When you reach 3rd level, you can cast shield once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect thoughts spell once with this trait, and you regain the ability to do so when you finish a long rest. Wisdom is your spellcasting ability for these spells. You can cast all of them without components.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'subracephyssort',
			'Githyanki' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 80,
				'baseheight' : 60,
				'heightmod' : '2d12',
				'baseweight' : 100,
				'weightmod' : '2d4',
				'other' : 
				{
					'Eyes' : [ 'Yellow' ],
					'Skin' : [ 'Green', 'Yellow', 'Orange', 'Spotted brown' ],
					'Hair' : [ 'Brown' ]
				}
			},
			'Githzerai' : 
			{
				'_special' : 'characteristics',
				'minage' : 13,
				'maxage' : 80,
				'baseheight' : 59,
				'heightmod' : '2d12',
				'baseweight' : 90,
				'weightmod' : '1d4',
				'other' : 
				{
					'Eyes' : [ 'Yellow' ],
					'Skin' : [ 'Green', 'Yellow', 'Orange', 'Spotted brown' ],
					'Hair' : [ 'Brown' ]
				}
			}
		}
	},
	{
		'_special' : 'book-UA',
		'_name' : 'Minotaur',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength score increases by 1.',
			'Conqueror\'s Virtue' : 'From a young age, you focused on one of the three virtues of strength, cunning, or intellect. Your choice of your Strength, Intelligence, or Wisdom score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Horns' : 'You are never unarmed. You are proficient with your horns, which are a melee weapon that deals 1d10 piercing damage. Your horns grant you advantage on all checks made to shove a creature, but not to avoid being shoved yourself.',
			'Goring Rush' : 'When you use the Dash action during your turn, you can make a melee attack with your horns as a bonus action.',
			'Hammering Horns' : 'When you use the Attack action during your turn to make a melee attack, you can attempt to shove a creature with your horns as a bonus action. You cannot use this shove attempt to knock a creature prone.',
			'Labyrinthine Recall' : 'You can perfectly recall any path you have traveled.',
			'Sea Reaver' : 'You gain proficiency with navigator\'s tools and vehicles (water).',
			'Languages' : 'You can speak, read, and write Common.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 13,
			'maxage' : 120,
			'baseheight' : 70,
			'heightmod' : '2d4',
			'baseweight' : 310,
			'weightmod' : '1d6',
			'other' : 
			{
				'Eyes' : [ 'Black', 'Dark Yellow' ],
				'Skin' : [ 'Black', 'Brown', 'White' ],
				'Hair' : [ 'Black', 'Brown', 'White', 'Red' ]
			}
		}
	},
	{
		'_special' : 'book-UA',
		'_name' : 'Shifter',
		'Subraces and Variants' :
		{
			'Subrace' : [ 'Beasthide', 'Cliffwalk', 'Longstride', 'Longtooth', 'Razorclaw', 'Wildhunt' ]
		},
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 1.',
			'Size' : 'Medium',
			'Speed' : '30 feet',
			'Darkvision' : 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
			'Shifting' : 'On your turn, you can shift as a bonus action. Shifting lasts for 1 minute or until you end it on your turn as a bonus action.  While shifting, you gain temporary hit points equal to your level + your Constitution bonus (minimum of 1). You also gain a feature that depends on your shifter subrace, described below. You must finish a short or long rest before you can shift again.',
			'Languages' : 'You can speak, read, and write Common and Sylvan.',
			'Subrace Traits' :
			{
				'_special' : 'subracetraitsort',
				'Beasthide' :
				{
					'Ability Score Increase' : 'Your Constitution score increases by 1.',
					'Shifting Feature' : 'While shifting, you gain a +1 bonus to AC.'
				},
				'Cliffwalk' :
				{
					'Ability Score Increase' : 'Your Dexterity score increases by 1.',
					'Shifting Feature' : 'While shifting, you gain a climb speed of 30 feet.'
				},
				'Longstride' :
				{
					'Ability Score Increase' : 'Your Dexterity score increases by 1.',
					'Shifting Feature' : 'While shifting, you can use the Dash action as a bonus action.'
				},
				'Longtooth' :
				{
					'Ability Score Increase' : 'Your Strength score increases by 1.',
					'Shifting Feature' : 'While shifting, you can make a bite attack as an action. This is a melee weapon attack that uses Strength for its attack roll and damage bonus and deals 1d6 piercing damage. If this attack hits a target that is your size or smaller, the target is also grappled.'
				},
				'Razorclaw' :
				{
					'Ability Score Increase' : 'Your Dexterity score increases by 1.',
					'Shifting Feature' : 'While shifting, you can make an unarmed strike as a bonus action. You can use your Dexterity for its attack roll and damage bonus, and this attack deals slashing damage.'
				},
				'Wildhunt' :
				{
					'Ability Score Increase' : 'Your Wisdom score increases by 1.',
					'Shifting Feature' : 'While shifting, you gain advantage on all Wisdom-based checks and saving throws.'
				}
			}
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 15,
			'maxage' : 60,
			'baseheight' : 65,
			'heightmod' : '2d4',
			'baseweight' : 130,
			'weightmod' : '1d8',
			'other' : 
			{
				'Eyes' : [ 'Brown', 'Hazel', 'Green', 'Blue', 'Gray' ],
				'Skin' : [ 'Pale', 'Fair', 'Tan', 'Light Brown', 'Brown', 'Dark Brown' ],
				'Hair' : [ 'Black', 'Brown', 'Blond', 'Auburn', 'Red', 'Gray/White' ]
			}
		}
	},
	{
		'_special' : 'book-UA',
		'_name' : 'Warforged',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Strength and Constitution scores increase by 1.',
			'Size' : 'Medium',
			'Speed' : 'Your base walking speed is 30 feet.',
			'Composite Plating' : 'Your construction incorporates wood and metal, granting you a +1 bonus to Armor Class',
			'Living Construct' : 'Even though you were constructed, you are a living creature. You are immune to disease. You do not need to eat or breathe, but you can ingest food and drink if you wish. Instead of sleeping, you enter an inactive state for 4 hours each day. You do not dream in this state; you are fully aware of your surroundings and notice approaching enemies and other events as normal.',
			'Languages' : 'You can speak, read, and write Common and one other language of your choice.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 1,
			'maxage' : 1000,
			'baseheight' : 70,
			'heightmod' : '2d6',
			'baseweight' : 270,
			'weightmod' : '2d4',
			'other' : 
			{
				'Composition' : [ 'Stone', 'Metal', 'Wood' ]
			}
		}
	},
	{
		'_special' : 'book-Unofficial',
		'_name' : 'Grung',
		'Racial Traits' :
		{
			'Ability Score Increase' : 'Your Dexterity score increases by 2 and your Constitution score increases by 1.',
			'Arboreal Alertness' : 'You have proficiency in the Perception skill.',
			'Size' : 'Small',
			'Speed' : 'Your base walking speed is 25 feet, and you have a climbing speed of 25 feet.',
			'Amphibious' : 'You can breathe air and water.',
			'Poison Immunity' : 'You\'re immune to poison damage and the poisoned condition.',
			'Poisonous Skin' : 'Any creature that grapples you or otherwise comes into direct contact with your skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with you can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can also apply this poison to any piercing weapon as part of an attack with that weapon, though when you hit the poison reacts differently. The target must succeed on a DC 12 Constitution saving throw or take 2d4 poison damage.',
			'Standing Leap' : 'Your long jump is up to 25 feet and your high jump is up to 15 feet, with or without a running start.',
			'Water Dependency' : 'If you fail to immerse yourself in water for at least 1 hour during a day, you suffer one level of exhaustion at the end of that day. You can only recover from this exhaustion through magic or by immersing yourself in water for at least 1 hour.',
			'Languages' : 'You can speak, read, and write Grung.'
		},
		'Physical Characteristics' :
		{
			'_special' : 'characteristics',
			'minage' : 1,
			'maxage' : 40,
			'baseheight' : 30,
			'heightmod' : '2d4',
			'baseweight' : 35,
			'weightmod' : '1',
			'other' : 
			{
				'Skin' : [ 'Green', 'Blue', 'Purple', 'Red', 'Orange', 'Gold' ],
			}
		},
		'Monstrous Origin' : { '_special' : 'monstrousorigin' }
	}
]

var classes =
[
	{
		'_special' : 'book-PHB',
		'_name' : 'Barbarian',
		'Primal Path' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Path of the Berserker', 'Path of the Totem Warrior' ],
			'SCAG' : [ 'Path of the Battlerager' ],
			'XGtE' : [ 'Path of the Ancestral Guardian', 'Path of the Storm Herald', 'Path of the Zealot' ],
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d12 per barbarian level',
				'Hit Points at 1st Level' : '12 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d12 (or 7) + your Constitution modifier per barbarian level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light armor, medium armor, shields',
				'Weapons' : 'Simple weapons, martial weapons',
				'Saving Throws' : 'Strength, Constitution',
				'Skills' : 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival'
			},
			'Equipment' :
			{
				'_1' : '(a) A greataxe or (b) any martial melee weapon',
				'_2' : '(a) Two handaxes or (b) any simple weapon',
				'_3' : 'An [[Explorer\'s Pack|explorerspack]] and four javelins'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Strength 13',
			'Proficiencies' : 'Shields, simple weapons, martial weapons'
		},
		'Personality' :
		{
			'Personal Totem' :
			[
				'A tuft of fur from a solitary wolf that you befriended during a hunt',
				'Three eagle feathers given to you by a wise shaman, who told you they would play a role in determining your fate',
				'A necklace made from the claws of a young cave bear that you slew singlehandedly as a child',
				'A small leather pouch holding three stones that represent your ancestors',
				'A few small bones from the first beast you killed, tied together with colored wool',
				'An egg-sized stone in the shape of your spirit animal that appeared one day in your belt pouch',
				'_none',
				'_none',
				'_none'
			],
			'Tattoo' :
			[
				'The wings of an eagle are spread wide across your upper back.',
				'Etched on the backs of your hands are the paws of a cave bear.',
				'The symbols of your clan are displayed in viny patterns along your arms.',
				'The antlers of an elk are inked across your back.',
				'Images of your spirit animal are tattooed along your weapon arm and hand.',
				'The eyes of a wolf are marked on your back to help you see and ward off evil spirits.',
				'_none',
				'_none',
				'_none'
			],
			'Superstition' :
			[
				'If you disturb the bones of the dead, you inherit all the troubles that plagued them in life.',
				'Never trust a wizard. They\'re all devils in disguise, especially the friendly ones.',
				'Dwarves have lost their spirits, and are almost like the undead. That\'s why they live underground.',
				'Magical things bring trouble. Never sleep with a magic object within ten feet of you.',
				'When you walk through a graveyard, be sure to wear silver, or a ghost might jump into your body.',
				'If an elf looks you in the eyes, she\'s trying to read your thoughts.',
				'_none',
				'_none',
				'_none'
			],
			'Became a barbarian because' :
			[
				'My devotion to my people lifted me in battle, making me powerful and dangerous.',
				'The spirits of my ancestors called on me to carry out a great task.',
				'I lost control in battle one day, and it was as if something else was manipulating my body, forcing it to kill every foe I could reach.',
				'I went on a spiritual journey to find myself and instead found a spirit animal to guide, protect, and inspire me.',
				'I was struck by lightning and lived. Afterward, I found a new strength within me that let me push beyond my limitations.',
				'My anger needed to be channeled into battle, or I risked becoming an indiscriminate killer.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Bard',
		'Bard College' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'College of Lore', 'College of Valor' ],
			'XGtE' : [ 'College of Glamour', 'College of Swords', 'College of Whispers' ],
			'UA' : [ 'College of Satire' ],
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per bard level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per bard level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor',
				'Weapons' : 'Simple Weapons, hand crossbows, longswords, rapiers, shortswords',
				'Tools' : 'Three musical instruments of your choice',
				'Saving Throws' : 'Dexterity, Charisma',
				'Skills' : 'Choose any three.'
			},
			'Equipment' :
			{
				'_1' : '(a) A Rapier, (b) a Longsword, or (c) any simple weapon',
				'_2' : '(a) A [[Diplomat\'s Pack|diplomatspack]] or (b) an [[Entertainer\'s Pack|entertainerspack]]',
				'_3' : '(a) A lute or (b) any other musical instrument',
				'_4' : '[[Leather Armor|leatherarmor]], and a Dagger'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Charisma 13',
			'Proficiencies' : 'Light armor, one skill of your choice, one musical instrument of your choice'
		},
		'Personality' :
		{
			'Defining Works' :
			[
				'"The Three Flambinis,” a ribald song concerning mistaken identities and unfettered desire',
				'"Waltz of the Myconids,” an upbeat tune that children in particular enjoy',
				'"Asmodeus\'s Golden Arse," a dramatic poem you claim was inspired by your personal visit to Avernus',
				'"The Pirates of Luskan," your firsthand account of being kidnapped by sea reavers as a child',
				'"A Hoop, Two Pigeons, and a Hell Hound," a subtle parody of an incompetent noble',
				'"A Fool in the Abyss," a comedic poem about a jester\'s travels among demons',
				'_none',
				'_none',
				'_none'
			],
			'Instrument' :
			[
				'A masterfully crafted halfling fiddle',
				'A mithral horn made by elves',
				'A zither made with drow spider silk',
				'An orcish drum',
				'A wooden bullywug croak box',
				'A tinker\'s harp of gnomish design',
				'_none',
				'_none',
				'_none'
			],
			'Embarassment' :
			[
				'The time when your comedic song, "Big Tom\'s Hijinks”- which, by the way, you thought was brilliant- did not go over well with Big Tom',
				'The matinee performance when a circus\'s owlbear got loose and terrorized the crowd',
				'When your opening song was your enthusiastic but universally hated rendition of "Song of the Froghemoth”',
				'The first and last public performance of "Mirt, Man about Town"',
				'The time on stage when your wig caught fire and you threw it down- which set fire to the stage',
				'When you sat on your lute by mistake during the final stanza of "Starlight Serenade”',
				'_none',
				'_none',
				'_none'
			],
			'Became a bard because' :
			[
				'I awakened my latent bardic abilities through trial and error.',
				'I was a gifted performer and attracted the attention of a master bard who schooled me in the old techniques.',
				'I joined a loose society of scholars and orators to learn new techniques of performance and magic.',
				'I felt a calling to recount the deeds of champions and heroes, to bring them alive in song and story.',
				'I joined one of the great colleges to learn old lore, the secrets of magic, and the art of performance.',
				'I picked up a musical instrument one day and instantly discovered that I could play it.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Cleric',
		'Divine Domain' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Knowledge Domain', 'Life Domain', 'Light Domain', 'Nature Domain', 'Tempest Domain', 'Trickery Domain', 'War Domain' ],
			'DMG' : [ 'Death Domain' ],
			'SCAG' : [ 'Arcane Domain' ],
			'XGtE' : [ 'Forge Domain', 'Grave Domain' ],
			'UA' : [ 'Protection Domain' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per cleric level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per cleric level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor, Medium Armor, shields',
				'Weapons' : 'Simple Weapons',
				'Saving Throws' : 'Wisdom, Charisma',
				'Skills' : 'Choose two from History, Insight, Medicine, Persuasion, and Religion'
			},
			'Equipment' :
			{
				'_1' : '(a) A mace or (b) a Warhammer (if proficient)',
				'_2' : '(a) [[Scale Mail|scalemailarmor]], (b) [[Leather Armor|leatherarmor]], or (c) [[Chain Mail|chainmail]] (if proficient)',
				'_3' : '(a) A Light Crossbow and 20 bolts or (b) any simple weapon',
				'_4' : '(a) A [[Priest\'s Pack|priestspack]] or (b) an [[Explorer\'s Pack|explorerspack]]',
				'_5' : 'A [[Shield|shield]] and a holy Symbol'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Wisdom 13',
			'Proficiencies' : 'Light armor, medium armor, shields'
		},
		'Personality' :
		{
			'Temple' :
			[
				'Your temple is said to be the oldest surviving structure built to honor your god.',
				'Acolytes of several like- minded deities all received instruction together in your temple.',
				'You come from a temple famed for the brewery it operates. Some say you smell like one of its ales.',
				'Your temple is a fortress and a proving ground that trains warrior-priests.',
				'Your temple is a peaceful, humble place, filled with vegetable gardens and simple priests.',
				'You served in a temple in the Outer Planes.',
				'_none',
				'_none',
				'_none'
			],
			'Keepsake' :
			[
				'The finger bone of a saint',
				'A metal-bound book that tells how to hunt and destroy infernal creatures',
				'A pig\'s whistle that reminds you of your humble and beloved mentor',
				'A braid of hair woven from the tail of a unicorn',
				'A scroll that describes how best to rid the world of necromancers',
				'A runestone said to be blessed by your god',
				'_none',
				'_none',
				'_none'
			],
			'Secret' :
			[
				'An imp offers you counsel. You try to ignore the creature, but sometimes its advice is helpful.',
				'You believe that, in the final analysis, the gods are nothing more than ultrapowerful mortal creatures.',
				'You acknowledge the power of the gods, but you think that most events are dictated by pure chance.',
				'Even though you can work divine magic, you have never truly felt the presence of a divine essence within yourself.',
				'You are plagued by nightmares that you believe are sent by your god as punishment for some unknown transgression.',
				'In times of despair, you feel that you are but a plaything of the gods, and you resent their remoteness.',
				'_none',
				'_none',
				'_none'
			],
			'Became a cleric because' :
			[
				'A supernatural being in service to the gods called me to become a divine agent in the world.',
				'I saw the injustice and horror in the world and felt moved to take a stand against them.',
				'My god gave me an unmistakable sign. I dropped everything to serve the divine.',
				'Although I was always devout, it wasn\'t until I completed a pilgrimage that I knew my true calling.',
				'I used to serve in my religion\'s bureaucracy but found I needed to work in the world, to bring the message of my faith to the darkest corners of the land.',
				'I realize that my god works through me, and I do as commanded, even though I don\'t know why I was chosen to serve.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Druid',
		'Druid Circle' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Circle of the Land', 'Circle of the Moon' ],
			'XGtE' : [ 'Circle of Dreams', 'Circle of the Shepherd' ],
			'UA' : [ 'Circle of Twilight', 'Circle of Spores' ],
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per druid level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per druid level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor, Medium Armor, shields (druids will not wear armor or use shields made of metal)',
				'Weapons' : 'Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears',
				'Tools' : 'Herbalism kit',
				'Saving Throws' : 'Intelligence, Wisdom',
				'Skills' : 'Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival'
			},
			'Equipment' :
			{
				'_1' : '(a) A wooden [[shield|shield]] or (b) any simple weapon',
				'_2' : '(a) A Scimitar or (b) any simple melee weapon',
				'_3' : '[[Leather Armor|leatherarmor]], an [[Explorer\'s Pack|explorerspack]], and a druidic focus'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Wisdom 13',
			'Proficiencies' : 'Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)'
		},
		'Personality' :
		{
			'Treasured Item' :
			[
				'A twig from the meeting tree that stands in the middle of your village',
				'A vial of water from the source of a sacred river',
				'Special herbs tied together in a bundle',
				'A small bronze bowl engraved with animal images',
				'A rattle made from a dried gourd and holly berries',
				'A miniature golden sickle handed down to you from your mentor',
				'_none',
				'_none',
				'_none'
			],
			'Guiding Aspect' :
			[
				'Yew trees remind you of renewing your mind and spirit, letting the old die and the new spring forth.',
				'Oak trees represent strength and vitality. Meditating under an oak fills your body and mind with resolve and fortitude.',
				'The river\'s endless flow reminds you of the great span of the world. You seek to act with the long-term interests of nature in mind.',
				'The sea is a constant, churning cauldron of power and chaos. It reminds you that accepting change is necessary to sustain yourself in the world.',
				'The birds in the sky are evidence that even the smallest creatures can survive if they remain above the fray.',
				'As demonstrated by the actions of the wolf, an individual\'s strength is nothing compared to the power of the pack.',
				'_none',
				'_none',
				'_none'
			],
			'Mentor' :
			[
				'Your mentor was a wise treant who taught you to think in terms of years and decades rather than days or months.',
				'You were tutored by a dryad who watched over a slumbering portal to the Abyss. During your training, you were tasked with watching for hidden threats to the world.',
				'Your tutor always interacted with you in the form of a falcon. You never saw the tutor\'s humanoid form.',
				'You were one of several youngsters who were mentored by an old druid, until one of your fellow pupils betrayed your group and killed your master.',
				'Your mentor has appeared to you only in visions. You have yet to meet this person, and you are not sure such a person exists in mortal form.',
				'Your mentor was a werebear who taught you to treat all living things with equal regard.',
				'_none',
				'_none',
				'_none'
			],
			'Became a druid because' :
			[
				'I saw too much devastation in the wild places, too much of nature\'s splendor ruined by the despoilers. I joined a circle of druids to fight back against the enemies of nature.',
				'I found a place among a group of druids after I fled a catastrophe.',
				'I have always had an affinity for animals, so I explored my talent to see how I could best use it.',
				'I befriended a druid and was moved by druidic teachings. I decided to follow my friend\'s guidance and give something back to the world.',
				'While I was growing up, I saw spirits all around me- entities no one else could perceive. I sought out the druids to help me understand the visions and communicate with these beings.',
				'I have always felt disgust for creatures of unnatural origin. For this reason, I immersed myself in the study of the druidic mysteries and became a champion of the natural order.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Fighter',
		'Martial Archetype' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Champion', 'Battle Master', 'Eldritch Knight' ],
			'SCAG' : [ 'Banneret (Purple Dragon Knight)' ],
			'XGtE' : [ 'Arcane Archer', 'Cavalier', 'Samurai' ],
			'UA' : [ 'Scout', 'Monster Hunter', 'Sharpshooter', 'Brute' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d10 per fighter level',
				'Hit Points at 1st Level' : '10 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d10 (or 6) + your Constitution modifier per fighter level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor, Medium Armor, Heavy Armor, shields',
				'Weapons' : 'Simple Weapons, martial Weapons',
				'Saving Throws' : 'Strength, Constitution',
				'Skills' : 'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival'
			},
			'Equipment' :
			{
				'_1' : '(a) [[Chain Mail|chainmail]] or (b) [[leather|leatherarmor]], Longbow, and 20 Arrows',
				'_2' : '(a) A martial weapon and a [[shield|Shield]] or (b) two martial Weapons',
				'_3' : '(a) A Light Crossbow and 20 bolts or (b) two handaxes',
				'_4' : '(a) A [[Dungeoneer\'s Pack|dungeoneerspack]] or (b) an [[Explorer\'s Pack|explorerspack]]'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Strength 13 or Dexterity 13',
			'Proficiencies' : 'Light armor, medium armor, shields, simple weapons, martial weapons'
		},
		'Personality' :
		{
			'Heraldic Sign' :
			[
				'A rampant gold dragon on a green field, representing valor and a quest for wealth',
				'The fist of a storm giant clutching lightning before a storm cloud, symbolizing wrath and power',
				'Crossed greatswords in front of a castle gate, signifying the defense of a city or kingdom',
				'A skull with a dagger through it, representing the doom you bring your enemies',
				'A phoenix in a ring of fire, an expression of an indomitable spirit',
				'Three drops of blood beneath a horizontal sword blade on a black background, symbolizing three foes you have sworn to kill',
				'_none',
				'_none',
				'_none'
			],
			'Instructor' :
			[
				'Gladiator. Your instructor was a slave who fought for freedom in the arena, or one who willingly chose the gladiator\'s life to earn money and fame.',
				'Military. Your trainer served with a group of soldiers and knows much about working as a team.',
				'City Watch. Crowd control and peacekeeping are your instructor\'s specialties',
				'Tribal Warrior. Your instructor grew up in a tribe, where fighting for one\'s life was practically an everyday occurrence.',
				'Street Fighter . Your trainer excels at urban combat combining close-quarters work with silence and efficiency.',
				'Weapon Master . Your mentor helped you to become one with your chosen weapon, by imparting highly specialized knowledge of how to wield it most effectively.',
				'_none',
				'_none',
				'_none'
			],
			'Signature Style' :
			[
				'Elegant. You move with precise grace and total control, never using more energy than you need.',
				'Brutal. Your attacks rain down like hammer blows, meant to splinter bone or send blood flying.',
				'Cunning. You dart in to attack at just the right moment and use small-scale tactics to tilt the odds in your favor.',
				'Effortless. You rarely perspire or display anything other than a stoic expression in battle.',
				'Energetic. You sing and laugh during combat as your spirit soars. You are happiest when you have a foe in front of you and a weapon in hand.',
				'Sinister. You scowl and sneer while fighting, and you enjoy mocking your foes as you defeat them.',
				'_none',
				'_none',
				'_none'
			],
			'Became a fighter because' :
			[
				'I wanted to hone my combat skills, and so I joined a war college.',
				'I squired for a knight who taught me how to fight, care for a steed, and conduct myself with honor. I decided to take up that path for myself.',
				'Horrible monsters descended on my community, killing someone I loved. I took up arms to destroy those creatures and others of a similar nature.',
				'I joined the army and learned how to fight as part of a group.',
				'I grew up fighting, and I refined my talents by defending myself against people who crossed me.',
				'I could always pick up just about any weapon and know how to use it effectively.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Monk',
		'Monastic Tradition' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Way of the Open Hand', 'Way of Shadow', 'Way of the Four Elements' ],
			'SCAG' : [ 'Way of the Long Death' ],
			'XGtE' : [ 'Way of the Drunken Master', 'Way of the Kensei' ],
			'SCAG/XGtE' : [ 'Way of the Sun Soul' ],
			'UA' : [ 'Way of Tranquility' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per monk level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per monk level after 1st'
			},
			'Proficiencies' :
			{
				'Weapons' : 'Simple Weapons, shortswords',
				'Tools' : 'Any one type of artisan\'s tools or any one musical instrument of your choice',
				'Saving Throws' : 'Strength, Dexterity',
				'Skills' : 'Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth'
			},
			'Equipment' :
			{
				'_1' : '(a) A Shortsword or (b) any simple weapon',
				'_2' : '(a) A [[Dungeoneer\'s Pack|dungeoneerspack]] or (b) an [[Explorer\'s Pack|explorerspack]]',
				'_3' : '10 darts'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Dexterity 13 and Wisdom 13',
			'Proficiencies' : 'Simple weapons, shortswords'
		},
		'Personality' :
		{
			'Monastery' :
			[
				'Your monastery is carved out of a mountainside where it looms over a treacherous pass.',
				'Your monastery is high in the branches of an immense tree in the Feywild.',
				'Your monastery was founded long ago by a cloud giant and is inside a cloud castle that can be reached only by flying.',
				'Your monastery is built beside a volcanic system of hot springs, geysers, and sulfur pools. You regularly received visits from azer traders.',
				'Your monastery was founded by gnomes and is an underground labyrinth oftunnels and rooms.',
				'Your monastery was carved from an iceberg in the frozen reaches of the world.',
				'_none',
				'_none',
				'_none'
			],
			'Monastic Icons' :
			[
				'Monkey. Quick reflexes and the ability to travel through the treetops are two of the reasons why your order admires the monkey.',
				'Dragon Turtle. The monks of your seaside monastery venerate the dragon turtle, reciting ancient prayers and offering garlands of flowers to honor this living spirit of the sea.',
				'Ki-rin. Your monastery sees its main purpose as watching over and protecting the land in the manner of the ki-rin.',
				'Owlbear. The monks of your monastery revere a family of owlbears and have coexisted with them for generations.',
				'Hydra. Your order singles out the hydra for its ability to unleash several attacks simultaneously.',
				'Dragon. A dragon once laired within your monastery . Its influence remains long after its departure.',
				'_none',
				'_none',
				'_none'
			],
			'Master' :
			[
				'Your master was a tyrant whom you had to defeat in single combat to complete your instruction.',
				'Your master was kindly and taught you to pursue the cause of peace.',
				'Your master was merciless in pushing you to your limits. You nearly lost an eye during one especially brutal practice session.',
				'Your master seemed goodhearted while tutoring you, but betrayed your monastery in the end.',
				'Your master was cold and distant. You suspect that the two of you might be related.',
				'Your master was kind and generous, never critical of your progress. Nevertheless, you feel you never fully lived up to the expectations placed on you.',
				'_none',
				'_none',
				'_none'
			],
			'Became a monk because' :
			[
				'I was chosen to study at a secluded monastery. There, I was taught the fundamental techniques required to eventually master a tradition.',
				'I sought instruction to gain a deeper understanding of existence and my place in the world.',
				'I stumbled into a portal to the Shadowfell and took refuge in a strange monastery, where I learned how to defend myself against the forces of darkness.',
				'I was overwhelmed with grief after losing someone close to me, and I sought the advice of philosophers to help me cope with my loss.',
				'I could feel that a special sort of power lay within me, so I sought out those who could help me call it forth and master it.',
				'I was wild and undisciplined as a youngster, but then I realized the error of my ways. I applied to a monastery and became a monk as a way to live a life of discipline.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Paladin',
		'Sacred Oath' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Oath of Devotion', 'Oath of the Ancients', 'Oath of Vengeance' ],
			'DMG' : [ 'Oathbreaker' ],
			'SCAG' : [ 'Oath of the Crown' ],
			'XGtE' : [ 'Oath of Conquest', 'Oath of Redemption' ],
			'UA' : [ 'Oath of Treachery' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d10 per paladin level',
				'Hit Points at 1st Level' : '10 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d10 (or 6) + your Constitution modifier per paladin level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor, Medium Armor, Heavy Armor, shields',
				'Weapons' : 'Simple Weapons, martial Weapons',
				'Saving Throws' : 'Wisdom, Charisma',
				'Skills' : 'Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion'
			},
			'Equipment' :
			{
				'_1' : '(a) A martial weapon and a [[Shield|shield]] or (b) two martial Weapons',
				'_2' : '(a) Five javelins or (b) any simple melee weapon',
				'_3' : '(a) A [[Priest\'s Pack|priestspack]] or (b) an [[Explorer\'s Pack|explorerspack]]',
				'_4' : '[[Chain Mail|chainmail]] and a holy Symbol'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Strength 13 and Charisma 13',
			'Proficiencies' : 'Light armor, medium armor, shields, simple weapons, martial weapons'
		},
		'Personality' :
		{
			'Personal Goal' :
			[
				'Peace. You fight so that future generations will not have to.',
				'Revenge. Your oath is the vehicle through which you will right an ancient wrong.',
				'Duty. You will live up to what you have sworn to do or die trying.',
				'Leadership. You will win a great battle that bards will sing about, and in so doing, you will become an example to inspire others.',
				'Faith. You know your path is righteous, or else the gods would not have set you upon it.',
				'Glory. You will lead the world into a grand new era, one that will be branded with your name.',
				'_none',
				'_none',
				'_none'
			],
			'Symbol' :
			[
				'A dragon, emblematic of your nobility in peace and your ferocity in combat',
				'A clenched fist, because you are always ready to fight for your beliefs',
				'An upraised open hand, indicating your preference for diplomacy over combat',
				'A red heart, showing the world your commitment to justice',
				'A black heart, signifying that emotions such as pity do not sway your dedication to your oath',
				'An unblinking eye, meaning that you are ever alert to all threats against your cause',
				'_none',
				'_none',
				'_none'
			],
			'Nemesis' :
			[
				'A mighty orc war chief who threatens to overrun and destroy everything you hold sacred',
				'A fiend or a celestial, the agent of a power of the Outer Planes, who has been charged with corrupting or redeeming you, as appropriate',
				'A dragon whose servants dog your steps',
				'A high priest who sees you as a misguided fool and wants you to abandon your religion',
				'A rival paladin who trained with you but became an oathbreaker and holds you responsible',
				'A vampire who has sworn revenge against all paladins after being defeated by one',
				'_none',
				'_none',
				'_none'
			],
			'Temptation' :
			[
				'Fury. When your anger is roused, you have trouble thinking straight, and you fear you might do something you\'ll regret.',
				'Pride. Your deeds are noteworthy, and no one takes note of them more often than you.',
				'Lust. You can\'t resist an attractive face and a pleasant smile.',
				'Envy. You are mindful of what some famous folk have accomplished, and you feel inadequate when your deeds don\'t compare to theirs.',
				'Despair. You consider the great strength of the enemies you must defeat, and at times you see no way to achieve final victory.',
				'Greed. Regardless of how much glory and treasure you amass, it\'s never enough for you.',
				'_none',
				'_none',
				'_none'
			],
			'Became a paladin because' :
			[
				'A fantastical being appeared before me and called on me to undertake a holy quest.',
				'One of my ancestors left a holy quest unfulfilled, so I intend to finish that work.',
				'The world is a dark and terrible place. I decided to serve as a beacon of light shining out against the gathering shadows.',
				'I served as a paladin\'s squire, learning all I needed to swear my own sacred oath.',
				'Evil must be opposed on all fronts. I feel compelled to seek out wickedness and purge it from the world.',
				'Becoming a paladin was a natural consequence of my unwavering faith. In taking my vows, I became the holy sword of my religion.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Ranger',
		'Ranger Archetype' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Hunter', 'Beast Master' ],
			'XGtE' : [ 'Gloom Stalker', 'Horizon Walker', 'Monster Slayer' ],
			'UA' : [ 'Primeval Guardian' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d10 per ranger level',
				'Hit Points at 1st Level' : '10 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d10 (or 6) + your Constitution modifier per ranger level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor, Medium Armor, shields',
				'Weapons' : 'Simple Weapons, martial weapons',
				'Saving Throws' : 'Strength, Dexterity',
				'Skills' : 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival'
			},
			'Equipment' :
			{
				'_1' : '(a) [[Scale Mail|scalemailarmor]] or (b) [[Leather Armor|leatherarmor]]',
				'_2' : 'Two shortswords or (b) two simple Melee Weapons',
				'_3' : 'A [[Dungeoneer\'s Pack|dungeoneerspack]] or (b) an [[Explorer\'s Pack|explorerspack]]',
				'_4' : 'A Longbow and a Quiver of 20 Arrows'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Dexterity 13 and Wisdom 13',
			'Proficiencies' : 'Light armor, medium armor, shields, simple weapons, martial weapons, one skill from the class\'s skill list'
		},
		'Personality' :
		{
			'View of the World' :
			[
				'Towns and cities are the best places for those who can\'t survive on their own.',
				'The advancement of civilization is the best way to thwart chaos, but its reach must be monitored.',
				'Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more.',
				'Walls are for cowards, who huddle behind them while others do the work of making the world safe.',
				'Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild.',
				'Cities breed weakness by isolating folk from the harsh lessons of the wild.',
				'_none',
				'_none',
				'_none'
			],
			'Homeland' :
			[
				'You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell.',
				'As part of a group of nomads, you acquired the skills for surviving in the desert.',
				'Your early life in the Underdark prepared you for the challenges of combating its denizens.',
				'You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones.',
				'Because you grew up among the peaks, finding the best path through the mountains is second nature to you.',
				'You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice.',
				'_none',
				'_none',
				'_none'
			],
			'Sworn Enemy' :
			[
				'You seek revenge on nature\'s behalf for the great transgressions your foe has committed.',
				'Your forebears or predecessors fought these creatures, and so shall you.',
				'You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal.',
				'You find your foe fascinating, and you collect books of tales and history concerning it.',
				'You collect tokens of your fallen enemies to remind you of each kill.',
				'You respect your chosen enemy, and you see your battles as a test of respective skills.',
				'_none',
				'_none',
				'_none'
			],
			'Became a ranger because' :
			[
				'I found purpose while I honed my hunting skills by bringing down dangerous animals at the edge of civilization.',
				'I always had a way with animals, able to calm them with a soothing word and a touch.',
				'I suffer from terrible wanderlust, so being a ranger  gave me a reason not to remain in one place for too long.',
				'I have seen what happens when the monsters come out from the dark. I took it upon myself to become the first line of defense against the evils that lie beyond civilization\'s borders.',
				'I met a grizzled ranger who taught me woodcraft and the secrets of the wild lands.',
				'I served in an army, learning the precepts of my profession while blazing trails and scouting enemy encampments.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Rogue',
		'Roguish Archetype' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Thief', 'Assassin', 'Arcane Trickster' ],
			'XGtE' : [ 'Inquisitive', 'Scout' ],
			'SCAG/XGtE' : [ 'Mastermind', 'Swashbuckler' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per rogue level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per rogue level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor',
				'Weapons' : 'Simple Weapons, hand crossbows, longswords, rapiers, shortswords',
				'Tools' : 'Thieves\' Tools',
				'Saving Throws' : 'Dexterity, Intelligence',
				'Skills' : 'Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth'
			},
			'Equipment' :
			{
				'_1' : '(a) A Rapier or (b) a Shortsword',
				'_2' : '(a) A Shortbow and Quiver of 20 Arrows or (b) a Shortsword',
				'_3' : '(a) A [[Burglar\'s Pack|burglarspack]], (b) a [[Dungeoneer\'s Pack|dungeoneerspack]], or (c) an [[Explorer\'s Pack|explorerspack]]',
				'_4' : '[[Leather Armor|leatherarmor]], two daggers, and Thieves\' Tools'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Dexterity 13',
			'Proficiencies' : 'Light armor, one skill from the class\'s skill list, thieves\' tools'
		},
		'Personality' :
		{
			'Guilty Pleasure' :
			[
				'Large gems',
				'A smile from a pretty face',
				'A new ring for your finger',
				'The chance to deflate someone\'s ego',
				'The finest food and drink',
				'Adding to your collection of exotic coins',
				'_none',
				'_none',
				'_none'
			],
			'Adversary' :
			[
				'The pirate captain on whose ship you once served; what you call moving on, the captain calls mutiny',
				'A master spy to whom you unwittingly fed bad information, which led to the assassination of the wrong target',
				'The master of the local thieves\' guild, who wants you to join the organization or leave town',
				'An art collector who uses illegal means to acquire masterpieces',
				'A fence who uses you as a messenger to set up illicit meetings',
				'The proprietor of an illegal pit fighting arena where you once took bets',
				'_none',
				'_none',
				'_none'
			],
			'Benefactor' :
			[
				'A smuggler kept you from getting caught but lost a valuable shipment in doing so. Now you owe that person an equally valuable favor.',
				'The Beggar King has hidden you from your pursuers many times, in return for future considerations.',
				'A magistrate once kept you out of jail in return for information on a powerful crime lord.',
				'Your parents used their savings to bail you out of trouble in your younger days and are now destitute.',
				'A dragon didn\'t eat you when it had a chance, and in return you promised to set aside choice pieces of treasure for it.',
				'A druid once helped you out of a tight spot; now any random animal you see could be that benefactor, perhaps come to claim a return favor.',
				'_none',
				'_none',
				'_none'
			],
			'Became a rogue because' :
			[
				'I\'ve always been nimble and quick of wit, so I decided to use those talents to help me make my way in the world.',
				'An assassin or a thief wronged me, so I focused my training on mastering the skills of my enemy to better combat foes of that sort.',
				'An experienced rogue saw something in me and taught me several useful tricks.',
				'I decided to turn my natural lucky streak into the basis of a career, though I still realize that improving my skills is essential.',
				'I took up with a group of ruffians who showed me how to get what I want through sneakiness rather than direct confrontation.',
				'I\'m a sucker for a shiny bauble or a sack of coins, as long as I can get my hands on it without risking life and limb.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Sorcerer',
		'Sorcerous Origin' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'Draconic Bloodline', 'Wild Magic' ],
			'XGtE' : [ 'Divine Soul', 'Shadow Magic' ],
			'SCAG/XGtE' : [ 'Storm Sorcery' ],
			'UA' : [ 'Phoenix Sorcery', 'Sea Sorcery', 'Stone Sorcery' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d6 per sorcerer level',
				'Hit Points at 1st Level' : '6 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d6 (or 4) + your Constitution modifier per sorcerer level after 1st'
			},
			'Proficiencies' :
			{
				'Weapons' : 'Daggers, darts, slings, quarterstaffs, light crossbows',
				'Saving Throws' : 'Constitution, Charisma',
				'Skills' : 'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion'
			},
			'Equipment' :
			{
				'_1' : '(a) A Light Crossbow and 20 bolts or (b) any simple weapon',
				'_2' : '(a) A Component pouch or (b) an arcane focus',
				'_3' : '(a) A [[Dungeoneer\'s Pack|dungeoneerspack]] or (b) an [[Explorer\'s Pack|explorerspack]]',
				'_4' : 'Two daggers'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Charisma 13',
			'Proficiencies' : 'None'
		},
		'Personality' :
		{
			'Arcane Origins' :
			[
				'Your power arises from your family\'s bloodline. You are related to some powerful creature, or you inherited a blessing or a curse.',
				'You are the reincarnation of a being from another plane of existence',
				'A powerful entity entered the world. Its magic changed you.',
				'Your birth was prophesied in an ancient text, and you are foretold to use your power for terrible ends.',
				'You are the product of generations of careful, selective breeding',
				'You were made in a vat by an alchemist',
				'_none',
				'_none',
				'_none'
			],
			'Reaction' :
			[
				'Your powers are seen as a great blessing by those around you, and you are expected to use them in service to your community.',
				'Your powers caused destruction and even a death when they became evident, and you were treated as a criminal.',
				'Your neighbors hate and fear your power, causing them to shun you.',
				'You came to the attention of a sinister cult that plans on exploiting your abilities.',
				'People around you believe that your powers are a curse levied on your family for a past transgression.',
				'Your powers are believed to be tied to an ancient line of mad kings that supposedly ended in a bloody revolt over a century ago.',
				'_none',
				'_none',
				'_none'
			],
			'Supernatural Mark' :
			[
				'Your eyes are an unusual color, such as red.',
				'You have an extra toe on one foot.',
				'One of your ears is noticeably larger than the other.',
				'Your hair grows at a prodigious rate.',
				'You wrinkle your nose repeatedly while you are chewing.',
				'A red splotch appears on your neck once a day, then vanishes after an hour.',
				'_none',
				'_none',
				'_none'
			],
			'Sign of Sorcery' :
			[
				'You deliver the verbal components of your spells in the booming voice of a titan.',
				'For a moment after you cast a spell, the area around you grows dark and gloomy.',
				'You sweat profusely while casting a spell and for a few seconds thereafter.',
				'Your hair and garments are briefly buffeted about as if by a breeze, whenever you call forth a spell.',
				'If you are standing when you cast a spell, you rise six inches into the air and gently float back down.',
				'Illusory blue flames wreathe your head as you begin your casting, then abruptly disappear.',
				'_none',
				'_none',
				'_none'
			],
			'Became a sorcerer because' :
			[
				'When I was born, all the water in the house froze solid, the milk spoiled, or all the iron turned to copper. My family is convinced that this event was a harbinger of stranger things to come for me.',
				'I suffered a terrible emotional or physical strain, which brought forth my latent magical power. I have fought to control it ever since.',
				'My immediate family never spoke of my ancestors, and when I asked, they would change the subject. It wasn\'t until I started displaying strange talents that the full truth of my heritage came out.',
				'When a monster threatened one of my friends, I became filled with anxiety. I lashed out instinctively and blasted the wretched thing with a force that came from within me.',
				'Sensing something special in me, a stranger taught me how to control my gift.',
				'After I escaped from a magical conflagration, I realized that though I was unharmed, I was not unchanged. I began to exhibit unusual abilities that I am just beginning to understand.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Warlock',
		'Otherworldly Patron' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'The Archfey', 'The Fiend', 'The Great Old One' ],
			'SCAG' : [ 'The Undying' ],
			'XGtE' : [ 'The Celestial', 'The Hexblade' ],
			'UA' : [ 'The Seeker', 'The Raven Queen' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per warlock level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per warlock level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor',
				'Weapons' : 'Simple Weapons',
				'Saving Throws' : 'Wisdom, Charisma',
				'Skills' : 'Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion'
			},
			'Equipment' :
			{
				'_1' : '(a) A Light Crossbow and 20 bolts or (b) any simple weapon',
				'_2' : '(a) A Component pouch or (b) an arcane focus',
				'_3' : '(a) A [[Scholar\'s Pack|scholarspack]] or (b) a [[Dungeoneer\'s Pack|dungeoneerspack]]',
				'_4' : '[[Leather Armor|leatherarmor]], any simple weapon, and two daggers'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Charisma 13',
			'Proficiencies' : 'Light armor, simple weapons'
		},
		'Personality' :
		{
			'Patron Attitudes' :
			[
				'Your patron has guided and helped your family for generations and is kindly toward you.',
				'Each interaction with your capricious patron is a surprise, whether pleasant or painful.',
				'Your patron is the spirit of a long-dead hero who sees your pact as a way for it to continue to influence the world.',
				'Your patron is a strict disciplinarian but treats you with a measure of respect.',
				'Your patron tricked you into a pact and treats you as a slave.',
				'You are mostly left to your own devices with no interference from your patron. Sometimes you dread the demands it will make when it does appear.',
				'_none',
				'_none',
				'_none'
			],
			'Special Terms' :
			[
				'When directed, you must take immediate action against a specific enemy of your patron.',
				'Your pact tests your willpower; you are required to abstain from alcohol and other intoxicants.',
				'At least once a day, you must inscribe or carve your patron\'s name or symbol on the wall of a building.',
				'You must occasionally conduct bizarre rituals to maintain your pact.',
				'You can never wear the same outfit twice, since your patron finds such predictability to be boring.',
				'When you use an eldritch invocation, you must speak your patron\'s name aloud or risk incurring its displeasure.',
				'_none',
				'_none',
				'_none'
			],
			'Binding Mark' :
			[
				'One of your eyes looks the same as one of your patron\'s eyes.',
				'Each time you wake up, the small blemish on your face appears in a different place.',
				'You display outward symptoms of a disease but suffer no ill effects from it.',
				'Your tongue is an unnatural color.',
				'You have a vestigial tail.',
				'Your nose glows in the dark.',
				'_none',
				'_none',
				'_none'
			],
			'Became a warlock because' :
			[
				'While wandering around in a forbidden place, I encountered an otherworldly being that offered to enter into a pact with me.',
				'I was examining a strange tome I found in an abandoned library when the entity that would become my patron suddenly appeared before me.',
				'I stumbled into the clutches of my patron after I accidentally stepped through a magical doorway.',
				'When I was faced with a terrible crisis, I prayed to any being who would listen, and the creature that answered became my patron.',
				'My future patron visited me in my dreams and offered great power in exchange for my service.',
				'One of my ancestors had a pact with my patron, so that entity was determined to bind me to the same agreement.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Wizard',
		'Arcane Tradition' :
		{
			'_special' : 'booksort',
			'PHB' : [ 'School of Abjuration', 'School of Conjuration', 'School of Divination', 'School of Enchantment', 'School of Evocation', 'School of Illusion', 'School of Necromancy', 'School of Transmutation' ],
			'SCAG' : [ 'Bladesinging' ],
			'XGtE' : [ 'War Magic' ],
			'UA' : [ 'Theurgy', 'School of Invention' ]
		},
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d6 per wizard level',
				'Hit Points at 1st Level' :' 6 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d6 (or 4) + your Constitution modifier per wizard level after 1st'
			},
			'Proficiencies' :
			{
				'Weapons' : 'Daggers, darts, slings, quarterstaffs, light crossbows',
				'Saving Throws' : 'Intelligence, Wisdom',
				'Skills' : 'Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion'
			},
			'Equipment' :
			{
				'_1' : '(a) A Quarterstaff or (b) a Dagger',
				'_2' : '(a) A Component pouch or (b) an arcane focus',
				'_3' : '(a) A [[Scholar\'s Pack|scholarspack]] or (b) an [[Explorer\'s Pack|explorerspack]]',
				'_4' : 'A Spellbook'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Intelligence 13',
			'Proficiencies' : 'None'
		},
		'Personality' :
		{
			'Spellbook' :
			[
				'A tome with pages that are thin sheets of metal spells etched into them with acid',
				'Long straps of leather on which spells are written, wrapped around a staff for ease of transport',
				'A battered tome filled with pictographs that only you can understand',
				'Small stones inscribed with spells and kept in a cloth bag',
				'A scorched book, ravaged by dragon fire, with the script of your spells barely visible on its pages',
				'A tome full of black pages whose writing is visible only in dim light or darkness',
				'_none',
				'_none',
				'_none'
			],
			'Ambition' :
			[
				'You will prove that the gods aren\'t as powerful as folk believe.',
				'Immortality is the end goal of your studies.',
				'If you can fully understand magic, you can unlock its use for all and usher in an era of equality.',
				'Magic is a dangerous tool. You use it to protect what you treasure.',
				'Arcane power must be taken away from those who would abuse it.',
				'You will become the greatest wizard the world has seen in generations.',
				'_none',
				'_none',
				'_none'
			],
			'Eccentricity' :
			[
				'You have the habit of tapping your foot incessantly, which often annoys those around you.',
				'Your memory is quite good, but you have no trouble pretending to be absent minded when it suits your purposes.',
				'You never enter a room without looking to see what\'s hanging from the ceiling.',
				'Your most prized possession is a dead worm that you keep inside a potion vial.',
				'When you want people to leave you alone, you start talking to yourself. That usually does the trick.',
				'Your fashion sense and grooming, or more accurately lack thereof, sometimes causes others to assume you are a beggar.',
				'_none',
				'_none',
				'_none'
			],
			'Became a wizard because' :
			[
				'An old wizard chose me from among several candidates to serve an apprenticeship.',
				'When I became lost in a forest, a hedge wizard found me, took me in, and taught me the rudiments of magic.',
				'I grew up listening to tales of great wizards and knew I wanted to follow their path. I strove to be accepted at an academy of magic and succeeded.',
				'One of my relatives was an accomplished wizard who decided I was smart enough to learn the craft.',
				'While exploring an old tomb, library, or temple, I found a spellbook. I was immediately driven to learn all I could about becoming a wizard.',
				'I was a prodigy who demonstrated mastery of the arcane arts at an early age. When I became old enough to set out on my own, I did so to learn more magic and expand my power.'
			]
		}
	},
	{
		'_special' : 'book-UA',
		'_name' : 'Artificer',
		'Artificer Specialty' : [ 'Alchemist', 'Gunsmith' ],
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per artificer level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per artificer level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light and medium armor',
				'Weapons' : 'Simple weapons',
				'Tools' : 'Thieves tools, two other tools of your choice',
				'Saving Throws' : 'Constitution, Intelligence',
				'Skills' : 'Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, Sleight of Hand'
			},
			'Equipment' :
			{
				'_1' : '(a) A handaxe and a light hammer or (b)any two simple weapons',
				'_2' : 'A light crossbow and 20 bolts',
				'_3' : '(a) [[Scale mail|scalemailarmor]] or (b) [[studded leather armor|studdedleatherarmor]]',
				'_4' : 'Thieves\'tools and a [[Dungeoneer\'s Pack|dungeoneerspack]]'
			}
		},
	},
	{
		'_special' : 'book-UA',
		'_name' : 'Mystic',
		'Mystic Order' : [ 'Order of the Avatar', 'Order of the Awakened', 'Order of the Immortal', 'Order of the Nomad', 'Order of the Soul Knife', 'Order of the Wu Jen' ],
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d8 per mystic level',
				'Hit Points at 1st Level' : '8 + your Constitution modifier',
				'Hit Points at Higher Levels' : '1d8 (or 5) + your Constitution modifier per mystic level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light armor',
				'Weapons' : 'Simple weapons',
				'Saving Throws' : 'Intelligence, Wisdom',
				'Skills' : 'Choose two skills from Arcana, History, Insight, Medicine, Nature, Perception, and Religion'
			},
			'Equipment' :
			{
				'_1' : '(a) A spear or (b) a mace',
				'_2' : '(a) [[Leather armor|leatherarmor]] or (b) [[studded leather armor|studdedleatherarmor]]',
				'_3' : '(a) A light crossbow and 20 bolts or (b) any simple weapon',
				'_4' : '(a) A [[Scholar\'s Pack|scholarspack]] or (b) an [[Explorer\'s Pack|explorerspack]])'
			}
		},
	},
	{
		'_special' : 'book-Unofficial',
		'_name' : 'Blood Hunter',
		'Blood Hunter Order' : [ 'Order of the Ghostslayer', 'Order of the Profane Soul', 'Order of the Mutant' ],
		'Starting Stats' :
		{
			'Hit Points' :
			{
				'Hit Dice' : '1d10 per blood hunter level',
				'Hit Points at 1st level' : '10 + your Constitution modifier per blood hunter level after 1st',
				'Hit Points at Higher Levels' : '1d10 (or 6) + your Constitution modifier per blood hunter level after 1st'
			},
			'Proficiencies' :
			{
				'Armor' : 'Light Armor Medium Armor',
				'Weapons' : 'Simple Weapons, Martial Weapons',
				'Tools' : 'Alchemist\'s supplies',
				'Saving Throws' : 'Strength, Wisdom',
				'Skills' : 'Choose two from Athletics, Acrobatics, Arcana, Insight, Investigation, and Survival'
			},
			'Equipment' :
			{
				'_1' : '(a) A martial weapon or (b) two simple weapons',
				'_2' : '(a) A light crossbow and 20 bolts or (b) hand crossbow and 20 bolts',
				'_3' : '(a) [[Studded leather|studdedleatherarmor]] armor or (b) [[scale mail||scalemailarmor]] armor',
				'_4' : 'An [[Explorer\'s Pack|explorerspack]]'
			}
		},
		'Multiclassing' :
		{
			'_special' : 'ignoreinchargen',
			'Prerequisite' : 'Strength 13 or Dexterity 13, and Wisdom 13',
			'Proficiencies' : 'Light armor, medium armor, simple weapons, martial weapons, alchemical supplies'
		}
	}
]

var backgrounds =
[
	{
		'_special' : 'book-PHB',
		'_name' : 'Acolyte',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Insight, Religion',
			'Languages' : 'Two of your choice',
			'Equipment' : 'A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp',
			'Shelter of the Faithful' : 'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I idolize a particular hero of my faith, and constantly refer to that person\'s deeds and example.',
				'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.',
				'I see omens in every event and action. The gods try to speak to us, we just need to listen.',
				'Nothing can shake my optimistic attitude.',
				'I quote (or misquote) sacred texts and proverbs in almost every situation.',
				'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
				'I\'ve enjoyed fine food, drink, and high society among my temple\'s elite. Rough living grates on me.',
				'I\'ve spent so long in the temple that I have little practical experience dealing with people in the outside world.'
			],
			'Ideal' :
			[
				'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)',
				'Charity. I always try to help those in need, no matter what the personal cost. (Good)',
				'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)',
				'Power. I hope to one day rise to the top of my faith\'s religious hierarchy. (Lawful)',
				'Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)',
				'Aspiration. I seek to prove myself worthy of my god\'s favor by matching my actions against his or her teachings. (Any)'
			],
			'Bond' :
			[
				'I would die to recover an ancient relic of my faith that was lost long ago.',
				'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
				'I owe my life to the priest who took me in when my parents died.',
				'Everything I do is for the common people.',
				'I will do anything to protect the temple where I served.',
				'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'
			],
			'Flaw' :
			[
				'I judge others harshly, and myself even more severely.',
				'I put too much trust in those who wield power within my temple\'s hierarchy.',
				'My piety sometimes leads me to blindly trust those that profess faith in my god.',
				'I am inflexible in my thinking.',
				'I am suspicious of strangers and expect the worst of them.',
				'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.'
			],
			'Became an acolyte because' :
			[
				'I ran away from home at an early age and found refuge in a temple.',
				'My family gave me to a temple, since they were unable or unwilling to care for me.',
				'I grew up in a household with strong religious convictions. Entering the service of one or more gods seemed natural.',
				'An impassioned sermon struck a chord deep in my soul and moved me to serve the faith.',
				'I followed a childhood friend, a respected acquaintance, or someone I loved into religious service. ',
				'After encountering a true servant of the gods, I was so inspired that I immediately entered the service of a religious group.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Charlatan',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Deception, Sleight of Hand',
			'Tool Proficiencies' : 'Disguise Kit, Forgery Kit',
			'Equipment' : 'A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a belt pouch containing 15 gp',
			'False Identity' : 'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I fall in and out of love easily, and am always pursuing someone.',
				'I have a joke for every occasion, especially occasions where humor is inappropriate.',
				'Flattery is my preferred trick for getting what I want.',
				'I\'m a born gambler who can\'t resist taking a risk for a potential payoff.',
				'I lie about almost everything, even when there\'s no good reason to.',
				'Sarcasm and insults are my weapons of choice.',
				'I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.',
				'I pocket anything I see that might have some value.'
			],
			'Ideal' :
			[
				'Independence. I am a free spirit- no one tells me what to do. (Chaotic)',
				'Fairness. I never target people who can\'t afford to lose a few coins. (Lawful)',
				'Charity. I distribute the money I acquire to the people who really need it. (Good)',
				'Creativity. I never run the same con twice. (Chaotic)',
				'Friendship. Material goods come and go. Bonds of friendship last forever. (Good)',
				'Aspiration. I\'m determined to make something of myself. (Any)'
			],
			'Bond' :
			[
				'I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.',
				'I owe everything to my mentor- a horrible person who\'s probably rotting in jail somewhere.',
				'Somewhere out there, I have a child who doesn\'t know me. I\'m making the world better for him or her.',
				'I come from a noble family, and one day I\'ll reclaim my lands and title from those who stole them from me.',
				'A powerful person killed someone I love. Some day soon, I\'ll have my revenge.',
				'I swindled and ruined a person who didn\'t deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.'
			],
			'Flaw' :
			[
				'I can\'t resist a pretty face.',
				'I\'m always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.',
				'I\'m convinced that no one could ever fool me the way I fool others.',
				'I\'m too greedy for my own good. I can\'t resist taking a risk if there\'s money involved.',
				'I can\'t resist swindling people who are more powerful than me.',
				'I hate to admit it and will hate myself for it, but I\'ll run and preserve my own hide if the going gets tough.'
			],
			'Scam' :
			[
				'I cheat at games of chance.',
				'I shave coins or forge documents.',
				'I insinuate myself into people\'s lives to prey on their weakness and secure their fortunes.',
				'I put on new identities like clothes.',
				'I run sleight-of-hand cons on street corners.',
				'I convince people that worthless junk is worth their hard-earned money.'
			],
			'Became a charlatan because' :
			[
				'I was left to my own devices, and my knack for manipulating others helped me survive.',
				'I learned early on that people are gullible and easy to exploit.',
				'I often got in trouble, but I managed to talk my way out of it every time.',
				'I took up with a confidence artist, from whom I learned my craft.',
				'After a charlatan fleeced my family, I decided to learn the trade so I would never be fooled by such deception again.',
				'I was poor or I feared becoming poor, so I learned the tricks I needed to keep myself out of poverty.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Criminal',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Deception, Stealth',
			'Tool Proficiencies': 'One type of gaming set, thieves\' tools',
			'Equipment': 'A crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 GP.',
			'Criminal Contact' : 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.'
		},
		'Optional Variant' : 'Spy',
		'Personality' :
		{
			'Trait' :
			[
				'I always have a plan for what to do when things go wrong.',
				'I am always calm, no matter what the situation. I never raise my voice or let emotions control me.',
				'The first thing I do in a new place is note the locations of everything valuable- or where such things could be hidden.',
				'I would rather make a new friend than a new enemy.',
				'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.',
				'I don\'t pay attention to the risks in a situation. Never tell me the odds.',
				'The best way to get me to do something is to tell me I can\'t do it.',
				'I blow up at the slightest insult.'
			],
			'Ideal' :
			[
				'Honor.  I don\'t steal from others in the trade. (Lawful)',
				'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)',
				'Charity.  I steal from the wealthy so that I can help people in need. (Good)',
				'Greed.  I will do whatever it takes to become wealthy. (Evil)',
				'People. I\'m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)',
				'Redemption. There\'s a spark of good in everyone. (Good)'
			],
			'Bond' :
			[
				'I\'m trying to pay off an old debt I owe to a generous benefactor.',
				'My ill-gotten gains go to support my family.',
				'Something important was taken from me, and I aim to steal it back.',
				'I will become the greatest thief that ever lived.',
				'I\'m guilty of a terrible crime. I hope I can redeem myself for it.',
				'Someone I loved died because of a mistake I made. That will never happen again.'
			],
			'Flaw' :
			[
				'When I see something valuable, I can\'t think about anything but how to steal it.',
				'When faced with a choice between money and my friends, I usually choose the money.',
				'If there\'s a plan, I\'ll forget it. If I don\'t forget it, I\'ll ignore it.',
				'I have a "tell” that reveals when I\'m lying.',
				'I turn tail and run when things look bad.',
				'An innocent person is in prison for a crime that I committed. I\'m okay with that.'
			],
			'Became a criminal because' :
			[
				'I resented authority in my younger days and saw a life of crime as the best way to fight against tyranny and oppression',
				'Necessity forced me to take up the life, since it was the only way I could survive.',
				'I fell in with a gang of reprobates and ne\'er-do-wells, and I learned my specialty from them.',
				'A parent or relative taught me my criminal specialty to prepare me for the family business.', 'I left home and found a place in a thieves\' guild or some other criminal organization.',
				'I was always bored, so I turned to crime to pass the time and discovered I was quite good at it.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Entertainer',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Acrobatics, Performance',
			'Tool Proficiencies' : 'Disguise kit, one type of musical instrument',
			'Equipment' : 'A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a belt pouch containing 15 gp',
			'By Popular Demand' : 'You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble\'s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.'
		},
		'Optional Variant' : 'Gladiator**Using your By Popular Demand feature, you can find a place to perform in any place that features combat for entertainment- perhaps a gladiatorial arena or secret pit fighting club. You can replace the musical instrument in your equipment package with an inexpensive but unusual weapon, such as a trident or net.',
		'Personality' :
		{
			'Trait' :
			[
				'I know a story relevant to almost every situation.',
				'Whenever I come to a new place, I collect local rumors and spread gossip.',
				'I\'m a hopeless romantic, always searching for that "special someone.”',
				'Nobody stays angry at me or around me for long, since I can defuse any amount of tension.',
				'I love a good insult, even one directed at me.',
				'I get bitter if I\'m not the center of attention.',
				'I\'ll settle for nothing less than perfection.',
				'I change my mood or my mind as quickly as I change key in a song.'
			],
			'Ideal' :
			[
				'Beauty. When I perform, I make the world better than it was. (Good)',
				'Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)',
				'Creativity. The world is in need of new ideas and bold action. (Chaotic)',
				'Greed. I\'m only in it for the money and fame. (Evil)',
				'People. I like seeing the smiles on people\'s faces when I perform. That\'s all that matters. (Neutral)',
				'Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)'
			],
			'Bond' :
			[
				'My instrument is my most treasured possession, and it reminds me of someone I love.',
				'Someone stole my precious instrument, and someday I\'ll get it back.',
				'I want to be famous, whatever it takes.',
				'I idolize a hero of the old tales and measure my deeds against that person\'s.',
				'I will do anything to prove myself superior to my hated rival.',
				'I would do anything for the other members of my old troupe.'
			],
			'Flaw' :
			[
				'I\'ll do anything to win fame and renown.',
				'I\'m a sucker for a pretty face.',
				'A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.',
				'I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.',
				'I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.',
				'Despite my best efforts, I am unreliable to my friends.'
			],
			'Routine' : [ 'Actor', 'Instrumentalist', 'Dancer', 'Poet', 'Fire-eater', 'Singer', 'Jester', 'Storyteller', 'Juggler', 'Tumbler' ],
			'Became an entertainer because' :
			[
				'Members of my family made ends meet by performing, so it was fitting for me to follow their example.',
				'I always had a keen insight into other people, enough so that I could make them laugh or cry with my stories or songs.',
				'I ran away from home to follow a minstrel troupe.',
				'I saw a bard perform once, and I knew from that moment on what I was born to do.',
				'I earned coin by performing on street corners and eventually made a name for myself.',
				'A traveling entertainer took me in and taught me the trade.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Folk Hero',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Animal Handling, Survival',
			'Tool Proficiencies' : 'One type of artisan\'s tools, vehicles (land)',
			'Equipment' : 'A set of artisan\'s tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a belt pouch containing 10 gp',
			'Rustic Hospitality' : 'Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I judge people by their actions, not their words.',
				'If someone is in trouble, I\'m always ready to lend help.',
				'When I set my mind to something, I follow through no matter what gets in my way.',
				'I have a strong sense of fair play and always try to find the most equitable solution to arguments.',
				'I\'m confident in my own abilities and do what I can to instill confidence in others.',
				'Thinking is for other people. I prefer action.',
				'I misuse long words in an attempt to sound smarter.',
				'I get bored easily. When am I going to get on with my destiny?'
			],
			'Ideal' :
			[
				'Respect. People deserve to be treated with dignity and respect. (Good)',
				'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)',
				'Freedom. Tyrants must not be allowed to oppress the people.  (Chaotic)',
				'Might. If I become strong, I can take what I want- what I deserve. (Evil)',
				'Sincerity. There\'s no good in pretending to be something I\'m not. (Neutral)',
				'Destiny. Nothing and no one can steer me away from my higher calling. (Any)'
			],
			'Bond' :
			[
				'I have a family, but I have no idea where they are. One day, I hope to see them again.',
				'I worked the land, I love the land, and I will protect the land.',
				'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.',
				'My tools are symbols of my past life, and I carry them so that I will never forget my roots.',
				'I protect those who cannot protect themselves.',
				'I wish my childhood sweetheart had come with me to pursue my destiny.'
			],
			'Flaw' :
			[
				'The tyrant who rules my land will stop at nothing to see me killed.',
				'I\'m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.',
				'The people who knew me when I was young know my shameful secret, so I can never go home again.',
				'I have a weakness for the vices of the city, especially hard drink.',
				'Secretly, I believe that things would be better if I were a tyrant lording over the land.',
				'I have trouble trusting in my allies.'
			],
			'Defining Event' :
			[
				'I stood up to a tyrant\'s agents.',
				'I saved people during a natural disaster.',
				'I stood alone against a terrible monster.',
				'I stole from a corrupt merchant to help the poor.',
				'I led a militia to fight off an invading army.',
				'I broke into a tyrant\'s castle and stole weapons to arm the people.',
				'I trained the peasantry to use farm implements as weapons against a tyrant\'s soldiers.',
				'A lord rescinded an unpopular decree after I led a symbolic act of protect against it.',
				'A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.',
				'Recruited into a lord\'s army, I rose to leadership and was commended for my heroism.'
			],
			'Became a folk hero because' :
			[
				'I learned what was right and wrong from my family.',
				'I was always enamored by tales of heroes and wished I could be something more than ordinary.',
				'I hated my mundane life, so when it was time for someone to step up and do the right thing, I took my chance.',
				'A parent or one of my relatives was an adventurer, and I was inspired by that person\'s courage.',
				'A mad old hermit spoke a prophecy when I was born, saying that I would accomplish great things.',
				'I have always stood up for those who are weaker than I am.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Guild Artisan',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Insight, Persuasion',
			'Tool Proficiencies' : 'One type of artisan\'s tools',
			'Languages' : 'One of your choice',
			'Equipment' : 'A set of artisan\'s tools (one of your choice), a letter of introduction from your guild, a set of traveler\'s clothes, and a belt pouch containing 15 gp',
			'Guild Membership' : 'As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild\'s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild\'s good graces.'
		},
		'Optional Variant' : 'Guild Merchant**Rather than proficiency with artisan\'s tools, you might be proficient with navigator\'s tools or an additional language. And instead of artisan\'s tools, you can start with a mule and a cart.',
		'Personality' :
		{
			'Trait' :
			[
				'I believe that anything worth doing is worth doing right. I can\'t help it- I\'m a perfectionist.',
				'I\'m a snob who looks down on those who can\'t appreciate fine art.',
				'I always want to know how things work and what makes people tick.',
				'I\'m full of witty aphorisms and have a proverb for every occasion.',
				'I\'m rude to people who lack my commitment to hard work and fair play.',
				'I like to talk at length about my profession.',
				'I don\'t part with my money easily and will haggle tirelessly to get the best deal possible.',
				'I\'m well known for my work, and I want to make sure everyone appreciates it. I\'m always taken aback when people haven\'t heard of me.'
			],
			'Ideal' :
			[
				'Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)',
				'Generosity. My talents were given to me so that I could use them to benefit the world. (Good)',
				'Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)',
				'Greed. I\'m only in it for the money. (Evil)',
				'People. I\'m committed to the people I care about, not to ideals. (Neutral)',
				'Aspiration. I work hard to be the best there is at my craft. (Any)'
			],
			'Bond' :
			[
				'The workshop where I learned my trade is the most important place in the world to me.',
				'I created a great work for someone, and then found them unworthy to receive it. I\'m still looking for someone worthy.',
				'I owe my guild a great debt for forging me into the person I am today.',
				'I pursue wealth to secure someone\'s love.',
				'One day I will return to my guild and prove that I am the greatest artisan of them all.',
				'I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.'
			],
			'Flaw' :
			[
				'I\'ll do anything to get my hands on something rare or priceless.',
				'I\'m quick to assume that someone is trying to cheat me.',
				'No one must ever learn that I once stole money from guild coffers.',
				'I\'m never satisfied with what I have- I always want more.',
				'I would kill to acquire a noble title.',
				'I\'m horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I\'m surrounded by rivals.'
			],
			'Guild Business' :
				[ 'Alchemists and apothecaries', 'Armorers, locksmiths, and finesmiths', 'Brewers, distillers, and vintners', 'Calligraphers, scribes, and scriveners', 'Carpenters, roofers, and plasterers', 'Cartographers, surveyors, and chart-makers', 'Cobblers and shoemakers', 'Cooks and bakers', 'Glassblowers and glaziers', 'Jewelers and gemcutters', 'Leatherworkers, skinners, and tanners', 'Masons and stonecutters', 'Painters, limners, and sign-makers', 'Potters and tile-makers', 'Shipwrights and sailmakers', 'Smiths and metal-forgers', 'Tinkers, pewterers, and casters', 'Wagon-makers and wheelwrights', 'Weavers and dyers', 'Woodcarvers, coopers, and bowyers' ],
			'Became a guild artisan because' :
			[
				'I was apprenticed to a master who taught me the guild\'s business.',
				'I helped a guild artisan keep a secret or complete a task, and in return I was taken on as an apprentice.',
				'One of my family members who belonged to the guild made a place for me.',
				'I was always good with my hands, so I took the opportunity to learn a trade.',
				'I wanted to get away from my home situation and start a new life.',
				'I learned the essentials of my craft from a mentor but had to join the guild to finish my training.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Hermit',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Medicine, Religion',
			'Tool Proficiencies' : 'Herbalism kit',
			'Languages' : 'One of your choice',
			'Equipment' : 'A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, a herbalism kit, and 5 gp',
			'Discovery' : 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I\'ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.',
				'I am utterly serene, even in the face of disaster.',
				'The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.',
				'I feel tremendous empathy for all who suffer.',
				'I\'m oblivious to etiquette and social expectations.',
				'I connect everything that happens to me to a grand, cosmic plan.',
				'I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.',
				'I am working on a grand philosophical theory and love sharing my ideas.'
			],
			'Ideal' :
			[
				'Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)',
				'Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)',
				'Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)',
				'Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)',
				'Live and Let Live. Meddling in the affairs of others only causes trouble.  (Neutral)',
				'Self-Knowledge. If you know yourself, there\'s nothing left to know. (Any)'
			],
			'Bond' :
			[
				'Nothing is more important than the other members of my hermitage, order, or association.',
				'I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.',
				'I\'m still seeking the enlightenment I pursued in my seclusion, and it still eludes me.',
				'I entered seclusion because I loved someone I could not have.',
				'Should my discovery come to light, it could bring ruin to the world.',
				'My isolation gave me great insight into a great evil that only I can destroy.'
			],
			'Flaw' :
			[
				'Now that I\'ve returned to the world, I enjoy its delights a little too much.',
				'I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.',
				'I am dogmatic in my thoughts and philosophy.',
				'I let my need to win arguments overshadow friendships and harmony.',
				'I\'d risk too much to uncover a lost bit of knowledge.',
				'I like keeping secrets and won\'t share them with anyone.'
			],
			'Life of Seclusion' :
			[
				'I was searching for spiritual enlightenment.',
				'I was partaking of communal living in accordance with the dictates of a religious order.',
				'I was exiled for a crime I didn\'t commit.',
				'I retreated from society after a life-altering event.',
				'I needed a quiet place to work on my art, literature, music, or manifesto.',
				'I needed to commune with nature, far from civilization.',
				'I was the caretaker of an ancient ruin or relic.',
				'I was a pilgrim in search of a person, place, or relic of spiritual significance.'
			],
			'Became a hermit because' :
			[
				'My enemies ruined my reputation, and I fled to the wilds to avoid further disparagement.',
				'I am comfortable with being isolated, as I seek inner peace.',
				'I never liked the people I called my friends, so it was easy for me to strike out on my own.',
				'I felt compelled to forsake my past, but did so with great reluctance, and sometimes I regret making that decision.',
				'I lost everything- my home, my family, my friends. Going it alone was all I could do.',
				'Society\'s decadence disgusted me, so I decided to leave it behind.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Noble',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'History, Persuasion',
			'Tool Proficiencies' : 'One type of gaming set',
			'Languages' : 'One of your choice',
			'Equipment' : 'A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp',
			'Position of Privilege' : 'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk and merchants make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.'
		},
		'Optional Variant' : 'Knight**Choose the Retainers feature instead of the Position of Privilege feature.',
		'Variant Feature' : 'Retainers**If your character has a noble background, you may select this background feature instead of Position of Privilege. You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.',
		'Personality' :
		{
			'Trait' :
			[
				'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.',
				'The common folk love me for my kindness and generosity.',
				'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.',
				'I take great pains to always look my best and follow the latest fashions.',
				'I don\'t like to get my hands dirty, and I won\'t be caught dead in unsuitable accommodations.',
				'Despite my noble birth, I do not place myself above other folk. We all have the same blood.',
				'My favor, once lost, is lost forever.',
				'If you do me an injury, I will crush you, ruin your name, and salt your fields.'
			],
			'Ideal' :
			[
				'Respect. Respect is due to me because of my position, but all  people regardless of station deserve to be treated with dignity. (Good)',
				'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)',
				'Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)',
				'Power. If I can attain more power, no one will tell me what to do. (Evil)',
				'Family. Blood runs thicker than water. (Any)',
				'Noble Obligation. It is my duty to protect and care for the people beneath  me. (Good)'
			],
			'Bond' :
			[
				'I will face any challenge to win the approval of my family.',
				'My house\'s alliance with another noble family must be sustained at all costs.',
				'Nothing is more important than the other members of my family.',
				'I am in love with the heir of a family that my family despises.',
				'My loyalty to my sovereign is unwavering.',
				'The common folk must see me as a hero of the people.'
			],
			'Flaw' :
			[
				'I secretly believe that everyone is beneath me.',
				'I hide a truly scandalous secret that could ruin my family forever.',
				'I too often hear veiled insults and threats in every word addressed to me, and I\'m quick to anger.',
				'I have an insatiable desire for carnal pleasures.',
				'In fact, the world does revolve around me.',
				'By my words and actions, I often bring shame to my family.'
			],
			'Became a noble because' :
			[
				'I come from an old and storied family, and it fell to me to preserve the family name.',
				'My family has been disgraced, and I intend to clear our name.',
				'My family recently came by its title, and that elevation thrust us into a new and strange world.',
				'My family has a title, but none of my ancestors have distinguished themselves since we gained it.',
				'My family is filled with remarkable people. I hope to live up to their example.',
				'I hope to increase my family\'s power and influence.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Outlander',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Athletics, Survival',
			'Tool Proficiencies' : 'One type of musical instrument',
			'Languages' : 'One of your choice',
			'Equipment' : 'A staff, a hunting trap, a trophy from an animal you killed, a set of traveler\'s clothes, and a belt pouch containing 10 gp',
			'Wanderer' : 'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I\'m driven by a wanderlust that led me away from home.',
				'I watch over my friends as if they were a litter of newborn pups.',
				'I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I\'d do it again if I had to.',
				'I have a lesson for every situation, drawn from observing nature.',
				'I place no stock in wealthy or well-mannered folk. Money and manners won\'t save you from a hungry owlbear.',
				'I\'m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.',
				'I feel far more comfortable around animals than people.',
				'I was, in fact, raised by wolves.'
			],
			'Ideal' :
			[
				'Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)',
				'Greater Good. It is each person\'s responsibility to make the most happiness for the whole tribe. (Good)',
				'Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)',
				'Might. The strongest are meant to rule. (Evil)',
				'Nature. The natural world is more important than all the constructs of civilization. (Neutral)',
				'Glory. I must earn glory in battle, for myself and my clan. (Any)'
			],
			'Bond' :
			[
				'My family, clan, or tribe is the most important thing in my life, even when they are far from me.',
				'An injury to the unspoiled wilderness of my home is an injury to me.',
				'I will bring terrible wrath down on the evildoers who destroyed my homeland.',
				'I am the last of my tribe, and it is up to me to ensure their names enter legend.',
				'I suffer awful visions of a coming disaster and will do anything to prevent it.',
				'It is my duty to provide children to sustain my tribe.'
			],
			'Flaw' :
			[
				'I am too enamored of ale, wine, and other intoxicants.',
				'There\'s no room for caution in a life lived to the fullest.',
				'I remember every insult I\'ve received and nurse a silent resentment toward anyone who\'s ever wronged me.',
				'I am slow to trust members of other races, tribes, and societies.',
				'Violence is my answer to almost any challenge.',
				'Don\'t expect me to save those who can\'t save themselves. It is nature\'s way that the strong thrive and the weak perish.'
			],
			'Origin' : [ 'Forester', 'Bounty hunter', 'Trapper', 'Pilgrim', 'Homesteader', 'Tribal nomad', 'Guide', 'Hunter-gatherer', 'Exile or outcast', 'Tribal marauder' ],
			'Became an outlander because' :
			[
				'I spent a lot of time in the wilderness as a youngster, and I came to love that way of life.',
				'From a young age, I couldn\'t abide the stink of the cities and preferred to spend my time in nature.',
				'I came to understand the darkness that lurks in the wilds, and I vowed to combat it.',
				'My people lived on the edges of civilization, and I learned the methods of survival from my family.',
				'After a tragedy I retreated to the wilderness, leaving my old life behind. My family moved away from civilization, and I learned to adapt to my new environment.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Sage',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Arcana, History',
			'Languages' : 'Two of your choice',
			'Equipment' : 'A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and a belt pouch containing 10 gp',
			'Researcher' : 'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I use polysyllabic words that convey the impression of great erudition.',
				'I\'ve read every book in the world\'s greatest libraries - or I like to boast that I have.',
				'I\'m used to helping out those who aren\'t as smart as I am, and I patiently explain anything and everything to others.',
				'There\'s nothing I like more than a good mystery.',
				'I\'m willing to listen to every side of an argument before I make my own judgment.',
				'I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.',
				'I am horribly, horribly awkward in social situations.',
				'I\'m convinced that people are always trying to steal my secrets.'
			],
			'Ideal' :
			[
				'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)',
				'Beauty. What is beautiful points us beyond itself toward what is true. (Good)',
				'Logic. Emotions must not cloud our logical thinking. (Lawful)',
				'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)',
				'Power. Knowledge is the path to power and domination. (Evil)',
				'Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)'
			],
			'Bond' :
			[
				'It is my duty to protect my students.',
				'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.',
				'I work to preserve a library, university, scriptorium, or monastery.',
				'My life\'s work is a series of tomes related to a specific field of lore.',
				'I\'ve been searching my whole life for the answer to a certain question.',
				'I sold my soul for knowledge. I hope to do great deeds and win it back.'
			],
			'Flaw' :
			[
				'I am easily distracted by the promise of information.',
				'Most people scream and run when they see a demon. I stop and take notes on its anatomy.',
				'Unlocking an ancient mystery is worth the price of a civilization.',
				'I overlook obvious solutions in favor of complicated ones.',
				'I speak without really thinking through my words, invariably insulting others.',
				'I can\'t keep a secret to save my life, or anyone else\'s.'
			],
			'Specialty' : [ 'Alchemist', 'Professor', 'Astronomer', 'Researcher', 'Discredited academic', 'Wizard\'s apprentice', 'Scribe', 'Librarian' ],
			'Became a sage because' :
			[
				'I was naturally curious, so I packed up and went to a university to learn more about the world.',
				'My mentor\'s teachings opened my mind to new possibilities in that field of study',
				'I was always an avid reader, and I learned much about my favorite topic on my own.',
				'I discovered an old library and pored over the texts I found there. That experience awakened a hunger for more knowledge.',
				'I impressed a wizard who told me I was squandering my talents and should seek out an education to take advantage of my gifts.',
				'One of my paretns or a relative gave me a basic education that whetted my appetite, and I left home to build on what I had learned.'
				
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Sailor',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Athletics, Perception',
			'Tool Proficiencies' : 'Navigator\'s tools, vehicles (water)',
			'Equipment' : 'A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a belt pouch containing 10 gp',
			'Ship\'s Passage' : 'When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you\'re calling in a favor, you can\'t be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.'
		},
		'Optional Variant' : 'Pirate**If you decide that your sailing career involved piracy, you can choose the Bad Reputation feature instead of the Ship\'s Passage feature.',
		'Variant Feature' : 'Bad Reputation**If your character has a sailor background, you may select this background feature instead of Ship\'s Passage. No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.',
		'Personality' :
		{
			'Trait' :
			[
				'My friends know they can rely on me, no matter what.',
				'I work hard so that I can play hard when the work is done.',
				'I enjoy sailing into new ports and making new friends over a flagon of ale.',
				'I stretch the truth for the sake of a good story.',
				'To me, a tavern brawl is a nice way to get to know a new city.',
				'I never pass up a friendly wager.',
				'My language is as foul as an otyugh nest.',
				'I like a job well done, especially if I can convince someone else to do it.'
			],
			'Ideal' :
			[
				'Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)',
				'Fairness. We all do the work, so we all share in the rewards.  (Lawful)',
				'Freedom. The sea is freedom- the freedom to go anywhere and do anything. (Chaotic)',
				'Mastery. I\'m a predator, and the other ships on the sea are my prey. (Evil)',
				'People. I\'m committed to my crewmates, not to ideals. (Neutral)',
				'Aspiration. Someday I\'ll own my own ship and chart my own destiny. (Any)'
			],
			'Bond' :
			[
				'I\'m loyal to my captain first, everything else second.',
				'The ship is most important- crewmates and captains come and go.',
				'I\'ll always remember my first ship.',
				'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.',
				'I was cheated out of my fair share of the profits, and I want to get my due.',
				'Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.'
			],
			'Flaw' :
			[
				'I follow orders, even if I think they\'re wrong.',
				'I\'ll say anything to avoid having to do extra work.',
				'Once someone questions my courage, I never back down no matter how dangerous the situation.',
				'Once I start drinking, it\'s hard for me to stop.',
				'I can\'t help but pocket loose coins and other trinkets I come across.',
				'My pride will probably lead to my destruction.'
			],
			'Became a sailor because' :
			[
				'I was pressganged by pirates and forced to serve on their ship until I finally escaped.',
				'I wanted to see the world, so I signed on as a deckhand for a merchant ship.',
				'One of my relatives was a sailor who took me to sea.',
				'I needed to escape my community quickly, so I stowed away on a ship. When the crew found me, I was forced to work for my passage.',
				'Reavers attacked my community, so I found refuge on a ship until I could seek vengeance.',
				'I had few prospects where I was living, so I left to find my fortune elsewhere.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Soldier',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Athletics, Intimidation',
			'Tool Proficiencies' : 'One type of gaming set, vehicles (land)',
			'Equipment' : 'An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or deck of cards, a set of common clothes, and a belt pouch containing 10 gp',
			'Military Rank' : 'You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I\'m always polite and respectful.',
				'I\'m haunted by memories of war. I can\'t get the images of violence out of my mind.',
				'I\'ve lost too many friends, and I\'m slow to make new ones.',
				'I\'m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.',
				'I can stare down a hell hound without flinching.',
				'I enjoy being strong and like breaking things.',
				'I have a crude sense of humor.',
				'I face problems head-on. A simple, direct solution is the best path to success.'
			],
			'Ideal' :
			[
				'Greater Good. Our lot is to lay down our lives in defense of others. (Good)',
				'Responsibility. I do what I must and obey just authority. (Lawful)',
				'Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)',
				'Might. In life as in war, the stronger force wins. (Evil)',
				'Live and Let Live. Ideals aren\'t worth killing over or going to war for. (Neutral)',
				'Nation. My city, nation, or people are all that matter. (Any)'
			],
			'Bond' :
			[
				'I would still lay down my life for the people I served with.',
				'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
				'My honor is my life.',
				'I\'ll never forget the crushing defeat my company suffered or the enemies who dealt it.',
				'Those who fight beside me are those worth dying for.',
				'I fight for those who cannot fight for themselves.'
			],
			'Flaw' :
			[
				'The monstrous enemy we faced in battle still leaves me quivering with fear.',
				'I have little respect for anyone who is not a proven warrior.',
				'I made a terrible mistake in battle cost many lives- and I would do anything to keep that mistake secret.',
				'My hatred of my enemies is blind and unreasoning.',
				'I obey the law, even if the law causes misery.',
				'I\'d rather eat my armor than admit when I\'m wrong.'
			],
			'Specialty' : [ 'Officer', 'Quartermaster', 'Scout', 'Standard bearer', 'Infantry', 'Support staff (cook, blacksmith, or the like)', 'Cavalry', 'Healer' ],
			'Became a soldier because' :
			[
				'I joined the militia to help protect my community from monsters.',
				'A relative of mine was a soldier, and I wanted to carry on the family tradition.',
				'The local lord forced me to enlist in the army.',
				'War ravaged my homeland while I was growing up. Fighting was the only life I ever knew.',
				'I wanted fame and fortune, so I joined a mercenary company, selling my sword to the highest bidder.',
				'Invaders attacked my homeland. It was my duty to take up arms in defense of my people.'
			]
		}
	},
	{
		'_special' : 'book-PHB',
		'_name' : 'Urchin',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Sleight of Hand, Stealth',
			'Tool Proficiencies' : 'Disguise kit, thieves\' tools',
			'Equipment' : 'A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a belt pouch containing 10 gp',
			'City Secrets' : 'You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I hide scraps of food and trinkets away in my pockets.',
				'I ask a lot of questions.',
				'I like to squeeze into small places where no one else can get to me.',
				'I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.',
				'I eat like a pig and have bad manners.',
				'I think anyone who\'s nice to me is hiding evil intent.',
				'I don\'t like to bathe.',
				'I bluntly say what other people are hinting at or hiding.'
			],
			'Ideal' :
			[
				'Respect. All people, rich or poor, deserve respect. (Good)',
				'Community. We have to take care of each other, because no one else is going to do it.  (Lawful)',
				'Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)',
				'Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)',
				'People. I help the people who help me- that\'s what keeps us alive. (Neutral)',
				'Aspiration. I\'m going to prove that I\'m worthy of a better life. (Any)'
			],
			'Bond' :
			[
				'My town or city is my home, and I\'ll fight to defend it.',
				'I sponsor an orphanage to keep others from enduring what I was forced to endure.',
				'I owe my survival to another urchin who taught me tolive on the streets.',
				'I owe a debt I can never repay to the person who took pity on me.',
				'I escaped my life of poverty by robbing an important person, and I\'m wanted for it.',
				'No one else should have to endure the hardships I\'ve been through.'
			],
			'Flaw' :
			[
				'If I\'m outnumbered, I will run away from a fight.',
				'Gold seems like a lot of money to me, and I\'ll do just about anything for more of it.',
				'I will never fully trust anyone other than myself.',
				'I\'d rather kill someone in their sleep then fight fair.',
				'It\'s not stealing if I need it more than someone else.',
				'People who can\'t take care of themselves get what they deserve.'
			],
			'Became an urchin because' :
			[
				'Wanderlust caused me to leave my family to see the world. I look after myself.',
				'I ran away from a bad situation at home and made my own way in the world.',
				'Monsters wiped out my village, and I was the sole survivor. I had to find a way to survive.',
				'A notorious thief looked after me and other orphans, and we spied and stole to earn our keep.',
				'One day I woke up on the streets, alone and hungry, with no memory of my early childhood.',
				'My parents died, leaving no one to look after me. I raised myself.'
			]
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'City Watch',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Athletics, Insight',
			'Languages' : 'Two of your choice',
			'Equipment' : 'A uniform in the style of your unit and indicative of your rank, a horn with which to summon help, a set of manacles, and a pouch containing 10 gp',
			'Watcher\'s Eye' : 'Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you\'re more likely to be welcome in the former locations rather than the latter.'
		},
		'Optional Variant' : 'Investigator**If your prior experience is as an investigator, you have proficiency in Investigation rather than Athletics.',
		'Personality' :
		{
			'_special' : 'traits-13'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Clan Crafter',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'History, Insight',
			'Tool Proficiencies' : 'One type of artisan\'s tools',
			'Languages' : 'Dwarvish or one other of your choice if you already speak Dwarvish',
			'Equipment' : 'A set of artisan\'s tools with which you are proficient, a maker\'s mark chisel used to mark your handiwork with the symbol of the clan of crafters you learned your skill from, a set of traveler\'s clothes, and a pouch containing 5 gp and a gem worth 10 gp',
			'Respect of the Stout Folk' : 'As well respected as clan crafters are among outsiders, no one esteems them quite so highly as dwarves do. You always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your compatriots) the finest accommodations and assistance.'
		},
		'Personality' :
		{
			'_special' : 'traits-6'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Cloistered Scholar',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'History, plus your choice of one from among Arcana, Nature, and Religion',
			'Languages' : 'Two of your choice',
			'Equipment' : 'The scholar\'s robes of your cloister, a writing kit (small pouch with a quill, ink, folded parchment, and a small penknife), a borrowed book on the subject of your current study, and a pouch containing 10 gp',
			'Library Access' : 'Though others must often endure extensive interviews and significant fees to gain access to even the most common archives in your library, you have free and easy access to the majority of the library, though it might also have repositories of lore that are too valuable, magical,or secret to permit anyone immediate access.You have a working knowledge of your cloister\'s personnel and bureaucracy, and you know how to navigate those connections with some ease. Additionally, you are likely to gain preferential treatment at other libraries across the Realms, as professional courtesy shown to a fellow scholar.'
		},
		'Personality' :
		{
			'_special' : 'traits-10'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Courtier',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Insight, Persuasion',
			'Languages' : 'Two of your choice',
			'Equipment' : 'A set of fine clothes and a pouch containing 5 gp',
			'Court Functionary' : 'Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are.'
		},
		'Personality' :
		{
			'_special' : 'traits-6'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Faction Agent',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Insight and one Intelligence, Wisdom, or Charisma skill of your choice, as appropriate to your faction',
			'Languages' : 'Two of your choice',
			'Equipment' : 'Badge or emblem of your faction, a copy of a seminal faction text (or a code-book for a covert faction), a set of common clothes, and a pouch containing 15 gp',
			'Safe Haven' : 'As a faction agent, you have access to a secret network of supporters and operatives who can provide assistance on your adventures. You know a set of secret signs and passwords you can use to identify such operatives, who can provide you with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives for you or risk revealing their true identities.'
		},
		'Personality' :
		{
			'_special' : 'traits-1'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Far Traveler',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Insight, Perception',
			'Tool Proficiencies' : 'Any one musical instrument or gaming set of your choice, likely something native to your homeland',
			'Languages' : 'Any one of your choice',
			'Equipment' : 'One set of traveler\'s clothes, any one musical instrument or gaming set you are proficient with, poorly wrought maps from your homeland that depict where you are in Faerun, a small piece of jewelry worth 10 gp in the style of your homeland\'s craftsmanship, and a pouch containing 5 gp',
			'All Eyes On You' : 'Your accent, mannerisms, figures of speech, and perhaps even your appearance all mark you as foreign. Curious glances are directed your way wherever you go, which can be a nuisance, but you also gain the friendly interest of scholars and others intrigued by far-off lands, to say nothing of everyday folk who are eager to hear stories of your homeland. You can parley this attention into access to people and places you might not otherwise have, for you and your traveling companions. Noble lords, scholars, and merchant princes, to name a few, might be interested in hearing about your distant homeland and people.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I have different assumptions from those around me concerning personal space, blithely invading others\' space in innocence, or reacting to ignorant invasion of my own.',
				'I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.',
				'I have a strong code of honor or sense of propriety that others don\'t comprehend.',
				'I express affection or contempt in ways that are unfamiliar to others.',
				'I honor my deities through practices that are foreign to this land.',
				'I begin or end my day with small traditional rituals that are unfamiliar to those around me.'
			],
			'Ideal' :
			[
				'Open. I have much to learn from the kindly folk I meet along my way. (Good)',
				'Reserved. As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)',
				'Adventure. I\'m far from home, and everything is strange and wonderful! (Chaotic)',
				'Cunning. Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)',
				'Inquisitive. Everything is new, but I have a thirst to learn. (Neutral)',
				'Suspicious. I must be careful, for I have no way of telling friend from foe here. (Any)'
			],
			'Bond' :
			[
				'So long as I have this token from my homeland, I can face any adversity in this strange land.',
				'The gods of my people are a comfort to me so far from home.',
				'I hold no greater cause than my service to my people.',
				'My freedom is my most precious possession. I\'ll never let anyone take it from me again.',
				'I\'m fascinated by the beauty and wonder of this new land.',
				'Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day.'
			],
			'Flaw' :
			[
				'I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.',
				'I pretend not to understand the local language in order to avoid interactions I would rather not have.',
				'I have a weakness for the new intoxicants and other pleasures of this land.',
				'I don\'t take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.',
				'I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at  worst.',
				'I have a weakness for the exotic beauty of the people of these lands.'
			],
			'Why Are You Here?' : [ 'Emissary', 'Pilgrim', 'Exile', 'Sightseer', 'Fugitive', 'Wanderer' ]
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Inheritor',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Survival, plus one from among Arcana, History, and Religion',
			'Tool Proficiencies' : 'Your choice of a gaming set or a musical instrument',
			'Languages' : 'Any one of your choice',
			'Equipment' : 'Your inheritance, a set of traveler\'s clothes, any items with which you are proficient, and a pouch containing 15 gp',
			'Inheritance' : 'Choose or randomly determine your inheritance. Work with your Dungeon Master to come up with details: Why is your inheritance so important, and what is its full story?'
		},
		'Inheritance' :
		[
			'A document such as a  map, a letter, or a journal',
			'A trinket (see "Trinkets" in chapter 5 of the Player\'s Handbook)',
			'A trinket (see "Trinkets" in chapter 5 of the Player\'s Handbook)',
			'An article of clothing',
			'A piece of jewelry',
			'An arcane book or formulary',
			'A written story, song, poem, or secret',
			'A tattoo or other body marking'
		],
		'Personality' :
		{
			'_special' : 'traits-5'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Knight of the Order',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Persuasion, plus one from among Arcana, History, Nature, and Religion, as appropriate for your order',
			'Tool Proficiencies' : 'One type of gaming set or musical instrument',
			'Languages' : 'One of your choice',
			'Equipment' : 'One set of traveler\'s clothes, a signet, banner or seal representing your place or rank in the order, and a pouch containing 10 gp',
			'Knightly Regard' : 'You receive shelter and succor from members of your knightly order and those who are sympathetic to its aims. If your order is a religious one, you can gain aid from temples and other religious communities of your deity. Knights of civic orders can get help from the community- whether a lone settlement or a great nation that they serve, and knights of philosophical orders can find help from those they have aided in pursuit of their ideals, and those who share those ideals. This help comes in the form of shelter and meals, and healing when appropriate, as well as occasionally risky assistance, such as a band of local citizens rallying to aid a sorely pressed knight in a fight, or those who support the order helping to smuggle a knight out of town when he or she is being hunted unjustly.'
		},
		'Personality' :
		{
			'_special' : 'traits-13'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Mercenary Veteran',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Athletics, Persuasion',
			'Tool Proficiencies' : 'One type of gaming set, vehicles (land)',
			'Equipment' : 'A uniform of your company (traveler\'s clothes in quality), an insignia of your rank, a gaming set of your choice, and a pouch containing the remainder of your last wages (10 gp)',
			'Mercenary Life' : 'You know the mercenary life as only someone who has experienced it can. You are able to identify mercenary companies by their emblems, and you know a little about any such company, including the names and reputations of its commanders and leaders, and who has hired them recently. You can find the taverns and feast halls where mercenaries abide in any area, as long as you speak the language. You can find mercenary work between adventures sufficient to maintain a comfortable lifestyle (see "Practicing a Profession" under "Downtime Activities" in chapter 8 of the Player\'s Handbook)'
		},
		'Personality' :
		{
			'_special' : 'traits-13'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Urban Bounty Hunter',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Choose two from among Deception, Insight, Persuasion, and Stealth.',
			'Tool Proficiencies' : 'Choose two from among one type of gaming set, one musical instrument, and thieves\' tools.',
			'Equipment' : 'A set of clothes appropriate to your duties and a pouch containing 20 gp.',
			'Ear to the Ground' : 'You are in frequent contact with people in the segment of society that your chosen quarries move through. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city you visit, a person who provides information about the people and places of the local area.'
		},
		'Personality' :
		{
			'_special' : 'traits-3'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Uthgardt Tribe Member',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Athletics, Survival',
			'Tool Proficiencies' : 'One type of musical instrument or artisan\'s tools',
			'Languages' : 'One of your choice',
			'Equipment' : 'A hunting trap, a totemic token or set of tattoos marking your loyalty to Uthgar and your tribal totem, a set of traveler\'s clothes, and a pouch containing 10 gp',
			'Uthgardt Heritage' : 'You have an excellent knowledge of not only your tribe\'s territory, but also the terrain and natural resources of the rest of the North. You are familiar enough with any wilderness area that you find twice as much food and water as you normally would when you forage there. Additionally, you can call upon the hospitality of your people, and those folk allied with your tribe, often including members of druid circles, tribes of nomadic elves, the Harpers, and the priesthoods devoted to the gods of the First Circle.'
		},
		'Personality' :
		{
			'_special' : 'traits-9'
		}
	},
	{
		'_special' : 'book-SCAG',
		'_name' : 'Waterdhavian Noble',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'History, Persuasion',
			'Tool Proficiencies' : 'One type of gaming set or one musical instrument',
			'Languages' : 'One of your choice',
			'Equipment' : 'A set of fine clothes, a signet ring or brooch, a scroll of pedigree, a skin of fine zzar or wine, and a purse containing 20 gp',
			'Kept in Style' : 'While you are in Waterdeep or elsewhere in the North your house sees to your everyday needs. Your name and signet are sufficient to cover most of your expenses; the inns, taverns, and feast halls you frequent are glad to record your debt and send an accounting to your family\'s estate in Waterdeep to settle what you owe. This advantage enables you to live a comfortable lifestyle without having to pay 2 gp a day for it, or reduces the cost of a wealthy or aristocratic lifestyle by that amount. You may not maintain a less affluent lifestyle and use the difference as income-the benefit is a line of credit, not an actual monetary reward.'
		},
		'Personality' :
		{
			'_special' : 'traits-8'
		}
	},
	{
		'_special' : 'book-Other',
		'_name' : 'Anthropologist',
		'Skills and Equipment' :
		{
			'Skill Proficiency' : 'Insight, Religion',
			'Languages' : 'Two of your choice',
			'Equipment' : 'A leather-bound diary, a bottle of ink, an ink pen, a set of traveler\'s clothes, one trinket of special significance, and a pouch containing 10 gp',
			'Adept Linguist' : 'You can communicate with humanoids who don\'t speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures-enough to communicate on a rudimentary level.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I prefer the company of those who aren\'t like me, including people of other races.',
				'I\'m a stickler when it comes to observing proper etiquette and local customs.',
				'I would rather observe than meddle.',
				'By living among violent people, I have become desensitized to violence.',
				'I would risk life and limb to discover a new culture or unravel the secrets of a dead one.',
				'When l arrive at a ew settlement for the first time, l must learn all its customs. '
			],
			'Ideal' :
			[
				'Discovery. I want to be the first person to discover a lost culture. (Any)',
				'Distance. One must not interfere with the affairs of another culture- even one in need of aid. (Lawful)',
				'Knowledge. By understanding other races and cul-tures, we learn to understand ourselves. (Any)',
				'Power. Common people crave strong leadership, and I do my utmost to provide it. (Lawful)',
				'Protection. I must do everything possible to save a society facing extinction. (Good)',
				'Indifferent. life is cruel. What\'s the point in saving people if they\'re going to die anyway? (Chaotic)'
			],
			'Bond' :
			[
				'My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.',
				'Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.',
				'Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.',
				'I want to learn more about a particular humanoid culture that fascinates me.',
				'I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.',
				'I have a trinket that I believe is the key to finding a long-lost society.'
			],
			'Flaw' :
			[
				'Boats make me seasick.',
				'I talk to myself, and I don\'t make friends easily.',
				'I believe that I\'m intellectually superior to people from other cultures and have much to teach them.',
				'I\'ve picked up some unpleasant habits living among goblins, lizardfolk, or orcs.',
				'I complain about everything.',
				'I wear a tribal mask and never take it off. '
			],
			'Adopted Culture' : [ 'Aarakocra', 'Halfling', 'Dwarf', 'Human', 'Elf', 'Lizardfolk', 'Goblin', 'Orc' ]
		}
	},
	{
		'_special' : 'book-Other',
		'_name' : 'Archaeologist',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'History, Survival',
			'Tool Proficiencies' : 'Cartographer\'s tools or Navigator\'s tools',
			'Languages' : 'One of your choice',
			'Equipment': 'A wooden case containing a map to a ruin or dungeon, a bullseye lantern, a miner\'s pick, a set of traveler\'s clothes, a shovel, a two-person tent, a trinket recovered from a dig site, and a pouch containing 25 gp',
			'Historical Knowledge' : 'Few archaeologists can resist the lure of an unexplored ruin or dungeon, particularly if such a site is the source of legends or is rumored to contain the treasures and relics of wizards, warlords, or royalty. Some archaeologists plunder for wealth or fame, while others consider it their calling to illuminate the past or keep the world\'s greatest treasures from falling into the wrong hands. Whatever their motivations, archaeologists combine the qualities of a scrappy historian with the self-made heroism of a treasure-hunting scoundrel.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I love a good puzzle or mystery.',
				'I\'m a pack rat who never throws anything away.',
				'Fame is more important to me than money.',
				'I have no qualms about stealing from the dead.',
				'I\'m happier In a dusty old tomb than I am in the centers of civilization.',
				'Traps don\'t make me nervous. Idiots who trigger traps make me nervous.',
				'I might fail, but I will never give up.',
				'You might think I\'m a scholar, but I love a good brawl. These fists were made for punching.'
			],
			'Ideal' :
			[
				'Preservation. That artifact belongs in a museum. (Good)',
				'Greed. I won\'t risk my life for nothing. I expect some kind of payment. (Any)',
				'Death Wish. Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)',
				'Dignity. The dead and their belongings deserve to be treated with respect. (Lawful)',
				'Immortality. All my exploring is part of a plan to find the secret of everlasting life. (Any)',
				'Danger. With every great discovery comes grave danger. The two walk hand in hand. (Any) '
			],
			'Bond' :
			[
				'Ever since I was a child, I\'ve heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.',
				'I want to find my mentor, who disappeared on an expedition some time ago.',
				'I have a friendly rival. Only one of us can be the best, and I aim to prove it\'s me.',
				'I won\'t sell an art object or other treasure that has historical significance or is one of a kind.',
				'I\'m secretly in love with the wealthy patron who sponsors my archaeological exploits.',
				'I hope to bring prestige to a library, a museum, or a university. '
			],
			'Flaw' :
			[
				'I have a secret fear of some common wild animal- and In my work, I see them everywhere.',
				'I can\'t leave a room without searching it for secret doors.',
				'When I\'m not exploring dungeons or ruins, I get jittery and impatient.',
				'I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.',
				'When given the choice of going left or right, I always go left.',
				'I can\'t sleep except in total darkness.'
			],
			'Signature Item' : [ '10-foot pole', 'Medallion', 'Crowbar', 'Shovel', 'Hat', 'Sledgehammer', 'Hooded lantern', 'Whip' ]
		}
	},
	{
		'_special' : 'book-Other',
		'_name' : 'Haunted One',
		'Skills and Equipment' :
		{
			'Skill Proficiencies' : 'Choose Two from among Arcana, Deception, Investigation, Religion, and Survival',
			'Languages' : 'Choose one exotic language (Abyssal, Celestial, Deep Speech, Draconic, Infernal, Primordial, Sylvan, or Undercommon)',
			'Equipment' : 'A monster hunter\'s pack, a set of common clothes, and two trinket of special significance (see below), and a belt pouch containing 15 gp.',
			'Heart of Darkness' : 'Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone.'
		},
		'Personality' :
		{
			'Trait' :
			[
				'I don\'t run from evil. Evil runs from me.',
				'I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.',
				'I spend money freely and live life to the fullest, knowing that tomorrow I might die.',
				'I live for the thrill of the hunt.',
				'I don\'t talk about the thing that torments me.  I\'d rather not burden others with my curse.',
				'I expect danger around every corner.',
				'I refuse to become a victim, and I will not allow others to be victimized.',
				'I put no trust in divine beings.'
			],
			'Ideal' :
			[
				'I try to help those in need, no matter what the personal cost. (Good)',
				'I\'ll stop the spirits that haunt me or die trying. (Any)',
				'I kill monsters to make the world a safer place, and to exorcise my own demons. (Good).',
				'I have a dark calling that puts me above the law. (Chaotic)',
				'I like to know my enemy\'s capabilities and weaknesses before rushing into battle. (Lawful).',
				'I\'m a monster that destroys other monsters, and anything else that gets in my way. (Evil).',
			],
			'Bond' :
			[
				'I keep my thoughts and discoveries in a journal. My journal is my legacy.',
				'I would sacrifice my life and my soul to protect the innocent.',
				'My torment drove away the person I love. I strive to win back the love I\'ve lost.',
				'A terrible guilt consumes me. I hope that I can find redemption through my actions.',
				'There\'s evil in me, I can feel it. It must never be set free.',
				'I have a child to protect. I must make the world a safer place for him (or her).'
			],
			'Flaw' :
			[
				'I have certain rituals that I must follow every day. I can never break them.',
				'I assume the worst in people.',
				'I feel no compassion for the dead. They\'re the lucky ones.',
				'I have an addiction.',
				'I am a purveyor of doom and gloom who lives in a world without hope.',
				'I talk to spirits that no one else can see.'
			],
			'Harrowing Event' :
			[
				'A monster that slaughtered dozens of innocent people spared your life, and you don\'t know why.',
				'You were born under a dark star. You can feel it watching you, coldly and distantly. Sometimes it beckons you in the dead of night.',
				'An apparition that has haunted your family for generations now haunts you. You don\'t know what it wants, and it won\'t leave you alone.',
				'Your family has a history of practicing the dark arts. You dabbled once and felt something horrible clutch at your soul, whereupon you fled in terror.',
				'An oni took your sibling one cold, dark night, and you were unable to stop it.',
				'You were cursed with lycanthropy and later cured. You are now haunted by the innocents you slaughtered.',
				'A hag kidnapped and raised you. You escaped, but the hag still has a magical hold over you and fills your mind with evil thoughts.',
				'You opened an eldritch tome and saw things unfit for a sane mind. You burned the book, but its words and images are burned into your psyche.',
				'A fiend possessed you as a child. You were locked away but escaped. The fiend is still inside you, but now you try to keep it locked away.',
				'You did terrible things to avenge the murder of someone you loved. You became a monster, and it haunts your waking dreams.'
			]
		}
	}
]

var life =
{
	'Alignment' : ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'],
	'Origin' :
	{
		'Birthplace' :
		[
			'Home',
			[
				'Home of a family friend',
				'Home of a family friend',
				'Home of a family friend',
				'Home of a family friend',
				'Home of a family friend',
				'Home of a healer or midwife',
				'Home of a healer or midwife',
				'Home of a healer or midwife',
				'Home of a healer or midwife',
				'Home of a healer or midwife',
				'Home of a healer or midwife',
				'Home of a healer or midwife',
				'Home of a healer or midwife',
				'Carriage, cart, or wagon',
				'Carriage, cart, or wagon',
				'Barn, shed, or other outbuilding',
				'Barn, shed, or other outbuilding',
				'Barn, shed, or other outbuilding',
				'Cave',
				'Cave',
				'Field',
				'Field',
				'Forest',
				'Forest',
				'Temple',
				'Temple',
				'Temple',
				'Battlefield',
				'Alley or street',
				'Alley or street',
				'Brothel, tavern, or inn',
				'Brothel, tavern, or inn',
				'Castle, keep, tower, or palace',
				'Castle, keep, tower, or palace',
				'Sewer or rubbish heap',
				'Among people of a different race',
				'Among people of a different race',
				'Among people of a different race',
				'On board a boat or a ship',
				'On board a boat or a ship',
				'On board a boat or a ship',
				'In a prison or in the headquarters of a secret organization',
				'In a prison or in the headquarters of a secret organization',
				'In a sage\'s laboratory',
				'In a sage\'s laboratory',
				'In the Feywild',
				'In the Shadowfell',
				'On the Astral Plane or the Ethereal Plane',
				'On an Inner Plane of your choice',
				'On an Outer Plane of your choice'
			]
		],
		'Parents' :
		{
			'_special' : 'mixedparents',
			'Half-Elf' : 
			[
				'One parent was an elf and the other was a human.',
				'One parent was an elf and the other was a human.',
				'One parent was an elf and the other was a human.',
				'One parent was an elf and the other was a human.',
				'One parent was an elf and the other was a human.',
				'One parent was an elf and the other was a half-elf.',
				'One parent was a human and the other was a half-elf.',
				'Both parents were half-elves.'
			],
			'Half-Orc' :
			[
				'One parent was an orc and the other was a human.',
				'One parent was an orc and the other was a human.',
				'One parent was an orc and the other was a human.',
				'One parent was an orc and the other was a half-orc.',
				'One parent was an orc and the other was a half-orc.',
				'One parent was an human and the other was a half-orc.',
				'One parent was an human and the other was a half-orc.',
				'Both parents were half-orcs.'
			],
			'Tiefling' :
			[
				'Both parents were humans, their infernal heritage dormant until you came along.',
				'Both parents were humans, their infernal heritage dormant until you came along.',
				'Both parents were humans, their infernal heritage dormant until you came along.',
				'Both parents were humans, their infernal heritage dormant until you came along.',
				'One parent was a tiefling and the other was a human.',
				'One parent was a tiefling and the other was a human.',
				'One parent was a tiefling and the other was a devil.',
				'One parent was a human and the other was a devil.',
			],
			'Genasi' :
			[
				'One parent was a genie and the other was a human.',
				'One parent was a genie and the other was a human.',
				'One parent was a genie and the other was a human.',
				'One parent was a genie and the other was a human.',
				'One parent was a genasi and the other was a human.',
				'One parent was a genasi and the other was a human.',
				'One parent was a genasi and the other was a human.',
				'Both parents were humans, their elemental heritage dormant until you came along.',
			],
			'Aasimar' :
			[
				'One parent was a god and the other was a human.',
				'One parent was a god and the other was a human.',
				'One parent was a celestial and the other was a human.',
				'One parent was a celestial and the other was a human.',
				'One parent was a celestial and the other was a human.',
				'Both parents were humans, their celestial heritage dormant until you came along.',
				'Both parents were humans, their celestial heritage dormant until you came along.',
				'Both parents were humans, their celestial heritage dormant until you came along.'
			]
		},
		'Raised By' : 
		{
			'_special' : 'skip'
		},
		'Absent Parent(s)' :
		{
			'_special' : 'skip'
		},
		'Family Lifestyle' : 
		{
			'_special' : 'skip'
		},
		'Childhood Home' : 
		{
			'_special' : 'skip',
		},
		'Childhood Memories' : 
		{
			'_special' : 'skip',
		},
		'Siblings' : 
		{
			'_special' : 'skip'
		}
	},
	'Life Events' :
	{
		'_special' : 'skip'
	}
}

var eventTables =
{
	'Life Events' :
		[ 'Tragedy', 'Tragedy', 'Boon', 'Boon', 'Marriage', 'Marriage', 'Enemy', 'Enemy', 'Friend', 'Friend', 'Job', 'Job', 'Job', 'Job', 'Someone Important', 'Adventure', 'Supernatural Event', 'War', 'Crime', 'Arcane Matter' ],
	'Adventure' :
	[
		'You nearly died. You have nasty scars on your body, and you are missing an ear, 1d3 fingers, or 1d4 toes.',
		'You suffered a grievous injury. Although the wound healed, it still pains you from time to time.',
		'You were wounded, but in time you fully recovered.',
		'You contracted a disease while exploring a filthy warren. You recovered from the disease, but you have a persistent cough, pockmarks on your skin, or prematurely gray hair.',
		'You were poisoned by a trap or a monster. You recovered, but the next time you must make a saving throw against poison, you make the saving throw with disadvantage.',
		'You lost something of sentimental value to you during your adventure. Remove one trinket from your possessions.',
		'You were terribly frightened by something you encountered and ran away, abandoning your companions to their fate.',
		'You learned a great deal during your adventure. The next time you make an ability check or a saving throw, you have advantage on the roll.',
		'You found some treasure on your adventure. You have 2d6 gp left from your share of it.',
		'You found a considerable amount of treasure on your adventure. You have 1d20 + 50 gp left from your share of it.',
		'You came across a common magic item (of the DM\'s choice).'
	],
	'Arcane Matter' :
	[
		'You were charmed or frightened by a spell.',
		'You were injured by the effect of a spell.',
		'You witnessed a powerful spell being cast by a cleric, a druid, a sorcerer, a warlock, or a wizard.',
		'You drank a potion (of the DM\'s choice).',
		'You found a spell scroll (of the DM\'s choice) and succeeded in casting the spell it contained.',
		'You were affected by teleportation magic.',
		'You turned invisible for a time.',
		'You identified an illusion for what it was.',
		'You saw a creature being conjured by magic.',
		'Your fortune was read by a diviner. Roll twice on the Life Events table, but don\'t apply the results. Instead, the DM picks one event as a portent of your future (which might or might not come true).'
	],
	'Boon' :
	[
		'A friendly wizard gave you a spell scroll containing one cantrip (of the DM\'s choice).',
		'You saved the life of a commoner, who now owes you a life debt. This individual accompanies you on your travels and performs mundane tasks for you, but will leave if neglected, abused, or imperiled. Determine details about this character by using the supplemental tables and working with your DM.',
		'You found a riding horse.',
		'You found some money. You have 1d20 gp in addition to your regular starting funds.',
		'A relative bequeathed you a simple weapon of your choice.',
		'You found something interesting. You gain one additional trinket.',
		'You once performed a service for a local temple. The next time you visit the temple, you can receive healing up to your hit point maximum.',
		'A friendly alchemist gifted you with a potion of healing or a flask of acid, as you choose.',
		'You found a treasure map.',
		'A distant relative left you a stipend that enables you to live at the comfortable lifestyle for 1d20 years. If you choose to live at a higher lifestyle, you reduce the price of the lifestyle by 2 gp during that time period.'
	],
	'Crime' :
	[
		'Murder',
		'Theft',
		'Burglary',
		'Assault',
		'Smuggling',
		'Kidnapping',
		'Extortion',
		'Counterfeiting'
	],
	'Punishment' :
	[
		'You did not commit the crime and were exonerated after being accused.',
		'You did not commit the crime and were exonerated after being accused.',
		'You did not commit the crime and were exonerated after being accused.',
		'You committed the crime or helped do so, but nonetheless the authorities found you not guilty.',
		'You committed the crime or helped do so, but nonetheless the authorities found you not guilty.',
		'You committed the crime or helped do so, but nonetheless the authorities found you not guilty.',
		'You were nearly caught in the act. You had to flee and are wanted in the community where the crime occurred.',
		'You were nearly caught in the act. You had to flee and are wanted in the community where the crime occurred.',
		'You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of 1d4 years or succeeded in escaping after that much time.',
		'You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of 1d4 years or succeeded in escaping after that much time.',
		'You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of 1d4 years or succeeded in escaping after that much time.',
		'You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of 1d4 years or succeeded in escaping after that much time.'
	],
	'Supernatural Event' :
	[
		'You were ensorcelled by a fey and enslaved for 1d6 years before you escaped.',
		'You saw a demon and ran away before it could do anything to you.',
		'A devil tempted you. Make a DC 10 Wisdom saving throw. On a failed save, your alignment shifts one step toward evil (if it\'s not evil already), and you start the game with an additional 1d20 + 50 gp.',
		'You woke up one morning miles from your home, with no idea how you got there.',
		'You visited a holy site and felt the presence of the divine there.',
		'You visited a holy site and felt the presence of the divine there.',
		'You witnessed a falling red star, a face appearing in the frost, or some other bizarre happening. You are certain that it was an omen of some sort.',
		'You witnessed a falling red star, a face appearing in the frost, or some other bizarre happening. You are certain that it was an omen of some sort.',
		'You escaped certain death and believe it was the intervention of a god that saved you.',
		'You escaped certain death and believe it was the intervention of a god that saved you.',
		'You witnessed a minor miracle.',
		'You witnessed a minor miracle.',
		'You explored an empty house and found it to be haunted.',
		'You explored an empty house and found it to be haunted.',
		'You were briefly possessed. Roll a d6 to determine what type of creature possessed you : 1, celestial; 2, devil; 3, demon; 4, fey; 5, elemental; 6, undead.',
		'You saw a ghost.',
		'You saw a ghoul feeding on a corpse.',
		'A celestial or a fiend visited you in your dreams to give a warning of dangers to come.',
		'You briefly visited the Feywild or the Shadowfell.',
		'You saw a portal that you believe leads to another plane of existence.'
	],
	'Tragedy' :
	[
		'A family member or a close friend died. Roll on the Cause of Death supplemental table to find out how.',
		'A family member or a close friend died. Roll on the Cause of Death supplemental table to find out how.',
		'A friendship ended bitterly, and the other person is now hostile to you. The cause might have been a misunderstanding or something you or the former friend did.',
		'You lost all your possessions in a disaster, and you had to rebuild your life.',
		'You were imprisoned for a crime you didn\'t commit and spent 1d6 years at hard labor, in jail, or shackled to an oar in a slave galley.',
		'War ravaged your home community, reducing everything to rubble and ruin. In the aftermath, you either helped your town rebuild or moved somewhere else.',
		'A lover disappeared without a trace. You have been looking for that person ever since.',
		'A terrible blight in your home community caused crops to fail, and many starved. You lost a sibling or some other family member.',
		'You did something that brought terrible shame to you in the eyes of your family. You might have been involved in a scandal, dabbled in dark magic, or offended someone important. The attitude of your family members toward you becomes indifferent at best, though they might eventually forgive you.',
		'For a reason you were never told, you were exiled from your community. You then either wandered in the wilderness for a time or promptly found a new place to live.',
		'A romantic relationship ended. Roll a d6. An odd number means it ended with bad feelings, while an even number means it ended amicably.',
		'A current or prospective romantic partner of yours died. Roll on the Cause of Death supplemental table to find out how. If the result is murder, roll a d12. On a 1, you were responsible, whether directly or indirectly.'
	],
	'War' :
	[
		'In a battle, you were knocked out and left for dead. You woke up hours later with no recollection of the battle.',
		'You were badly injured in a battle, and you still bear the awful scars of those wounds.',
		'You were badly injured in a battle, and you still bear the awful scars of those wounds.',
		'You ran away from a battle to save your life, but you still feel shame for your cowardice.',
		'You suffered minor injuries in battle, and the wounds all healed without leaving scars.',
		'You suffered minor injuries in battle, and the wounds all healed without leaving scars.',
		'You suffered minor injuries in battle, and the wounds all healed without leaving scars.',
		'You survived a battle, but you suffer from terrible nightmares in which you relive the experience.',
		'You survived a battle, but you suffer from terrible nightmares in which you relive the experience.',
		'You escaped a battle unscathed, though many of your friends were injured or lost.',
		'You escaped a battle unscathed, though many of your friends were injured or lost.',
		'You acquitted yourself well in battle and are remembered as a hero. You might have received a medal for your bravery.'
	],
	'Weird Stuff' :
	[
		'You were turned into a toad and remained in that form for 1d4 weeks.',
		'You were petrified and remained a stone statue for a time until someone freed you.',
		'You were enslaved by a hag, a satyr, or some other being and lived in that creature\'s thrall for 1d6 years.',
		'A dragon held you as a prisoner for 1d4 months until adventurers killed it.',
		'You were taken captive by a race of evil humanoids such as drow, kuotoa, or quaggoths. You lived as a slave in the Underdark until you escaped.',
		'You served a powerful adventurer as a hireling. You have only recently left that service. Use the supplemental tables and work with your DM to determine the basic details about your former employer.',
		'You went insane for 1d6 years and recently regained your sanity. A tic or some other bit of odd behavior might linger.',
		'A lover of yours was secretly a silver dragon.',
		'You were captured by a cult and nearly sacrificed on an altar to the foul being the cultists served. You escaped, but you fear they will find you.',
		'You met a demigod, an archdevil, an archfey, a demon lord, or a titan, and you lived to tell the tale.',
		'You were swallowed by a giant fish and spent a month in its gullet before you escaped.',
		'A powerful being granted you a wish, but you squandered it on something frivolous.'
	]
}

var names =
{
	'Aarakocra' : [ 'Aera', 'Aial', 'Aur', 'Deekek', 'Errk', 'Heehk', 'Ikki', 'Kleeck', 'Oorr', 'Ouss', 'Quaf', 'Quierk', 'Salleek', 'Urreek', 'Zeed' ],
	// http://enneadgames.com/
	'Bugbear' :
	{
		'Female' : [ 'An\'hek', 'Gretru', 'Lungra', 'Sept', 'Um\'ra', 'Zel' ],
		'Male' : [ 'Bao\'or\'et', 'Cretin', 'Gregek', 'Kugruet', 'Malka\'vec', 'Thimdul' ]
	},
	'Changeling' : [ 'Bin', 'Dox', 'Fie', 'Hars', 'Jin', 'Lam', 'Nit', 'Ot', 'Paik', 'Ruz', 'Sim', 'Toox', 'Yog' ],
	'Deep Gnome' :
	{
		'Female' : [ 'Beliss', 'Durthee', 'Fricknarti', 'Ivridda', 'Krivi', 'Lulthiss', 'Nalvarti', 'Schnella', 'Thulmarra', 'Wirsidda' ],
		'Male' : [ 'Belwar', 'Brickers', 'Durthmeck', 'Firble', 'Krieger', 'Kronthud', 'Schneltheck', 'Schnicktick', 'Thulwar', 'Walschud' ],
		'Clan' : [ 'Crystalfist', 'Gemcutter', 'Ironfoot', 'Rockhewer', 'Seamfinder', 'Stonecutter' ]
	},
	'Dragonborn' :
	{
		'Female' :
			[ 'Akra', 'Aasathra', 'Antrara', 'Arava', 'Biri', 'Blendaeth', 'Burana', 'Chassath', 'Daar', 'Dentratha', 'Doudra', 'Driindar', 'Eggren', 'Farideh', 'Findex', 'Furrele', 'Gesrethe', 'Gilkass', 'Harann', 'Havilar', 'Hethress', 'Hillanot', 'Jaxi', 'Jezean', 'Jheri', 'Kadana', 'Kava', 'Korinn', 'Megren', 'Mijira', 'Mishann', 'Nala', 'Nuthra', 'Perra', 'Pogranix', 'Pyxrin', 'Quespa', 'Raiann', 'Rezena', 'Ruloth', 'Saphara', 'Savaran', 'Sora', 'Surina', 'Synthrin', 'Tatyan', 'Thava', 'Uadjit', 'Vezera', 'Zykrof' ],
		'Male' :
			[ 'Adrex', 'Arjhan', 'Azzakh', 'Balasar', 'Baradad', 'Bharash', 'Bidreked', 'Dadalan', 'Dazzazn', 'Direcris', 'Donaar', 'Fax', 'Gargax', 'Ghesh', 'Gorbundus', 'Greethen', 'Heskan', 'Hirrathak', 'Ildrex', 'Kaladan', 'Kerkad', 'Kiirith', 'Kriv', 'Maagog', 'Medrash', 'Mehen', 'Mozikth', 'Mreksh', 'Mugrunden', 'Nadarr', 'Nithther', 'Norkruuth', 'Nykkan', 'Pandjed', 'Patrin', 'Pijjirik', 'Quarethon', 'Rathkran', 'Rhogar', 'Rivaan', 'Sethrekar', 'Shamash', 'Shedinn', 'Srorthen', 'Tarhun', 'Torinn', 'Trynnicus', 'Valorean', 'Vrondiss', 'Zedaar' ],
		'Clan' :
			[ 'Akambherylliax', 'Argenthrixus', 'Baharoosh', 'Beryntolthropal', 'Bhenkumbyrznaax', 'Caavylteradyn', 'Chumbyxirinnish', 'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Dhyrktelonis', 'Ebynichtomonis', 'Esstyrlynn', 'Fharngnarthnost', 'Ghaallixirn', 'Grrrmmballhyst', 'Gygazzylyshrift', 'Hashphronyxadyn', 'Hshhsstoroth', 'Imbixtellrhyst', 'Jerynomonis', 'Jharthraxyn', 'Kerrhylon', 'Kimbatuul', 'Lhamboldennish', 'Linxakasendalor', 'Mohradyllion', 'Mystan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Orexijandilin', 'Pfaphnyrennish', 'Phrahdrandon', 'Pyraxtallinost', 'Qyxpahrgh', 'Raghthroknaar', 'Shestendeliath', 'Skaarzborroosh', 'Sumnarghthrysh', 'Tiammanthyllish', 'Turnuroth', 'Umbyrphrael', 'Vangdondalor', 'Verthisathurgiesh', 'Wivvyrholdalphiax', 'Wystongjiir', 'Xephyrbahnor', 'Yarjerit', 'Zzzxaaxthroth' ]
	},
	'Dwarf' :
	{
		'Female' :
			[ 'Anbera', 'Artin', 'Audhild', 'Balifra', 'Barbena', 'Bardryn', 'Bolhild', 'Dagnal', 'Dariff', 'Delre', 'Diesa', 'Eldeth', 'Eridred', 'Falkrunn', 'Fallthra', 'Finellen', 'Gillydd', 'Gunnloda', 'Gurdis', 'Helgret', 'Helja', 'Hlin', 'Ilde', 'Jarana', 'Kathra', 'Kilia', 'Kristryd', 'Liftrasa', 'Marastyr', 'Mardred', 'Morana', 'Nalaed', 'Nora', 'Nurkara', 'Oriff', 'Ovina', 'Riswynn', 'Sannl', 'Therlin', 'Thodris', 'Torbera', 'Tordrid', 'Torgga', 'Urshar', 'Valida', 'Vistra', 'Vonana', 'Werydd', 'Whurdred', 'Yurgunn' ],
		'Male' :
			[ 'Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Gilthur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangrim', 'Reirak', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Uraim', 'Veit', 'Vonbin', 'Vondal', 'Whurbin' ],
		'Clan' :
			[ 'Aranore', 'Balderk', 'Battlehammer', 'Bigtoe', 'Bloodkith', 'Bofdann', 'Brawnanvil', 'Brazzik', 'Broodfist', 'Burrowfound', 'Caebrek', 'Daerdahk', 'Dankil', 'Daraln', 'Deepdelver', 'Durthane', 'Eversharp', 'Fallack', 'Fireforge', 'Foamtankard', 'Frostbeard', 'Glanhig', 'Goblinbane', 'Goldfinder', 'Gorunn', 'Graybeard', 'Hammerstone', 'Helcral', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Morigak', 'Orcfoe', 'Rakankrak', 'Ruby-Eye', 'Rumnaheim', 'Silveraxe', 'Silverstone', 'Steelfist', 'Stoutale', 'Strakeln', 'Strongheart', 'Thrahak', 'Torevir', 'Torunn', 'Trollbleeder', 'Trueanvil', 'Trueblood', 'Ungart' ]
	},
	'Elf' :
	{
		'Child' :
			[ 'Ael', 'Ang', 'Ara', 'Ari', 'Arn', 'Aym', 'Broe', 'Bryn', 'Cael', 'Cy', 'Dae', 'Del', 'Eli', 'Eryn', 'Faen', 'Fera', 'Gael', 'Gar', 'Innil', 'Jar', 'Kan', 'Koeth', 'Lael', 'Lue', 'Mai', 'Mara', 'Mella', 'Mya', 'Naeris', 'Naill', 'Nim', 'Phann', 'Py', 'Rael', 'Raer', 'Ren', 'Rinn', 'Rua', 'Sael', 'Sai', 'Sumi', 'Syllin', 'Ta', 'Thia', 'Tia', 'Traki', 'Vall', 'Von', 'Wil', 'Za' ],
		'Female' :
			[ 'Adrie', 'Ahinar', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Arara', 'Baelitae', 'Bethrynna', 'Birel', 'Caelynn', 'Chaedi', 'Claira', 'Dara', 'Drusilia', 'Elama', 'Enna', 'Faral', 'Felosial', 'Hatae', 'Ielenia', 'Ilanis', 'Irann', 'Jarsali', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Maiathah', 'Malquis', 'Meriele', 'Mialee', 'Myathethin', 'Naivara', 'Quelenna', 'Quillathe', 'Ridaro', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Summes', 'Theirastra', 'Thiala', 'Tiaathque', 'Traulam', 'Vadania', 'Valanthe', 'Valna', 'Xanaphia' ],
		'Male' :
			[ 'Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efferil', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis' ],
		'Family' :
			[ 'Aloro', 'Amakiir', 'Amastacia', 'Ariessus', 'Aruanna', 'Berevan', 'Caerdonel', 'Caphaxath', 'Casilltenirra', 'Cithreth', 'Dalanthan', 'Eathalena', 'Erenaeth', 'Ethanasath', 'Fasharash', 'Firahel', 'Floshem', 'Galanodel', 'Goltorah', 'Hanali', 'Holimion', 'Horineth', 'Iathrana', 'Ilphelkiir', 'Iranapha', 'Koehlanna', 'Lathalas', 'Liadon', 'Meliamne', 'Mellerelel', 'Mystralath', 'Naïlo', 'Netyoive', 'Ofandrus', 'Ostoroth', 'Othronus', 'Qualanthri', 'Raethran', 'Rothenel', 'Selevarun', 'Siannodel', 'Suithrasas', 'Sylvaranth', 'Teinithra', 'Tiltathana', 'Wasanthi', 'Withrethin', 'Xiloscient', 'Xistsrith', 'Yaeldrin' ]
	},
	'Gith' :
	{
		'Female' : [ 'Amith', 'Adaka', 'Ezhelya', 'Immilzin', 'Iliss', 'Izera', 'Olavya', 'Ummon', 'Usamm', 'Uweya', 'Ysviden' ],
		'Male' : [ 'Baarya', 'Dak', 'Fiden', 'Greth', 'Kalla', 'Klavya', 'Saath', 'Shraak', 'Zith', 'Zomm' ]
	},
	'Gnome' :
	{
		'Female' :
			[ 'Abalaba', 'Bimpnottin', 'Breena', 'Buvvie', 'Callybon', 'Caramip', 'Carlin', 'Cumpen', 'Dalaba', 'Donella', 'Duvamil', 'Ella', 'Ellyjoybell', 'Ellywick', 'Enidda', 'Lilli', 'Loopmottin', 'Lorilla', 'Luthra', 'Mardnab', 'Meena', 'Menny', 'Mumpena', 'Nissa', 'Numba', 'Nyx', 'Oda', 'Oppah', 'Orla', 'Panana', 'Pyntle', 'Quilla', 'Ranala', 'Reddlepop', 'Roywyn', 'Salanop', 'Shamil', 'Siffress', 'Symma', 'Tana', 'Tenena', 'Tervaround', 'Tippletoe', 'Ulla', 'Unvera', 'Veloptima', 'Virra', 'Waywocket', 'Yebe', 'Zanna' ],
		'Male' :
			[ 'Alston', 'Alvyn', 'Anverth', 'Arumawann', 'Bilbron', 'Boddynock', 'Brocc', 'Burgell', 'Cockaby', 'Crampernap', 'Dabbledob', 'Delebean', 'Dimble', 'Eberdeb', 'Eldon', 'Erky', 'Fablen', 'Fibblestib', 'Fonkin', 'Frouse', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Igden', 'Jabble', 'Jebeddo', 'Kellen', 'Kipper', 'Namfoodle', 'Oppleby', 'Orryn', 'Paggen', 'Pallabar', 'Pog', 'Qualen', 'Ribbles', 'Rimple', 'Roondar', 'Sapply', 'Seebo', 'Senteq', 'Sindri', 'Umpen', 'Warryn', 'Wiggens', 'Wobbles', 'Wrenn', 'Zaffrab', 'Zook' ],
		'Clan' :
			[ 'Albaratie', 'Bafflestone', 'Beren', 'Boondiggles', 'Cobblelob', 'Daergel', 'Dunben', 'Fabblestabble', 'Fapplestamp', 'Fiddlefen', 'Folkor', 'Garrick', 'Gimlen', 'Glittergem', 'Gobblefirn', 'Gummen', 'Horcusporcus', 'Humplebumple', 'Ironhide', 'Leffery', 'Lingenhall', 'Loofollue', 'Maekkelferce', 'Miggledy', 'Munggen', 'Murnig', 'Musgraben', 'Nackle', 'Ningel', 'Nopenstallen', 'Nucklestamp', 'Offund', 'Oomtrowl', 'Pilwicken', 'Pingun', 'Quillsharpener', 'Raulnor', 'Reese', 'Rofferton', 'Scheppen', 'Shadowcloak', 'Silverthread', 'Sympony', 'Tarkelby', 'Timbers', 'Turen', 'Umbodoben', 'Waggletop', 'Welber', 'Wildwander' ],
		'Nickname' :
			[ 'Aleslosh', 'Ashhearth', 'Badger', 'Cloak', 'Doublelock', 'Filchbatter', 'Fnipper', 'Ku', 'Nim', 'Oneshoe', 'Pock', 'Sparklegem', 'Stumbleduck' ]
	},
	// http://www.eberron5e.com/
	'Goblin' :
	{
		'Female' : [ 'Vuura', 'Ciisa', 'Jaaraas Larr', 'Flara', 'Catlona', 'Silonda', 'Hillin', 'Jebi', 'Sazza' ],
		'Male' : [ 'Chetiin', 'Griz', 'Gobber', 'Toby', 'Berk', 'Btas', 'Dnuzeg', 'Dten', 'Fooraak', 'Gras', 'Keevan', 'Nbus', 'Noregz', 'Rath', 'Sgaz', 'Vuus', 'Xoganm' ]
	},
	'Goliath' :
	{
		'Birth' :
			[ 'Aukan', 'Eglath', 'Gae-Al', 'Gauthak', 'Ilikan', 'Keothi', 'Kuori', 'Lo-Kag', 'Manneo', 'Maveith', 'Nalla', 'Orilo', 'Paavu', 'Pethani', 'Thalai', 'Thotham', 'Uthal', 'Vaunea', 'Vimak' ],
		'Nickname' :
			[ 'Bearkiller', 'Dawncaller', 'Fearless', 'Flint-finder', 'Horncarver', 'Keeneye', 'Lonehunter', 'Long-leaper', 'Rootsmasher', 'Skywatcher', 'Steadyhand ', 'Threadtwister', 'Twice-Orphaned', 'Twistedlimb ', 'Wordpainter' ],
		'Clan' :
			[ 'Anakalathai', 'Elanithino', 'Gathakanathi', 'Kalagiano', 'Katho-Olavi', 'Kolae-Gileana', 'Ogolakanu', 'Thuliaga', 'Thunukalathi', 'Vaimei-Laga' ]
	},
	// https://incrediblyunbalanced.files.wordpress.com/2017/03/races-1.pdf
	'Grung' :
	[
		'Gahg', 'Sook', 'Pasht', 'Slur', 'Slark', 'Mog', 'Lurt', 'Hat', 'Pip', 'Narg', 'Galf', 'Nak', 'Toog', 'Beb', 'Snurk', 'Pat', 'Lib', 'Rug', 'Ran', 'Ja', 'Jig', 'Erg', 'Hen', 'Nin', 'Mahl', 'Zoog'
	],
	'Halfling' :
	{
		'Female' :
			[ 'Alain', 'Andry', 'Anne', 'Bella', 'Blossom', 'Bree', 'Callie', 'Chenna', 'Cora', 'Dee', 'Dell', 'Eida', 'Eran', 'Euphemia', 'Georgina', 'Gynnie', 'Harriet', 'Jasmine', 'Jillian', 'Jo', 'Kithri', 'Lavinia', 'Lidda', 'Maegan', 'Marigold', 'Merla', 'Myria', 'Nedda', 'Nikki', 'Nora', 'Olivia', 'Paela', 'Pearl', 'Pennie', 'Philomena', 'Portia', 'Robbie', 'Rose', 'Saral', 'Seraphina', 'Shaena', 'Stacee', 'Tawna', 'Thea', 'Trym', 'Tyna', 'Vani', 'Verna', 'Wella', 'Willow' ],
		'Male' :
			[ 'Alton', 'Ander', 'Bernie', 'Bobbin', 'Cade', 'Callus', 'Corrin', 'Dannad', 'Danniel', 'Eddie', 'Egart', 'Eldon', 'Errich', 'Fildo', 'Finnan', 'Franklin', 'Garret', 'Garth', 'Gilbert', 'Gob', 'Harol', 'Igor', 'Jasper', 'Keith', 'Kevin', 'Lazam', 'Lerry', 'Lindal', 'Lyle', 'Merric', 'Mican', 'Milo', 'Morrin', 'Nebin', 'Nevil', 'Osborn', 'Ostran', 'Oswalt', 'Perrin', 'Poppy', 'Reed', 'Roscoe', 'Sam', 'Shardon', 'Tye', 'Ulmo', 'Wellby', 'Wendel', 'Wenner', 'Wes' ],
		'Family' : 
			[ 'Appleblossom', 'Bigheart', 'Brightmoon', 'Brushgather', 'Cherrycheeks', 'Copperkettle', 'Deephollow', 'Elderberry', 'Fastfoot', 'Fatrabbit', 'Glenfellow', 'Goldfound', 'Goodbarrel', 'Goodearth', 'Greenbottle', 'Greenleaf', 'High-hill', 'Hilltopple', 'Hogcollar', 'Honeypot', 'Jamjar', 'Kettlewhistle', 'Leagallow', 'Littlefoot', 'Nimblefingers', 'Porridgepot', 'Quickstep', 'Reedfellow', 'Shadowquick', 'Silvereyes', 'Smoothhands', 'Stonebridge', 'Stoutbridge', 'Stoutman', 'Strongbones', 'Sunmeadow', 'Swiftwhistle', 'Tallfellow', 'Tealeaf', 'Tenpenny', 'Thistletop', 'Thorngage', 'Tosscobble', 'Underbough', 'Underfoot', 'Warmwater', 'Whispermouse', 'Wildcloak', 'Wildheart', 'Wiseacre' ]
	},
	// http://www.eberron5e.com/
	'Hobgoblin' :
	{
		'Female' :
			[ 'Diitesh', 'Ekhaas', 'Jhazaal', 'Khaar', 'Kitaas', 'Mekiis', 'Razu', 'Reirie', 'Riila', 'Senen', 'Shaardat', 'Tuura' ],
		'Male' :
			[ 'Aruget', 'Biish', 'Daavan', 'Dagii', 'Duulun', 'Fenic', 'Haruuc', 'Iizan', 'Jhezon', 'Krakuul', 'Kurac', 'Lhurusk', 'Mazaan', 'Muuka', 'Munta', 'Nasaar', 'Oraan', 'Okaat', 'Ruus', 'Saabak', 'Tasaam', 'Taak', 'Tariic', 'Thuun', 'Vanii', 'Vanon', 'Woshar' ],
		'Clan' :
			[ 'Baaz', 'Draet', 'Draguus', 'Gan\'duur', 'Gantii Vus', 'Ghaal Sehn', 'Kuun', 'Mbar\'ost', 'Mur Talaan', 'Nasaar', 'Rhukaan Taash', 'Shaart', 'Thaar', 'Uhl', 'Volaar' ],
	},
	'Human' :
	{
		'Arkaiun' :
		{
			'Female' : [ 'Glouris', 'Maeve', 'Sevaera', 'Xaemarra', 'Zraela' ],
			'Male' : [ 'Houn', 'Rhivaun', 'Umbril', 'Xaemar', 'Zeltaebar' ],
			'Surname' : [ 'Lharaendo', 'Mristar', 'Wyndael']
		},
		'Bedine' :
		{
			'Female' : [ 'Aisha', 'Farah', 'Nura', 'Rashida', 'Zalebyeh' ],
			'Male' : [ 'Aali', 'Rashid', 'Tahnon', 'Tanzim', 'Whalide' ],
			'Tribe' : [ 'Alaii', 'Bordjia', 'Clelarra', 'Desai', 'Dakawa', 'Dursalai', 'Goldor', 'Iriphawa', 'Kellordrai', 'Lalajar', 'Qahtan', 'Yethtai', 'Zazalaar' ]
		},
		'Calishite' :
		{
			'Female' : [ 'Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida' ],
			'Male' : [ 'Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir' ],
			'Surname' : [ 'Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein' ]
		},
		'Chondathan' :
		{
			'Female' : [ 'Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele' ],
			'Male' : [ 'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd' ],
			'Surname' : [ 'Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag' ]
		},
		'Damaran' :
		{
			'Female' : [ 'Alethra', 'Kara', 'Katernin', 'Mara', 'Natali', 'Olma', 'Tana', 'Zora' ],
			'Male' : [ 'Bor', 'Fodel', 'Glar', 'Grigor', 'Igan', 'Ivor', 'Kosef', 'Mival', 'Orel', 'Pavel', 'Sergor' ],
			'Surname' : [ 'Bersk', 'Chernin', 'Dotsk', 'Kulenov', 'Marsk', 'Nemetsk', 'Shemov', 'Starag' ]
		},
		'Ffolk' :
		{
			'Female' : [ 'Alicia', 'Gennifer', 'Meridith', 'Elaine', 'Olivia' ],
			'Male' : [ 'Artur', 'Bern', 'Colin', 'Manfred', 'Tristan' ],
			'Surname' : [ 'Archer', 'Gareth', 'Leed', 'Kendrick', 'Morgan', 'Waters' ]
		},
		'Gur' :
		{
			'Female' : [ 'Varra', 'Ulmarra', 'Imza', 'Navarra', 'Yuldra' ],
			'Male' : [ 'Boriv', 'Gardar', 'Madevik', 'Vlad' ],
			'Surname' : [ 'Chergoba', 'Drazlad', 'Tazyara', 'Vargoba', 'Stayankina' ]
		},
		'Halruaan' :
		{
			'Female' : [ 'Aithe', 'Chalan', 'Oloma', 'Phaele', 'Sarade' ],
			'Male' : [ 'Aldym', 'Chand', 'Meleghost', 'Presmer', 'Sandrue', 'Uregaunt' ],
			'Surname' : [ 'Avhoste', 'Darante', 'Maurmeril', 'Stamaraster' ]
		},
		'Illuskan' :
		{
			'Female' : [ 'Amafrey', 'Betha', 'Cefrey', 'Kethra', 'Mara', 'Olga', 'Silifrey', 'Westra' ],
			'Male' : [ 'Ander', 'Blath', 'Bran', 'Frath', 'Geth', 'Lander', 'Luth', 'Malcer', 'Stor', 'Taman', 'Urth' ],
			'Surname' : [ 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Windrivver' ]
		},
		'Imaskari' :
		{
			'Female' : [ 'Apret', 'Bask', 'Fanul', 'Mokat', 'Nismet', 'Ril' ],
			'Male' : [ 'Charva', 'Duma', 'Hukir', 'Jama', 'Pradir', 'Sikhil' ],
			'Surname' : [ 'Datharathi', 'Melpurvatta', 'Nalambar', 'Tiliputakas' ]
		},
		'Mulan' :
		{
			'Female' : [ 'Arizima', 'Chathi', 'Nephis', 'Nulara', 'Murithi', 'Sefris', 'Thola', 'Umara', 'Zolis' ],
			'Male' : [ 'Aoth', 'Bareris', 'Ehput-Ki', 'Kethoth', 'Mumed', 'Ramas', 'So-Kehur', 'Thazar-De', 'Urhur' ],
			'Surname' : [ 'Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt' ]
		},
		'Nar' :
		{
			'Female' : [ 'Anva', 'Dasha', 'Dima', 'Olga', 'Westra', 'Zlatara' ],
			'Male' : [ 'Avan', 'Ostaram', 'Petro', 'Stor', 'Taman', 'Thalaman', 'Urth' ],
			'Surname' : [ 'Dashkev', 'Hargroth', 'Laboda', 'Lackman', 'Stonar', 'Stormwind', 'Sulyma' ]
		},
		'Rashemi' :
		{
			'Female' : [ 'Fyevarra', 'Hulmarra', 'Immith', 'Imzel', 'Navarra', 'Shevarra', 'Tammith. Yuldra' ],
			'Male' : [ 'Borivik', 'Faurgar', 'Jandar', 'Kanithar', 'Madislak', 'Ralmevik', 'Shaumar', 'Vladislak' ],
			'Surname' : [ 'Chergoba', 'Dyernina', 'Iltazyara', 'Murnyethara', 'Stayanoga', 'Ulmokina' ]
		},
		'Shaaran' :
		{
			'Female' : [ 'Anet', 'Bes', 'Idim', 'Lenet', 'Moqem', 'Neghet', 'Sihvet' ],
			'Male' : [ 'Awar', 'Cohis', 'Damota', 'Gewar', 'Hapah', 'Laskaw', 'Senesaw', 'Tokhis' ],
			'Surname' : [ 'Cor', 'Marak', 'Laumee', 'Harr', 'Moq', 'Qo', 'Harr', 'Woraw', 'Tarak' ]
		},
		'Shou' :
		{
			'Female' : [ 'Bai', 'Chao', 'Jia', 'Lei', 'Mei', 'Qiao', 'Shui', 'Tai' ],
			'Male' : [ 'An', 'Chen', 'Chi', 'Fai', 'Jiang', 'Jun', 'Lian', 'Long', 'Meng', 'On', 'Shan', 'Shui', 'Wen' ],
			'Surname' : [ 'Chien', 'Huang', 'Kao', 'Kung', 'Lao', 'Ling', 'Mei', 'Pin', 'Shin', 'Sum', 'Tan', 'Wan' ]
		},
		'Tuigan' :
		{
			'Female' : [ 'Bolormaa', 'Bortai', 'Erdene', 'Naran', 'Ulutiun' ],
			'Male' : [ 'Atlan', 'Bayar', 'Chingis', 'Chinua', 'Mongke', 'Temur' ]
		},
		'Turami' :
		{
			'Female' : [ 'Balama', 'Dona', 'Faila', 'Jalana', 'Luisa', 'Marta', 'Quara', 'Selise', 'Vonda' ],
			'Male' : [ 'Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo', 'Romero', 'Salazar', 'Umbero' ],
			'Surname' : [ 'Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Marivaldi', 'Pisacar', 'Ramondo' ]
		},
		'Ulutiun' :
		{
			'Female' : [ 'Akna', 'Chena', 'Kaya', 'Sedna', 'Ublereak' ],
			'Male' : [ 'Amak', 'Chu', 'Imnek', 'Kanut', 'Siku' ]
		}
	},
	'Human (Real)' :
	{
		'Arabic' :
		{
			'Female' :
				[ 'Aaliyah', 'Aida', 'Akilah', 'Alia', 'Amina', 'Atefeh', 'Chaima', 'Dalia', 'Ehsan', 'Elham', 'Farah', 'Fatemah', 'Gamila', 'Iesha', 'Inbar', 'Kamaria', 'Khadija', 'Layla', 'Lupe', 'Nabila', 'Nadine', 'Naima', 'Najila', 'Najwa', 'Nakia', 'Nashwa', 'Nawra', 'Nuha', 'Nura', 'Oma', 'Qadira', 'Qamar', 'Qistina', 'Rahima', 'Rihanna', 'Saadia', 'Sabah', 'Sada', 'Saffron', 'Sahar', 'Salma', 'Shatha', 'Tahira', 'Takisha', 'Thana', 'Yadira', 'Zahra', 'Zaida', 'Zaina', 'Zeinab' ],
			'Male' :
				[ 'Abbad', 'Abdul', 'Achmed', 'Akeem', 'Alif', 'Amir', 'Asim', 'Bashir', 'Bassam', 'Fahim', 'Farid', 'Farouk', 'Fayez', 'Fayyaad', 'Fazil', 'Hakim', 'Halil', 'Hamid', 'Hazim', 'Heydar', 'Hussein', 'Jabari', 'Jafar', 'Jahid', 'Jamal', 'Kalim', 'Karim', 'Kazim', 'Khadim', 'Khalid', 'Mahmud', 'Mansour', 'Musharraf', 'Mustafa', 'Nadir', 'Nazim', 'Omar', 'Qadir', 'Qusay', 'Rafiq', 'Rakim', 'Rashad', 'Rauf', 'Saladin', 'Sami', 'Samir', 'Talib', 'Tamir', 'Tariq', 'Yazid' ]
		},
		'Celtic' :
		{
			'Female' :
				[' Aife', 'Aina', 'Alane', 'Ardena', 'Arienh', 'Beatha', 'Birgit', 'Briann', 'Caomh', 'Cara', 'Cinnia', 'Cordelia', 'Deheune', 'Divone', 'Donia', 'Doreena', 'Elsha', 'Enid', 'Ethne', 'Evelina', 'Fianna', 'Genevieve', 'Gilda', 'Gitta', 'Grania', 'Gwyndolin', 'Idelisa', 'Isolde', 'Keelin', 'Kennocha', 'Lavena', 'Lesley', 'Linnette', 'Lyonesse', 'Mabina', 'Marvina', 'Mavis', 'Mima', 'Morgan', 'Muriel', 'Nareena', 'Oriana', 'Regan', 'Ronat', 'Rowena', 'Selma', 'Ula', 'Venetia', 'Wynne', 'Yseult' ],
			'Male' :
				[ 'Airell', 'Airic', 'Alan', 'Anghus', 'Aodh', 'Bardon', 'Bearacb', 'Bevyn', 'Boden', 'Bran', 'Brasil', 'Bredon', 'Brian', 'Bricriu', 'Bryant', 'Cadman', 'Caradoc', 'Cedric', 'Conalt', 'Conchobar', 'Condon', 'Darcy', 'Devin', 'Dillion', 'Donaghy', 'Donall', 'Duer', 'Eghan', 'Ewyn', 'Ferghus', 'Galvyn', 'Gildas', 'Guy', 'Harvey', 'Iden', 'Irven', 'Karney', 'Kayne', 'Kelvyn', 'Kunsgnos', 'Leigh', 'Maccus', 'Moryn', 'Neale', 'Owyn', 'Pryderi', 'Reaghan', 'Taliesin', 'Tiernay', 'Turi' ]
		},
		'Chinese' :
		{
			'Female' : 
				[ 'Ai', 'Anming', 'Baozhai', 'Bei', 'Caixia', 'Changchang', 'Chen', 'Chou', 'Chunhua', 'Daianna', 'Daiyu', 'Die', 'Ehuang', 'Fenfang', 'Ge', 'Hong', 'Huan', 'Huifang', 'Jia', 'Jiao', 'Jiaying', 'Jingfei', 'Jinjing', 'Lan', 'Li', 'Lihua', 'Lin', 'Ling', 'Liu', 'Meili', 'Ning', 'Qi', 'Qiao', 'Rong', 'Shu', 'Shuang', 'Song', 'Ting', 'Wen', 'Xia', 'Xiaodan', 'Xiaoli', 'Xingjuan', 'Xue', 'Ya', 'Yan', 'Ying', 'Yuan', 'Yue', 'Yun' ],
			'Male' :
				[ 'Bingwen', 'Bo', 'Bolin', 'Chang', 'Chao', 'Chen', 'Cheng', 'Da', 'Dingxiang', 'Fang', 'Feng', 'Fu', 'Gang', 'Guang', 'Hai', 'Heng', 'Hong', 'Huan', 'Huang', 'Huiliang', 'Huizhong', 'Jian', 'Jiayi', 'Junjie', 'Kang', 'Lei', 'Liang', 'Ling', 'Liwei', 'Meilin', 'Niu', 'Peizhi', 'Peng', 'Ping', 'Qiang', 'Qiu', 'Quan', 'Renshu', 'Rong', 'Ru', 'Shan', 'Shen', 'Tengfei', 'Wei', 'Xiaobo', 'Xiaoli', 'Xin', 'Yang', 'Ying', 'Zhong' ]
		},
		'Egyptian' :
		{
			'Female' :
				[ 'A\'at', 'Ahset', 'Amunet', 'Aneski', 'Atet', 'Baketamon', 'Betrest', 'Bunefer', 'Dedyet', 'Hatshepsut', 'Hentie', 'Herit', 'Hetepheres', 'Intakaes', 'Ipwet', 'Itet', 'Joba', 'Kasmut', 'Kemanub', 'Khemut', 'Kiya', 'Maia', 'Menhet', 'Merit', 'Meritamen', 'Merneith', 'Merseger', 'Muyet', 'Nebet', 'Nebetah', 'Nedjemmut', 'Nefertiti', 'Neferu', 'Neithotep', 'Nit', 'Nofret', 'Nubemiunu', 'Peseshet', 'Pypuy', 'Qalhata', 'Rai', 'Redji', 'Sadeh', 'Sadek', 'Sitamun', 'Sitre', 'Takhat', 'Tarset', 'Taweret', 'Werenro' ],
			'Male' :
				[ 'Ahmose', 'Akhoim', 'Amasis', 'Amenemhet', 'Anen', 'Banefre', 'Bek', 'Djedefre', 'Djoser', 'Hekaib', 'Henenu', 'Horemheb', 'Horwedja', 'Huya', 'Ibebi', 'Idu', 'Imhotep', 'Ineni', 'Ipuki', 'Irsu', 'Kagemni', 'Kawab', 'Kenamon', 'Kewap', 'Khaemwaset', 'Khafra', 'Khusebek', 'Masaharta', 'Meketre', 'Menkhaf', 'Merenre', 'Metjen', 'Nebamun', 'Nebetka', 'Nehi', 'Nekure', 'Nessumontu', 'Pakhom', 'Pawah', 'Pawero', 'Ramose', 'Rudjek', 'Sabaf', 'Sebek-khu', 'Sebni', 'Senusret', 'Shabaka', 'Somintu', 'Thaneni', 'Thethi' ]
		},
		'English' :
		{
			'Female' :
				[ 'Adelaide', 'Agatha', 'Agnes', 'Alice', 'Aline', 'Anne', 'Avelina', 'Avice', 'Beatrice', 'Cecily', 'Egelina', 'Eleanor', 'Elizabeth', 'Ella', 'Eloise', 'Elysande', 'Emeny', 'Emma', 'Emmeline', 'Ermina', 'Eva', 'Galiena', 'Geva', 'Giselle', 'Griselda', 'Hadwisa', 'Helen', 'Herleva', 'Hugolina', 'Ida', 'Isabella', 'Jacoba', 'Jane', 'Joan', 'Juliana', 'Katherine', 'Margery', 'Mary', 'Matilda', 'Maynild', 'Millicent', 'Oriel', 'Rohesia', 'Rosalind', 'Rosamund', 'Sarah', 'Susannah', 'Sybil', 'Williamina', 'Yvonne' ],
			'Male' : 
				[ 'Adam', 'Adelard', 'Aldous', 'Anselm', 'Arnold', 'Bernard', 'Bertram', 'Charles', 'Clerebold', 'Conrad', 'Diggory', 'Drogo', 'Everard', 'Frederick', 'Geoffrey', 'Gerald', 'Gilbert', 'Godfrey', 'Gunter', 'Guy', 'Henry', 'Heward', 'Hubert', 'Hugh', 'Jocelyn', 'John', 'Lance', 'Manfred', 'Miles', 'Nicholas', 'Norman', 'Odo', 'Percival', 'Peter', 'Ralf', 'Randal', 'Raymond', 'Reynard', 'Richard', 'Robert', 'Roger', 'Roland', 'Rolf', 'Simon', 'Theobald', 'Theodoric', 'Thomas', 'Timm', 'William', 'Wymar' ]
		},
		'French' :
		{
			'Female' : 
				[ 'Aalis', 'Agatha', 'Agnez', 'Alberea', 'Alips', 'Amee', 'Amelot', 'Anne', 'Avelina', 'Blancha', 'Cateline', 'Cecilia', 'Claricia', 'Collette', 'Denisete', 'Dorian', 'Edelina', 'Emelina', 'Emmelot', 'Ermentrudis', 'Gibelina', 'Gila', 'Gillette', 'Guiburgis', 'Guillemette', 'Guoite', 'Hecelina', 'Heloysis', 'Helyoudis', 'Hodeardis', 'Isabellis', 'Jaquette', 'Jehan', 'Johanna', 'Juliote', 'Katerine', 'Luciana', 'Margot', 'Marguerite', 'Maria', 'Marie', 'Melisende', 'Odelina', 'Perrette', 'Petronilla', 'Sedilia', 'Stephana', 'Sybilla', 'Ysabeau', 'Ysabel' ],
			'Male' :
				[ 'Ambroys', 'Ame', 'Andri', 'Andriet', 'Anthoine', 'Bernard', 'Charles', 'Chariot', 'Colin', 'Denis', 'Durant', 'Edouart', 'Eremon', 'Ernault', 'Ethor', 'Felix', 'Floquart', 'Galleren', 'Gaultier', 'Gilles', 'Guy', 'Henry', 'Hugo', 'Imbert', 'Jacques', 'Jacquot', 'Jean', 'Jehannin', 'Louis', 'Louys', 'Loys', 'Martin', 'Michel', 'Mille', 'Morelet', 'Nicolas', 'Nicolle', 'Oudart', 'Perrin', 'Phillippe', 'Pierre', 'Regnault', 'Richart', 'Robert', 'Robinet', 'Sauvage', 'Simon', 'Talbot', 'Tanguy', 'Vincent' ],
		},
		'German' :
		{
			'Female' :
				[ 'Adelhayt', 'Affra', 'Agatha', 'Allet', 'Angnes', 'Anna', 'Apell', 'Applonia', 'Barbara', 'Brida', 'Brigita', 'Cecilia', 'Clara', 'Cristina', 'Dorothea', 'Duretta', 'Ella', 'Els', 'Elsbeth', 'Engel', 'Enlein', 'Enndlin', 'Eva', 'Fela', 'Fronicka', 'Genefe', 'Geras', 'Gerhauss', 'Gertrudt', 'Guttel', 'Helena', 'Irmel', 'Jonata', 'Katerina', 'Kuen', 'Kungund', 'Lucia', 'Madalena', 'Magdalen', 'Margret', 'Marlein', 'Martha', 'Otilia', 'Ottilg', 'Peternella', 'Reusin', 'Sibilla', 'Ursel', 'Vrsula', 'Walpurg' ],
			'Male' :
				[ 'Albrecht', 'Allexander', 'Baltasar', 'Benedick', 'Berhart', 'Caspar', 'Clas', 'Cristin', 'Cristoff', 'Dieterich', 'Engelhart', 'Erhart', 'Felix', 'Frantz', 'Fritz', 'Gerhart', 'Gotleib', 'Hans', 'Hartmann', 'Heintz', 'Herman', 'Jacob', 'Jeremias', 'Jorg', 'Karll', 'Kilian', 'Linhart', 'Lorentz', 'Ludwig', 'Marx', 'Melchor', 'Mertin', 'Michel', 'Moritz', 'Osswald', 'Ott', 'Peter', 'RudolfF', 'Ruprecht', 'Sewastian', 'Sigmund', 'Steffan', 'Symon', 'Thoman', 'Ulrich', 'Vallentin', 'Wendel', 'Wilhelm', 'Wolff', 'Wolfgang' ],
		},
		'Greek' :
		{
			'Female' :
				[ 'Acantha', 'Aella', 'Alektos', 'Alkippe', 'Andromeda', 'Antigone', 'Ariadne', 'Astraea', 'Chloros', 'Chryseos', 'Daphne', 'Despoina', 'Dione', 'Eileithyia', 'Elektra', 'Euadne', 'Eudora', 'Eunomia', 'Hekabe', 'Helene', 'Hermoione', 'Hippolyte', 'Ianthe', 'Iokaste', 'Iole', 'Iphigenia', 'Ismene', 'Kalliope', 'Kallisto', 'Kalypso', 'Karme', 'Kassandra', 'Kassiopeia', 'Kirke', 'Kleio', 'Klotho', 'Klytie', 'Kynthia', 'Leto', 'Megaera', 'Melaina', 'Melpomene', 'Nausikaa', 'Nemesis', 'Niobe', 'Ourania', 'Phaenna', 'Polymnia', 'Semele', 'Theia' ],
			'Male' :
				[ 'Adonis', 'Adrastos', 'Aeson', 'Aias', 'Aineias', 'Aiolos', 'Alekto', 'Alkeides', 'Argos', 'Brontes', 'Damazo', 'Dardanos', 'Deimos', 'Diomedes', 'Endymion', 'Epimetheus', 'Erebos', 'Euandros', 'Ganymedes', 'Glaukos', 'Hektor', 'Heros', 'Hippolytos', 'Iacchus', 'Iason', 'Kadmos', 'Kastor', 'Kephalos', 'Kepheus', 'Koios', 'Kreios', 'Laios', 'Leandros', 'Linos', 'Lykos', 'Melanthios', 'Menelaus', 'Mentor', 'Neoptolemus', 'Okeanos', 'Orestes', 'Pallas', 'Patroklos', 'Philandros', 'Phoibos', 'Phrixus', 'Priamos', 'Pyrrhos', 'Xanthos', 'Zephyros' ]
		},
		'Indian' :
		{
			'Female' :
				[ 'Abha', 'Aishwarya', 'Amala', 'Ananda', 'Ankita', 'Archana', 'Avani', 'Chandana', 'Chandrakanta', 'Chetan', 'Darshana', 'Devi', 'Dipti', 'Esha', 'Gauro', 'Gita', 'Indira', 'Indu', 'Jaya', 'Kala', 'Kalpana', 'Kamala', 'Kanta', 'Kashi', 'Kishori', 'Lalita', 'Lina', 'Madhur', 'Manju', 'Meera', 'Mohana', 'Mukta', 'Nisha', 'Nitya', 'Padma', 'Pratima', 'Priya', 'Rani', 'Sarala', 'Shakti', 'Shanta', 'Shobha', 'Sima', 'Sonal', 'Sumana', 'Sunita', 'Tara', 'Valli', 'Vijaya', 'Vimala' ],
			'Male' :
				[ 'Abhay', 'Ahsan', 'Ajay', 'Ajit', 'Akhil', 'Amar', 'Amit', 'Ananta', 'Aseem', 'Ashok', 'Bahadur', 'Basu', 'Chand', 'Chandra', 'Damodar', 'Darhsan', 'Devdan', 'Dinesh', 'Dipak', 'Gopal', 'Govind', 'Harendra', 'Harsha', 'Ila', 'Isha', 'Johar', 'Kalyan', 'Kiran', 'Kumar', 'Lakshmana', 'Mahavir', 'Narayan', 'Naveen', 'Nirav', 'Prabhakar', 'Prasanna', 'Raghu', 'Rajanikant', 'Rakesh', 'Ranjeet', 'Rishi', 'Sanjay', 'Sekar', 'Shandar', 'Sumantra', 'Vijay', 'Vikram', 'Vimal', 'Vishal', 'Yash' ]
		},
		'Japanese' :
		{
			'Female' : 
				[ 'Aika', 'Akemi', 'Akiko', 'Amaya', 'Asami', 'Ayumi', 'Bunko', 'Chieko', 'Chika', 'Chiyo', 'Cho', 'Eiko', 'Emiko', 'Eri', 'Etsuko', 'Gina', 'Hana', 'Haruki', 'Hideko', 'Hikari', 'Hiroko', 'Hisoka', 'Hishi', 'Hotaru', 'Izumi', 'Kameyo', 'Kasumi', 'Kimiko', 'Kotone', 'Kyoko', 'Maiko', 'Masako', 'Mi', 'Minori', 'Mizuki', 'Naoki', 'Natsuko', 'Noriko', 'Rei', 'Ren', 'Saki', 'Shigeko', 'Shinju', 'Sumiko', 'Toshiko', 'Tsukiko', 'Ume', 'Usagi', 'Yasuko', 'Yuriko' ],
			'Male' :
				[ 'Akio', 'Atsushi', 'Daichi', 'Daiki', 'Daisuke', 'Eiji', 'Fumio', 'Hajime', 'Haru', 'Hideaki', 'Hideo', 'Hikaru', 'Hiro', 'Hiroki', 'Hisao', 'Hitoshi', 'Isamu', 'Isao', 'Jun', 'Katashi', 'Katsu', 'Kei', 'Ken', 'Kenshin', 'Kenta', 'Kioshi', 'Makoto', 'Mamoru', 'Masato', 'Masumi', 'Noboru', 'Norio', 'Osamu', 'Ryota', 'Sadao', 'Satoshi', 'Shigeo', 'Shin', 'Sora', 'Tadao', 'Takehiko', 'Takeo', 'Takeshi', 'Takumi', 'Tamotsu', 'Tatsuo', 'Toru', 'Toshio', 'Yasio', 'Yukio' ]
		},
		'Mesoamerican' :
		{
			'Female' :
				[ 'Ahuiliztli', 'Atl', 'Centehua', 'Chalchiuitl', 'Chipahua', 'Cihuaton', 'Citlali', 'Citlalmina', 'Coszcatl', 'Cozamalotl', 'Cuicatl', 'Eluia', 'Eloxochitl', 'Eztli', 'Ichtaca', 'Icnoyotl', 'Ihuicatl', 'Ilhuitl', 'Itotia', 'Iuitl', 'Ixcatzin', 'Izel', 'Malinalxochitl', 'Mecatl', 'Meztli', 'Miyaoaxochitl', 'Mizquixaual', 'Moyolehuani', 'Nahuatl', 'Necahual', 'Nenetl', 'Nochtli', 'Noxochicoztli', 'Ohtli', 'Papan', 'Patli', 'Quetzalxochitl', 'Sacnite', 'Teicui', 'Tepin', 'Teuicui', 'Teyacapan', 'Tlaco', 'Tlacoehua', 'Tlacotl', 'Tlalli', 'Tlanextli', 'Xihuitl', 'Xiuhcoatl', 'Xiuhtonal' ],
			'Male' :
				[ 'Achcauhtli', 'Amoxtli', 'Chicahua', 'Chimalli', 'Cipactli', 'Coaxoch', 'Coyotl', 'Cualli', 'Cuauhtémoc', 'Cuetlachtilo', 'Cuetzpalli', 'Cuixtli', 'Ehecatl', 'Etalpalli', 'Huemac', 'Huitzillihuitl', 'Iccauhtli', 'Illhicamina', 'Itzli', 'Ixtli', 'Mahuizoh', 'Manauia', 'Matlal', 'Matlalihuitl', 'Milintica', 'Mictlantecuhtli', 'Milintica', 'Momoztli', 'Namacuix', 'Necalli', 'Necuametl', 'Nezahualcoyotl', 'Nexahualpilli', 'Nochehuatl', 'Nopaltzin', 'Ollin', 'Quauhtli', 'Tenoch', 'Teoxihuitl', 'Tepiltzin', 'Tezacoatl', 'Tlacaelel', 'Tlacelel', 'Tlaloc', 'Tlanextic', 'Tlazohtlaloni', 'Tlazopillo', 'Uetzcayotl', 'Xipilli', 'Yaotl' ]
		},
		'Niger-Congo' :
		{
			'Female' :
				[ 'Abebi', 'Abena', 'Abimbola', 'Akoko', 'Akachi', 'Alaba', 'Anuli', 'Ayo', 'Bolanle', 'Bosede', 'Chiamaka', 'Chidi', 'Chidimma', 'Chinyere', 'Chioma', 'Dada', 'Ebele', 'Efemena', 'Ejiro', 'Ekundayo', 'Enitan', 'Funanya', 'Ifunanya', 'Ige', 'Ime', 'Kunto', 'Lesedi', 'Lumusi', 'Mojisola', 'Monifa', 'Nakato', 'Ndidi', 'Ngozi', 'Nkiruka', 'Nneka', 'Ogechi', 'Olamide', 'Oluchi', 'Omolara', 'Onyeka', 'Simisola', 'Temitope', 'Thema', 'Titlayo', 'Udo', 'Uduak', 'Ufuoma', 'Yaa', 'Yejide', 'Yewande' ],
			'Male' :
				[ 'Abebe', 'Abel', 'Abidemi', 'Abrafo', 'Adisa', 'Amadi', 'Amara', 'Anyim', 'Azubuike', 'Bapoto', 'Baraka', 'Bohlale', 'Bongani', 'Bujune', 'Buziba', 'Chakide', 'Chibuzo', 'Chika', 'Chimola', 'Chiratidzo', 'Dabulamanzi', 'Dumisa', 'Dwanh', 'Emeka', 'Folami', 'Gatura', 'Gebhuza', 'Gero', 'Isoba', 'Kagiso', 'Kamau', 'Katlego', 'Masego', 'Matata', 'Nthanda', 'Ogechi', 'Olwenyo', 'Osumare', 'Paki', 'Qinisela', 'Quanda', 'Samanya', 'Shanika', 'Sibonakaliso', 'Tapiwa', 'Thabo', 'Themba', 'Uzoma', 'Zuberi', 'Zuri' ]
		},
		'Norse' :
		{
			'Female' :
				[ 'Alfhild', 'Arnbjorg', 'Ase', 'Aslog', 'Astrid', 'Auda', 'Audhid', 'Bergljot', 'Birghild', 'Bodil', 'Brenna', 'Brynhild', 'Dagmar', 'Eerika', 'Eira', 'Gudrun', 'Gunborg', 'Gunhild', 'Gunvor', 'Helga', 'Hertha', 'Hilde', 'Hillevi', 'Ingrid', 'Iona', 'Jorunn', 'Kari', 'Kenna', 'Magnhild', 'Nanna', 'Olga', 'Ragna', 'Ragnhild', 'Ranveig', 'Runa', 'Saga', 'Sigfrid', 'Signe', 'Sigrid', 'Sigwjnn', 'Solveg', 'Svanhild', 'Thora', 'Torborg', 'Torunn', 'Tove', 'Unn', 'Vigdis', 'Ylva', 'Yngvild' ],
			'Male' :
				[ 'Agni', 'Alaric', 'Anvindr', 'Arvid', 'Asger', 'Asmund', 'Bjarte', 'Bjorg', 'Bjorn', 'Brandr', 'Brandt', 'Brynjar', 'Calder', 'Colborn', 'Cuyler', 'Egil', 'Einar', 'Eric', 'Erland', 'Fiske', 'Folkvar', 'Fritjof', 'Frode', 'Geir', 'Halvar', 'Hemming', 'Hjalmar', 'Hjortr', 'Ingimarr', 'Ivar', 'Knud', 'Leif', 'Liufr', 'Manning', 'Oddr', 'Olin', 'Ormr', 'Ove', 'Rannulfr', 'Sigurd', 'Skari', 'Snorri', 'Sten', 'Stigandr', 'Stigr', 'Sven', 'Trygve', 'Ulf', 'Vali', 'Vidar' ]
		},
		'Polynesian' :
		{
			'Female' :
				[ 'Ahulani', 'Airini', 'Alani', 'Aluala', 'Anahera', 'Anuhea', 'Aolani', 'Elenoa', 'Emele', 'Fetia', 'Fiva', 'Halona', 'Hi\'ilei', 'Hina', 'Hinatea', 'Huali', 'Inia', 'Inina', 'Iolani', 'Isa', 'Ka\'ana\'ana', 'Ka\'ena', 'Kaamia', 'Kahula', 'Kailani', 'Kamaile', 'Kamakani', 'Kamea', 'Latai', 'Liona', 'Lokelani', 'Marva', 'Mehana', 'Millawa', 'Moana', 'Ngana', 'Nohea', 'Pelika', 'Sanoe', 'Satina', 'Tahia', 'Tasi', 'Tiaho', 'Tihani', 'Toroa', 'Ulanni', 'Uluwehi', 'Vaina', 'Waiola', 'Waitara' ],
			'Male' :
				[ 'Afa', 'Ahohako', 'Aisake', 'Aleki', 'Anewa', 'Anitelu', 'Aputi', 'Ariki', 'Butat', 'Enele', 'Fef', 'Fuifui', 'Ha\'aheo', 'Hanohano', 'Haunui', 'Hekili', 'Hiapo', 'Hikawera', 'Hanano', 'Ho\'onani', 'Hoku', 'Hu\'eu', 'Ina', 'Itu', 'Ka\'aukai', 'Ka\'eo', 'Kaelani', 'Kahale', 'Kaiea', 'Kaikoa', 'Kana\'l', 'Koamalu', 'Ka', 'Laki', 'Makai', 'Manu', 'Manuka', 'Nui', 'Pono', 'Popoki', 'Ruru', 'Tahu', 'Taurau', 'Tuala', 'Turoa', 'Tusitala', 'Uaine', 'Waata', 'Waipuna', 'Zamar' ]
		},
		'Roman' :
		{
			'Female' :
				[ 'Aelia', 'Aemilia', 'Agrippina', 'Alba', 'Antonia', 'Aquila', 'Augusta', 'Aurelia', 'Balbina', 'Blandina', 'Caelia', 'Camilla', 'Casia', 'Claudia', 'Cloelia', 'Domitia', 'Drusa', 'Fabia', 'Fabricia', 'Fausta', 'Flavia', 'Floriana', 'Fulvia', 'Germana', 'Glaucia', 'Gratiana', 'Hadriana', 'Hermina', 'Horatia', 'Hortensia', 'Iovita', 'Iulia', 'Laelia', 'Laurentia', 'Livia', 'Longina', 'Lucilla', 'Lucretia', 'Marcella', 'Marcia', 'Maxima', 'Nona', 'Octavia', 'Paulina', 'Petronia', 'Porcia', 'Tacita', 'Tullia', 'Verginia', 'Vita' ],
			'Male' :
				[ 'Aelius', 'Aetius', 'Agrippa', 'Albanus', 'Albus', 'Antonius', 'Appius', 'Aquilinus', 'Atilus', 'Augustus', 'Aurelius', 'Avitus', 'Balbus', 'Blandus', 'Blasius', 'Brutus', 'Caelius', 'Caius', 'Casian', 'Cassius', 'Cato', 'Celsus', 'Claudius', 'Cloelius', 'Cnaeus', 'Crispus', 'Cyprianus', 'Diocletianus', 'Egnatius', 'Ennius', 'Fabricius', 'Faustus', 'Gaius', 'Germanus', 'Gnaeus', 'Horatius', 'Iovianus', 'Iulius', 'Lucilius', 'Manius', 'Marcus', 'Marius', 'Maximus', 'Octavius', 'Paulus', 'Quintilian', 'Regulus', 'Servius', 'Tacitus', 'Varius' ]
		},
		'Slavic' :
		{
			'Female' :
				[ 'Agripina', 'Anastasiya', 'Bogdana', 'Boleslava', 'Bozhena', 'Danica', 'Darya', 'Desislava', 'Dragoslava', 'Dunja', 'Efrosinia', 'Ekaterina', 'Elena', 'Faina', 'Galina', 'Irina', 'Iskra', 'Jasna', 'Katarina', 'Katya', 'Kresimira', 'Lyudmila', 'Magda', 'Mariya', 'Militsa', 'Miloslava', 'Mira', 'Miroslava', 'Mokosh', 'Morana', 'Natasha', 'Nika', 'Olga', 'Rada', 'Radoslava', 'Raisa', 'Slavitsa', 'Sofiya', 'Stanislava', 'Svetlana', 'Tatyana', 'Tomislava', 'Veronika', 'Vesna', 'Vladimira', 'Yaroslava', 'Yelena', 'Zaria', 'Zarya', 'Zoria' ],
			'Male' :
				[ 'Aleksandru', 'Berislav', 'Blazh', 'Bogumir', 'Boguslav', 'Borislav', 'Bozhidar', 'Bratomil', 'Bratoslav', 'Bronislav', 'Chedomir', 'Chestibor', 'Chestirad', 'Chestislav', 'Desilav', 'Dmitrei', 'Dobromil', 'Dobroslav', 'Dragomir', 'Dragutin', 'Drazhan', 'Gostislav', 'Kazimir', 'Kyrilu', 'Lyubomir', 'Mechislav', 'Milivoj', 'Milosh', 'Mstislav', 'Nikola', 'Ninoslav', 'Premislav', 'Radomir', 'Radovan', 'Ratimir', 'Rostislav', 'Slavomir', 'Stanislav', 'Svetoslav', 'Tomislav', 'Vasili', 'Velimir', 'Vladimir', 'Vlastimir', 'Volodimeru', 'Vratislav', 'Yarognev', 'Yaromir', 'Zbignev' ]
		},
		'Spanish' :
		{
			'Female' :
				[ 'Abella', 'Adalina', 'Adora', 'Adriana', 'Ana', 'Antonia', 'Basilia', 'Beatriz', 'Bonita', 'Camila', 'Cande', 'Carmen', 'Catlina', 'Dolores', 'Dominga', 'Dorotea', 'Elena', 'Elicia', 'Esmerelda', 'Felipina', 'Francisca', 'Gabriela', 'Imelda', 'Ines', 'Isabel', 'Juana', 'Leocadia', 'Leonor', 'Leta', 'Lucinda', 'Maresol', 'Maria', 'Maricela', 'Matilde', 'Melania', 'Monica', 'Neva', 'Nilda', 'Petrona', 'Rafaela', 'Ramira', 'Rosario', 'Sofia', 'Suelo', 'Teresa', 'Tomasa', 'Valentia', 'Veronica', 'Ynes', 'Ysabel' ],
			'Male' :
				[ 'Alexandre', 'Alfonso', 'Alonso', 'Anthon', 'Arcos', 'Arnaut', 'Arturo', 'Bartoleme', 'Benito', 'Bernat', 'Blasco', 'Carlos', 'Damian', 'Diego', 'Domingo', 'Enrique', 'Escobar', 'Ettor', 'Fernando', 'Franciso', 'Gabriel', 'Garcia', 'Gaspar', 'Gil', 'Gomes', 'Goncalo', 'Gostantin', 'Jayme', 'Joan', 'Jorge', 'Jose', 'Juan', 'Machin', 'Martin', 'Mateu', 'Miguel', 'Nicolas', 'Pascual', 'Pedro', 'Porico', 'Ramiro', 'Ramon', 'Rodrigo', 'Sabastian', 'Salvador', 'Simon', 'Tomas', 'Tristan', 'Valeriano', 'Ynigo' ]
		}
	},
	'Infernal' :
	{
		'Female' :
			[ 'Akta', 'Anakis', 'Armara', 'Astaro', 'Aym', 'Beleth', 'Bryseis', 'Bune',  'Criella', 'Damaia', 'Decarabia', 'Ea', 'Gadreel', 'Gomory', 'Hecat', 'Ishte', 'Jezebeth', 'Kali', 'Kallista', 'Kasdeya', 'Lerissa', 'Lilith', 'Makaria', 'Manea', 'Markosian', 'Mastema', 'Naamah', 'Nemeia', 'Nija', 'Orianna', 'Osah', 'Phelaia', 'Prosperine', 'Purah', 'Pyra', 'Rieta', 'Ronobe', 'Ronwe', 'Seddit', 'Seere', 'Sekhmet', 'Semyaza', 'Shava', 'Shax', 'Sorath', 'Uzza', 'Vapula', 'Vepar', 'Verin' ],
		'Male' :
			[ 'Abad', 'Ahrim', 'Akmen', 'Amnon', 'Andram', 'Balam', 'Barakas', 'Bathin', 'Caim', 'Chem', 'Cimer', 'Cressel', 'Damakos', 'Ekemon', 'Euron', 'Fenriz', 'Forcas', 'Habor', 'Iados', 'Kairon', 'Leucis', 'Mamnen', 'Mantus', 'Marbas', 'Melech', 'Merihim', 'Modean', 'Mordai', 'Mormo', 'Morthos', 'Nicor', 'Nirgel', 'Oriax', 'Paymon', 'Pelaios', 'Purson', 'Qemuel', 'Raam', 'Rimmon', 'Sammal', 'Skamos', 'Tethren', 'Thamuz', 'Therai', 'Valafar', 'Vassago', 'Xappan', 'Zepar', 'Zephan' ]
	},
	'Kenku' :
		[ 'Smasher', 'Clanger', 'Slicer', 'Basher', 'Rat Scratch', 'Whistler', 'Mouser', 'Growler', 'Sail Snap', 'Hammerer', 'Cutter' ],
	'Kobold' :
	{
		'Female' : [ 'Adriaak', 'Harkail', 'Neeral', 'Ozula', 'Poro', 'Saassraa', 'Tarka' ],
		'Male' : [ 'Draahzin', 'Eadoo', 'Ipmeerk', 'Jamada', 'Kib', 'Makroo', 'Olp', 'Yraalik', 'Zornesk' ]
	},
	'Lizardfolk' :
		[ 'Achuak (Green)', 'Aryte (War)', 'Bae-shra (Animal)', 'Darastrix (Dragon)', 'Garurt (Axe)', 'Irhtos (Secret)', 'Jhank (Hammer)', 'Kepesk (Storm)', 'Kethend (Gem)', 'Korth (Danger)', 'Kosj (Small)', 'Kothar (Demon)', 'Li-trix (Armor)', 'Mirik (Song)', 'Othokent (Smart)', 'Sauriv (Eye)', 'Throden (Many)', 'Thurkear (Night)', 'Usk (Iron)', 'Valignat (Burn)', 'Vargach (Battle)', 'Verthica (Mountain)', 'Vutha (Black)', 'Vyth (Steel)' ],
	'Minotaur' :
	{
		'Female' : [ 'Duula', 'Esteru', 'Hester', 'Kuonu', 'Loodra', 'Oestra', 'Raastred', 'Seestra', 'Uovana', 'Weoren' ],
		'Male': [ 'Asteron', 'Bjorkus', 'Codrus', 'Foostus', 'Goeban', 'Jak', 'Minron', 'Noostoron', 'Podrus', 'Terios' ]
	},
	'Orc' :
	{
		'Female' :
			[ 'Arha', 'Baggi', 'Bendoo', 'Bilga', 'Brakka', 'Creega', 'Drenna', 'Ekk', 'Ernen', 'Engong', 'Fistula', 'Caaki', 'Gorga', 'Grai', 'Greeba', 'Grigi', 'Gynk', 'Hrathy', 'Huru', 'Ilga', 'Kabbarg', 'Kansif', 'Lagazi', 'Lezre', 'Murgen', 'Murook', 'Myev', 'Nagrette', 'Neega', 'Nella', 'Nogu', 'Oolah', 'Ootah', 'Ovak', 'Ownka', 'Puyet', 'Reeza', 'Shautha', 'Silgre', 'Sutha', 'Tagga', 'Tawar', 'Tomph', 'Ubada', 'Vanchu', 'Vola', 'Volen', 'Vorka', 'Yevelda', 'Zagga' ],
		'Male' :
			[ 'Agran', 'Braak', 'Brug', 'Cagak', 'Dench', 'Dorn', 'Dren', 'Druuk', 'Feng', 'Gell', 'Gnarsh', 'Grumbar', 'Hagren', 'Henk', 'Hogar', 'Holg', 'Imsh', 'Karash', 'Karg', 'Keth', 'Korag', 'Krusk', 'Lubash', 'Megged', 'Mhurren', 'Mord', 'Morg', 'Nil', 'Nybarg', 'Odorr', 'Ohr', 'Rendar', 'Resh', 'Ront', 'Rrath', 'Sark', 'Scrag', 'Sheggen', 'Shump', 'Tanglar', 'Tarak', 'Thar', 'Thokk', 'Trag', 'Ugarth', 'Varg', 'Vilberg', 'Yurk', 'Zed' ]
	},
	'Shifter' :
	{
		'Female' : [ 'Aurora', 'Autumn', 'Dawn', 'Hazel', 'Iris', 'Lily', 'Rain', 'Rose', 'Summer' ],
		'Male' : [ 'Ash', 'Brook', 'Claw', 'Cliff', 'Flint', 'Frost', 'River', 'Rock', 'Storm', 'Thorn', 'Torn' ]
	},
	'Tabaxi' :
	{
		'Name':
			[ 'Cloud on the Mountaintop "Cloud"', 'Five Timber "Timber"', 'Jade Shoe "Jade"', 'Left-Handed Hummingbird "Bird"', 'Seven Thundercloud "Thunder"', 'Skirt of Snakes "Snake"', 'Smoking Mirror "Smoke"' ], 
		'Clan':
			[ 'Bright Cliffs', 'Distant Rain', 'Mountain Tree', 'Rumbling River', 'Snoring Mountain' ]
	},
	'Tortle' :
		[ 'Baka', 'Damu', 'Gar', 'Gura', 'Ini', 'Jappa', 'Kinlek', 'Krull', 'Lim', 'Lop', 'Nortle', 'Nulka', 'Olo', 'Ploqwat', 'Quee', 'Queg', 'Quott', 'Sunny', 'Tibor', 'Ubo', 'Uhok', 'Wabu', 'Xelbuk', 'Xopa', 'Yog' ],
	'Triton' :
	{
		'Female' :
			[ 'Aryn', 'Belthyn', 'Duthyn', 'Feloren', 'Otanyn', 'Shalryn', 'Vlaryn', 'Wolyn' ],
		'Male' :
			[ 'Corus', 'Delnis', 'Jhimas', 'Keros', 'Mo-los', 'Nalos', 'Vodos', 'Zunis' ],
		'Surname' :
			[ 'Ahlorsath', 'Pumanath', 'Vuuvaxath' ]
	},
	'Virtue' :
		[ 'Ambition', 'Art', 'Carrion', 'Chant', 'Creed', 'Death', 'Debauchery', 'Despair', 'Doom', 'Doubt', 'Dread', 'Ecstacy', 'Ennui', 'Entropy', 'Excellence', 'Fear', 'Glory', 'Gluttony', 'Grief', 'Hate', 'Hope', 'Horror', 'Ideal', 'Ignominy', 'Laughter', 'Love', 'Lust', 'Mayhem', 'Mockery', 'Murder', 'Muse', 'Music', 'Mystery', 'Nowhere', 'Open', 'Pain', 'Passion', 'Poetry', 'Quest', 'Random', 'Reverence', 'Revulsion', 'Sorrow', 'Temerity', 'Torment', 'Tragedy', 'Vice', 'Virtue', 'Weary', 'Wit' ],
	// http://www.enworld.org/forum/showthread.php?136448-Coming-up-with-Yuan-ti-names
	'Warforged' :
		[ 'Azm', 'Book', 'Bulwark', 'Cart', 'Charger', 'Cutter', 'Falchion', 'Graven', 'Hammer', 'Mark', 'Morg', 'Nameless', 'Pierce', 'Pious', 'Relic', 'Rune', 'Steeple', 'Sword', 'Three', 'Titan', 'Unsung', 'Victor', 'Watcher', 'Zealot' ],
	'Yuan-Ti' :
	{
		'Female' :
			[ 'Ashissa', 'Caress', 'Daïsha', 'Deryssa', 'Ibisis', 'Ivaniss', 'Lalassu', 'Nassirah', 'Nessa', 'Nysia', 'Pyrrha', 'Saaveed', 'Sadai', 'Salah', 'Shallia', 'Suehra', 'Thassia', 'Veeshis', 'Ydriss', 'Zivlil.' ],
		'Male' : 
			[ 'Akris', 'Athanos', 'Daziss', 'Ischyros', 'Kress', 'Mariss', 'Oshphim', 'Salethar', 'Sarek', 'Selanu', 'Sellak', 'Shanastar', 'Shiraal', 'Silass', 'Thaxos', 'Tithian', 'Xamres', 'Xutan', 'Zorai', 'Zureth.' ]
	}
}

var trinkets =
[
	'A mummified goblin hand',
	'A piece of crystal that faintly glows in the moonlight',
	'A gold coin minted in an unknown land',
	'A diary written in a language you don\'t know',
	'A brass ring that never tarnishes',
	'An old chess piece made from glass',
	'A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips',
	'A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it',
	'A rope necklace from which dangles four mummified elf fingers',
	'The deed for a parcel of land in a realm unknown to you',
	'A 1-ounce block made from an unknown material',
	'A small cloth doll skewered with needles',
	'A tooth from an unknown beast',
	'An enormous scale, perhaps from a dragon',
	'A bright green feather',
	'An old divination card bearing your likeness',
	'A glass orb filled with moving smoke',
	'A 1-pound egg with a bright red shell',
	'A pipe that blows bubbles',
	'A glass jar containing a weird bit of flesh floating in pickling fluid',
	'A tiny gnome-crafted music box that plays a song you dimly remember from your childhood',
	'A small wooden statuette of a smug halfling',
	'A brass orb etched with strange runes',
	'A multicolored stone disk',
	'A tiny silver icon of a raven',
	'A bag containing forty-seven humanoid teeth, one of which is rotten',
	'A shard of obsidian that always feels warm to the touch',
	'A dragon\'s bony talon hanging from a plain leather necklace',
	'A pair of old socks',
	'A blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking',
	'A silver badge in the shape of a five-pointed star',
	'A knife that belonged to a relative',
	'A glass vial filled with nail clippings',
	'A rectangular metal device with two tiny metal cups on one end that throws sparks when wet',
	'A white, sequined glove sized for a human',
	'A vest with one hundred tiny pockets',
	'A small, weightless stone block',
	'A tiny sketch portrait of a goblin',
	'An empty glass vial that smells of perfume when opened',
	'A gemstone that looks like a lump of coal when examined by anyone but you',
	'A scrap of cloth from an old banner',
	'A rank insignia from a lost legionnaire',
	'A tiny silver bell without a clapper',
	'A mechanical canary inside a gnomish lamp',
	'A tiny chest carved to look like it has numerous feet on the bottom',
	'A dead sprite inside a clear glass bottle',
	'A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)',
	'A glass orb filled with water, in which swims a clockwork goldfish',
	'A silver spoon with an M engraved on the handle',
	'A whistle made from gold-colored wood',
	'A dead scarab beetle the size of your hand',
	'Two toy soldiers, one with a missing head',
	'A small box filled with different-sized buttons',
	'A candle that can\'t be lit',
	'A tiny cage with no door',
	'An old key',
	'An indecipherable treasure map',
	'A hilt from a broken sword',
	'A rabbit\'s foot',
	'A glass eye',
	'A cameo carved in the likeness of a hideous person',
	'A silver skull the size of a coin',
	'An alabaster mask',
	'A pyramid of sticky black incense that smells very bad',
	'A nightcap that, when worn, gives you pleasant dreams',
	'A single caltrop made from bone',
	'A gold monocle frame without the lens',
	'A 1-inch cube, each side painted a different color',
	'A crystal knob from a door',
	'A small packet filled with pink dust',
	'A fragment of a beautiful song, written as musical notes on two pieces of parchment',
	'A silver teardrop earring made from a real teardrop',
	'The shell of an egg painted with scenes of human misery in disturbing detail',
	'A fan that, when unfolded, shows a sleeping cat',
	'A set of bone pipes',
	'A four-leaf clover pressed inside a book discussing manners and etiquette',
	'A sheet of parchment upon which is drawn a complex mechanical contraption',
	'An ornate scabbard that fits no blade you have found so far',
	'An invitation to a party where a murder happened',
	'A bronze pentacle with an etching of a rat\'s head in its center',
	'A purple handkerchief embroidered with the name of a powerful archmage',
	'Half of a floorplan for a temple, castle, or some other structure',
	'A bit of folded cloth that, when unfolded, turns into a stylish cap',
	'A receipt of deposit at a bank in a far-flung city',
	'A diary with seven missing pages',
	'An empty silver snuffbox bearing an inscription on the surface that says "dreams"',
	'An iron holy symbol devoted to an unknown god',
	'A book that tells the story of a legendary hero\'s rise and fall, with the last chapter missing',
	'A vial of dragon blood',
	'An ancient arrow of elven design',
	'A needle that never bends',
	'An ornate brooch of dwarven design',
	'An empty wine bottle bearing a pretty label that says, "The Wizard of Wines Winery, Red Dragon Crush, 331422-W"',
	'A mosaic tile with a multicolored, glazed surface',
	'A petrified mouse',
	'A black pirate flag adorned with a dragon\'s skull and crossbones',
	'A tiny mechanical crab or spider that moves about when it\'s not being observed',
	'A glass jar containing lard with a label that reads, "Griffon Grease”',
	'A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body',
	'A metal urn containing the ashes of a hero'
]

var UARaces =
[
	{ 'name' : 'Changeling, Shifter, and Warforged', 'source' : 'Eberron', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/unearthed-arcana-eberron' },
	{ 'name' : 'Minotaur', 'source' : 'Waterborne Adventures', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/unearthed-arcana-waterborne-adventures' },
	{ 'name' : 'Abyssal Tiefling', 'source' : 'That Old Black Magic', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/old-black-magic' },
	{ 'name' : 'Revenant Subrace', 'source' : 'Gothic Heroes', 'link' : 'http://dnd.wizards.com/articles/features/gothic-heroes' },
	{ 'name' : 'Gith, Eladrin Elf', 'source' : 'Race Options: Eladrin and Gith', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/race-options-eladrin-and-gith' },
	{ 'name' : 'Tiefling Subraces', 'source' : 'Fiendish Options', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/fiendish-options' },
	{ 'name' : 'Elf Subraces', 'source' : 'Elf Subraces', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/elf-subraces' },
]

var UAClasses =
[
	{ 'name' : 'Alternative Ranger Class', 'source' : 'Ranger', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/ranger' },
	{ 'name' : 'Bard: College of Satire, Fighter: Scout', 'source' : 'Kits of Old', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/kits-old' },
	{ 'name' : 'Fighter: Monster Hunter, Rogue: Inquisitive', 'source' : 'Gothic Heroes', 'link' : 'http://dnd.wizards.com/articles/features/gothic-heroes' },
	{ 'name' : 'Warlock: Seeker', 'source' : 'The Faithful', 'link' : 'http://dnd.wizards.com/articles/features/faithful' },
	{ 'name' : 'Another Alternative Ranger Class', 'source' : 'The Ranger, Revised', 'link' : 'http://dnd.wizards.com/articles/features/unearthed-arcana-ranger-revised' },
	{ 'name' : 'Cleric: Protection Domain', 'source' : 'Cleric: Divine Domains', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/cleric-divine-domains' },
	{ 'name' : 'Druid: Circle of Twilight', 'source' : 'Druid Circles and Wild Shape', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/druid-circles-and-wild-shape' },
	{ 'name' : 'Fighter: Sharpshooter', 'source' : 'Fighter: Martial Archetypes', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/fighter' },
	{ 'name' : 'Monk: Way of Tranquility', 'source' : 'Monk: Monastic Traditions', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/monk-monastic-traditions' },
	{ 'name' : 'Paladin: Oath of Treachery', 'source' : 'Paladin: Sacred Oaths', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/paladin-sacred-oaths' },
	{ 'name' : 'Ranger: Primeval Guardian', 'source' : 'Ranger and Rogue', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/ranger-and-rogue' },
	{ 'name' : 'Sorcerer: Phoenix Sorcery, Sea Sorcery, Stone Sorcery', 'source' : 'Sorcerer', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/sorcerer' },
	{ 'name' : 'Warlock: The Raven Queen', 'source' : 'Warlock and Wizard', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/warlock-and-wizard' },
	{ 'name' : 'Wizard: Theurgy', 'source' : 'Wizard Revisited', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/wizard-revisited' },
	{ 'name' : 'Mystic, Artificer', 'source' : 'Unearthed Arcana Update', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/unearthed-arcana-update' },
	{ 'name' : 'Druid: Circle of Spores, Fighter: Brute, Wizard: School of Invention', 'source' : 'Three Subclasses', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/three-subclasses' },
]

var UAOther =
[
	{ 'name' : 'Dragonmark Feats', 'source' : 'Eberron', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/unearthed-arcana-eberron' },
	{ 'name' : 'Fighting Style: Mariner', 'source' : 'Waterborne Adventures', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/unearthed-arcana-waterborne-adventures' },
	{ 'name' : 'Modern Campaign Content', 'source' : 'Modern Magic', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/modern-magic' },
	{ 'name' : 'Prestige Classes and Rune Magic', 'source' : 'Prestige Classes and Rune Magic', 'link' : 'http://dnd.wizards.com/articles/features/prestige-classes-and-rune-magic' },
	{ 'name' : 'Fighting Styles: Close Quarters Shooter, Tunnel Fighter', 'source' : 'Unearthed Arcana: Light, Dark, Underdark!', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/light-dark-underdark' },
	{ 'name' : 'Demon Conjuring Spells', 'source' : 'That Old Black Magic', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/old-black-magic' },
	{ 'name' : 'Weapon Mastery & Tool Feats', 'source' : 'Feats', 'link' : 'http://dnd.wizards.com/articles/features/feats' },
	{ 'name' : 'Eldritch Inovcations', 'source' : 'Warlock and Wizard', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/warlock-and-wizard' },
	{ 'name' : 'Cantrips & 1st Level Spells', 'source' : 'Starter Spells', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/starter-spells' },
	{ 'name' : 'Skill Feats', 'source' : 'Feats for Skills', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/feats-skills' },
	{ 'name' : 'Race Feats', 'source' : 'Feats for Races', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/feats-races' },
	{ 'name' : 'More Eldritch Inovcations', 'source' : 'Revised Class Options', 'link' : 'http://dnd.wizards.com/articles/unearthed-arcana/revised-class-options' },
]

var raceWeights = 
{
	'Dragonborn' : 5,
	'Dwarf' : 10,
	'Elf' : 10,
	'Gnome' : 5,
	'Halfling' : 10,
	'Human' : 40,
	'Half-Elf' : 5,
	'Half-Orc' : 5,
	'Tiefling' : 5,
}

var monstrousOrigins =
[
	'You are a spy sent to undermine your enemies from within.',
	'You are the victim of a curse or polymorph spell.',
	'You were raised by humans, elves, or dwarves and have adopted their culture.',
	'At a young age, you adopted a human religion and now serve it faithfully.',
	'You received divine insight that sent you on your path, and occasionally receive new visions that guide you.',
	'Your sworn enemy is an ally of your people, forcing you to leave your tribe to gain vengeance.',
	'An evil entity corrupted your people\'s society.',
	'An injury or strange event caused you to lose all memory of your past, but occasional flashes of it return to you.'
];

var tooltips =
{
	'burglarspack' : 'Burglar\'s Pack (16 gp). Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.',
	'diplomatspack' : 'Diplomat\'s Pack (39 gp). Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.',
	'dungeoneerspack' : 'Dungeoneer\'s Pack (12 gp). Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.',
	'entertainerspack' : 'Entertainer\'s Pack (40 gp). Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.',
	'explorerspack' : 'Explorer\'s Pack (10 gp). Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.',
	'priestspack' : 'Priest\'s Pack (19 gp). Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.',
	'scholarspack' : 'Scholar\'s Pack (40 gp). Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.',
	
	'paddedarmor' : 'Padded Armor. Light. AC: 11 + Dex modifier. Disadvantage on stealth rolls.',
	'leatherarmor' : 'Leather Armor. Light. AC: 11 + Dex modifier.',
	'studdedleatherarmor' : 'Studded Leather Armor. Light. AC: 12 + Dex modifier.',
	
	'hidearmor' : 'Hide Armor. Medium. AC: 12 + Dex modifier (max 2).',
	'chainshirtarmor' : 'Chain Shirt. Medium. AC: 13 + Dex modifier (max 2).',
	'scalemailarmor' : 'Scale Mail. Medium. AC: 14 + Dex modifier (max 2). Disadvantage on stealth rolls.',
	'breastplatearmor' : 'Breast Plate. Medium. AC: 14 + Dex modifier (max 2).',
	'halfplatearmor' : 'Half Plate. Medium. AC: 15 + Dex modifier (max 2). Disadvantage on stealth rolls.',
	
	'ringmail' : 'Ring Mail. Heavy. AC: 14. Disadvantage on stealth rolls.',
	'chainmail' : 'Chain Mail. Heavy. AC: 15. Disadvantage on stealth rolls.',
	'splintarmor' : 'Split Armor. Heavy. AC: 16. Disadvantage on stealth rolls.',
	'platearmor' : 'Plate Armor. Heavy. AC: 17. Disadvantage on stealth rolls.',
	'shield' : 'Shield. AC: +2.',
}