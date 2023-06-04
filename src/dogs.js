const dogs = [
    {
        image: "https://cdn.britannica.com/86/235886-050-2A7CC649/Samoyed-dog.jpg",
        title: "Samoyed",
        description: "The Samoyed is a substantial but graceful dog standing anywhere from 19 to a bit over 23 inches at the shoulder. Powerful, tireless, with a thick all-white coat impervious to cold, Sammies are perfectly beautiful but highly functional. Even their most delightful feature, a perpetual smile, has a practical function: The upturned corners of the mouth keep Sammies from drooling, preventing icicles from forming on the face.   A Sammy sentenced to solitary confinement in the yard is a miserable and destructive creature. These are smart, social, mischievous dogs who demand love and attention. Sammies need a very firm but loving hand in training. As pack animals, they must learn early who the alpha dog is and the alpha dog must be you."
    },

    {
        image: "https://marshallspetzone.com/blog/wp-content/uploads/2017/01/6.jpg",
        title: "Golden Retriever",
        description: "The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name. The broad head, with its friendly and intelligent eyes, short ears, and straight muzzle, is a breed hallmark. In motion, Goldens move with a smooth, powerful gait, and the feathery tail is carried, as breed fanciers say, with a 'merry action.' The most complete records of the development of the Golden Retriever are included in the record books that were kept from 1835 until about 1890 by the gamekeepers at the Guisachan (pronounced Gooeesicun) estate of Lord Tweedmouth at Inverness-Shire, Scotland. These records were released to public notice in Country Life in 1952, when Lord Tweedmouth's great-nephew, the sixth Earl of Ilchester, historian and sportsman, published material that had been left by his ancestor. They provided factual confirmation to the stories that had been handed down through generations. Goldens are outgoing, trustworthy, and eager-to-please family dogs, and relatively easy to train. They take a joyous and playful approach to life and maintain this puppyish behavior into adulthood. These energetic, powerful gundogs enjoy outdoor play. For a breed built to retrieve waterfowl for hours on end, swimming and fetching are natural pastimes."
    },

    {
        image: "https://cdn.britannica.com/02/236302-050-E1F61BB1/Alaskan-Malamute-sled-dog.jpg",
        title: "Alaskan Malamute",
        description: "An immensely strong, heavy-duty worker of spitz type, the Alaskan Malamute is an affectionate, loyal, and playful but dignified dog recognizable by his well-furred plumed tail carried over the back, erect ears, and substantial bone. The Alaskan Malamute stands 23 to 25 inches at the shoulder and weighs 75 to 85 pounds. Everything about Mals suggests their origin as an arctic sled dog: The heavy bone, deep chest, powerful shoulders, and dense, weatherproof coat all scream, 'I work hard for a living!' But their almond-shaped brown eyes have an affectionate sparkle, suggesting Mals enjoy snuggling with their humans when the workday is done. Mals are pack animals. And in your family 'pack,' the leader must be you. If a Mal doesn't respect you, he will wind up owning you instead of the other way around. Firm but loving training should begin in early puppyhood. That said, a well-behaved Mal is a joy to be with'¿playful, gentle, friendly, and great with kids."
    },

    {
        image: "https://media-be.chewy.com/wp-content/uploads/2021/06/02102132/Pomeranian_Featured-Image.jpg",
        title: "Pomeranian",
        description: "The tiny Pomeranian, long a favorite of royals and commoners alike, has been called the ideal companion. The glorious coat, smiling, foxy face, and vivacious personality have helped make the Pom one of the world's most popular toy breeds. ¿The Pomeranian combines a tiny body (no more than seven pounds) and a commanding big-dog demeanor. The abundant double coat, with its frill extending over the chest and shoulders, comes in almost two dozen colors, and various patterns and markings, but is most commonly seen in orange or red. Alert and intelligent, Pomeranians are easily trained and make fine watchdogs and perky pets for families with children old enough to know the difference between a toy dog and a toy. Poms are active but can be exercised with indoor play and short walks, so they are content in both the city and suburbs. They will master tricks and games with ease, though their favorite activity is providing laughs and companionship to their special human."
    },

    {
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/French-Bulldog.jpg?itok=I5aDJHqi",
        title: "French Bulldog",
        description: "The one-of-a-kind French Bulldog, with his large bat ears and even disposition, is one of the world's most popular small-dog breeds, especially among city dwellers. The Frenchie is playful, alert, adaptable, and completely irresistible. The French Bulldog resembles a Bulldog in miniature, except for the large, erect 'bat ears' that are the breed's trademark feature. The head is large and square, with heavy wrinkles rolled above the extremely short nose. The body beneath the smooth, brilliant coat is compact and muscular. The bright, affectionate Frenchie is a charmer. Dogs of few words, Frenchies don't bark much'¿but their alertness makes them excellent watchdogs. They happily adapt to life with singles, couples, or families, and do not require a lot of outdoor exercise. They get on well with other animals and enjoy making new friends of the human variety. It is no wonder that city folk from Paris to Peoria swear by this vastly amusing and companionable breed."
    },

    {
        image: "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1670938235.1927571/fun-facts-about-labrador-retrievers.jpg",
        title: "Labrador Retriever",
        description: "The sweet-faced, lovable Labrador Retriever is America's most popular dog breed. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog. The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate. The head is wide, the eyes glimmer with kindliness, and the thick, tapering 'otter tail' seems to be forever signaling the breed's innate eagerness. Labs are famously friendly. They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. But don't mistake his easygoing personality for low energy: The Lab is an enthusiastic athlete that requires lots of exercise, like swimming and marathon games of fetch, to keep physically and mentally fit."
    },

    {
        image: "https://d.newsweek.com/en/full/1658468/german-shepherd-dog-breed.jpg?w=1600&h=1600&q=88&f=08c51e7f3797a4321a5bccd862b25669",
        title: "German Shepherd Dog",
        description: "Generally considered dogkind's finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, the German Shepherd is truly a dog lover's delight. German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds. There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there's a 'certain aloofness that does not lend itself to immediate and indiscriminate friendships."
    },

    {
        image: "https://image.petmd.com/files/styles/863x625/public/2023-01/toy-poodle.jpg",
        title: "Poodle",
        description: "Whether Standard, Miniature, or Toy, and either black, white, or apricot, the Poodle stands proudly among dogdom's true aristocrats. Beneath the curly, low-allergen coat is an elegant athlete and companion for all reasons and seasons. Poodles come in three size varieties: Standards should be more than 15 inches tall at the shoulder; Miniatures are 15 inches or under; Toys stand no more than 10 inches. All three varieties have the same build and proportions. At dog shows, Poodles are usually seen in the elaborate Continental clip. Most pet owners prefer the simpler Sporting clip, in which the coat is shorn to follow the outline of the squarely built, smoothly muscled body.  Forget any preconceived notions about Poodles you may have: Poodles are eager, athletic, and wickedly smart dogs of remarkable versatility. The Standard, with his greater size and strength, is the best all-around athlete of the family, but all Poodles can be trained with great success."
    },

    {
        image: "https://www.dogster.com/wp-content/uploads/2015/05/shutterstock_219143260.jpg.optimal.jpg",
        title: "Rottweiler",
        description: "The Rottweiler is a robust working breed of great strength descended from the mastiffs of the Roman legions. A gentle playmate and protector within the family circle, the Rottie observes the outside world with a self-assured aloofness. A male Rottweiler will stand anywhere from 24 to 27 muscular inches at the shoulder; females run a bit smaller and lighter. The glistening, short black coat with smart rust markings add to the picture of imposing strength. A thickly muscled hindquarters powers the Rottie's effortless trotting gait. A well-bred and properly raised Rottie will be calm and confident, courageous but not unduly aggressive. The aloof demeanor these world-class guardians present to outsiders belies the playfulness, and downright silliness, that endear Rotties to their loved ones. (No one told the Rottie he's not a toy breed, so he is liable plop onto your lap for a cuddle.) Early training and socialization will harness a Rottie's territorial instincts in a positive way."
    },

    {
        image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/06/24151048/Beagle-standing-in-a-frosty-field-on-a-cold-morning.jpg",
        title: "Beagle",
        description: "Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'¿thanks to its pleading expression'¿cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing. There are two Beagle varieties: those standing under 13 inches at the shoulder, and those between 13 and 15 inches. Both varieties are sturdy, solid, and 'big for their inches,' as dog folks say. They come in such pleasing colors as lemon, red and white, and tricolor. The Beagle's fortune is in his adorable face, with its big brown or hazel eyes set off by long, houndy ears set low on a broad head. A breed described as 'merry' by its fanciers, Beagles are loving and lovable, happy, and companionable'¿all qualities that make them excellent family dogs. No wonder that for years the Beagle has been the most popular hound dog among American pet owners. These are curious, clever, and energetic hounds who require plenty of playtime."
    },

    {
        image: "https://hellobark.com/wp-content/uploads/dachshund-puppy.jpg",
        title: "Dachshund",
        description: "The famously long, low silhouette, ever-alert expression, and bold, vivacious personality of the Dachshund have made him a superstar of the canine kingdom. Dachshunds come in two sizes and in three coat types of various colors and patterns. The word 'icon' is terribly overworked, but the Dachshund'¿with his unmistakable long-backed body, little legs, and big personality'¿is truly an icon of purebred dogdom. Dachshunds can be standard-sized (usually 16 to 32 pounds) or miniature (11 pounds or under), and come in one of three coat types: smooth, wirehaired, or longhaired. Dachshunds aren't built for distance running, leaping, or strenuous swimming, but otherwise these tireless hounds are game for anything. Smart and vigilant, with a big-dog bark, they make fine watchdogs. Bred to be an independent hunter of dangerous prey, they can be brave to the point of rashness, and a bit stubborn, but their endearing nature and unique look has won millions of hearts the world over."
    },

    {
        image: "https://puphelp.com/wp-content/uploads/2021/10/Are-German-Short-haired-Pointers-Good-First-Dogs-00.jpg",
        title: "German Shorthaired Pointer",
        description: "The versatile, medium-sized German Shorthaired Pointer is an enthusiastic gundog of all trades who thrives on vigorous exercise, positive training, and a lot of love. GSP people call their aristocratic companions the 'perfect pointer.' Male German Shorthaired Pointers stand between 23 and 25 inches at the shoulder and weigh anywhere from 55 to 70 pounds; females run smaller. The coat is solid liver (a reddish brown), or liver and white in distinctive patterns. The dark eyes shine with enthusiasm and friendliness. Built to work long days in the field or at the lake, GSPs are known for power, speed, agility, and endurance. 'Noble' and 'aristocratic' are words often used to describe the overall look. GSPs make happy, trainable pets who bond firmly to their family. They are always up for physical activities like running, swimming, organized dog sports'¿in fact, anything that will burn some of their boundless energy while spending outdoors time with a human buddy."
    },

    {
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/Welsh%20Corgi%20%28Pembroke%291.jpg?h=833f6635&itok=Fn7SoiuX",
        title: "Pembroke Welsh Corgi",
        description: "Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one the world's most popular herding breeds. At 10 to 12 inches at the shoulder and 27 to 30 pounds, a well-built male Pembroke presents a big dog in a small package. Short but powerful legs, muscular thighs, and a deep chest equip him for a hard day's work. Built long and low, Pembrokes are surprisingly quick and agile. They can be red, sable, fawn, and black and tan, with or without white markings. The Pembroke is a bright, sensitive dog who enjoys play with his human family and responds well to training. As herders bred to move cattle, they are fearless and independent. They are vigilant watchdogs, with acute senses and a 'big dog' bark. Families who can meet their bold but kindly Pembroke's need for activity and togetherness will never have a more loyal, loving pet."
    },

    {
        image: "https://asca.org/wp-content/uploads/2022/05/sideimage35.jpg",
        title: "Australian Shepherd",
        description: "The Australian Shepherd, a lean, tough ranch dog, is one of those 'only in America' stories: a European breed perfected in California by way of Australia. Fixtures on the rodeo circuit, they are closely associated with the cowboy life. The Australian Shepherd, the cowboy's herding dog of choice, is a medium-sized worker with a keen, penetrating gaze in the eye. Aussie coats offer different looks, including merle (a mottled pattern with contrasting shades of blue or red). In all ways, they're the picture of rugged and agile movers of stock. Aussies exhibit an irresistible impulse to herd, anything: birds, dogs, kids. This strong work drive can make Aussies too much dog for a sedentary pet owner. Aussies are remarkably intelligent, quite capable of hoodwinking an unsuspecting novice owner. In short, this isn't the pet for everyone. But if you're looking for a brainy, tireless, and trainable partner for work or sport, your search might end here."
    },

    {
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-09/Yorkshire%20Terrier.jpg?h=5a48805e&itok=W6ZnjJac",
        title: "Yorkshire Terrier",
        description: "Beneath the dainty, glossy, floor-length coat of a Yorkshire Terrier beats the heart of a feisty, old-time terrier. Yorkies earned their living as ratters in mines and mills long before they became the beribboned lapdogs of Victorian ladies. The Yorkshire Terrier is a compact, toy-size terrier of no more than seven pounds whose crowning glory is a floor-length, silky coat of steel blue and a rich golden tan. Don't let the Yorkie's daintiness fool you. Tenacious, feisty, brave, and sometimes bossy, the Yorkie exhibits all the traits of a true terrier. Often named the most popular dog breed in various American cities, Yorkies pack lots of big-town attitude into a small but self-important package. They are favorites of urbanites the world over. Yorkies are long-lived and hypoallergenic (the coat is more like human hair than animal fur), and they make fine little watchdogs. This is a true 'personality breed,' providing years of laughs, love, and close companionship."
    },

    {
        image: "https://images.saymedia-content.com/.image/t_share/MTk0OTAxODYyMDkxNDY1ODkw/5-things-you-should-know-before-owning-a-cavalier-king-charles-spaniel.jpg",
        title: "Cavalier King Charles Spaniel",
        description: "The Cavalier King Charles Spaniel wears his connection to British history in his breed's name. Cavaliers are the best of two worlds, combining the gentle attentiveness of a toy breed with the verve and athleticism of a sporting spaniel. The Cavalier's all-around beauty, regal grace, and even temper mark him as one of dogdom's noblemen. A toy spaniel no more than 13 inches high, the Cavalier draws you in with his face: The sweet, gentle, melting expression emanating from large, round eyes is a breed hallmark. Another is the silky, richly colored coat that can be one of four distinct varieties (described in this page's History section). Cavaliers may be aristocrats, but they gladly descend from their royal high horse for a backyard frolic or a squirrel chase. They get along nicely with children and other dogs. Adaptable Cavaliers do equally well with active owners and homebodies'¿they can be upbeat athletes or shameless couch potatoes, depending on an owner's lifestyle."
    },

    {
        image: "https://media.zenfs.com/en/pethelpful_915/8f3fa956033d2ff1e0c5a5c035b8b6e1",
        title: "Bernese Mountain Dog",
        description: "Big, powerful, and built for hard work, the Bernese Mountain Dog is also strikingly beautiful and blessed with a sweet, affectionate nature. Berners are generally placid but are always up for a romp with the owner, whom they live to please. The Bernese Mountain Dog is a large, sturdy worker who can stand over 27 inches at the shoulder. The thick, silky, and moderately long coat is tricolored: jet black, clear white, and rust. The distinctive markings on the coat and face are breed hallmarks and, combined with the intelligent gleam in the dark eyes, add to the Berner's aura of majestic nobility. A hardy dog who thrives in cold weather, the Berner's brain and brawn helped him multitask on the farms and pastures of Switzerland. Berners get along with the entire family and are particularly gentle with children, but they will often become more attached to one lucky human. Berners are imposing but not threatening, and they maintain an aloof dignity with strangers."
    },

    {
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg",
        title: "Border Collie",
        description: "A remarkably bright workaholic, the Border Collie is an amazing dog'¿maybe a bit too amazing for owners without the time, energy, or means to keep it occupied. These energetic dogs will settle down for cuddle time when the workday is done. Borders are athletic, medium-sized herders standing 18 to 22 inches at the shoulder. The overall look is that of a muscular but nimble worker unspoiled by passing fads. Both the rough coat and the smooth coat come in a variety of colors and patterns. The almond eyes are the focus of an intelligent expression'¿an intense gaze, the Border's famous 'herding eye', is a breed hallmark. On the move, Borders are among the canine kingdom's most agile, balanced, and durable citizens. The intelligence, athleticism, and trainability of Borders have a perfect outlet in agility training. Having a job to perform, like agility'¿or herding or obedience work'¿is key to Border happiness. Amiable among friends, they may be reserved with strangers."
    },

    {
        image: "https://iheartdogs.com/wp-content/uploads/2022/08/chow-chow-2.jpg",
        title: "Chow Chow",
        description: "The Chow Chow, an all-purpose dog of ancient China, presents the picture of a muscular, deep-chested aristocrat with an air of inscrutable timelessness. Dignified, serious-minded, and aloof, the Chow Chow is a breed of unique delights. Chows are powerful, compactly built dogs standing as high as 20 inches at the shoulder. Their distinctive traits include a lion's-mane ruff around the head and shoulders; a blue-black tongue; deep-set almond eyes that add to a scowling, snobbish expression; and a stiff-legged gait. Chows can have rough or smooth coats of red, black, blue, cinnamon, or cream. Owners say Chows are the cleanest of dogs: They housebreak easily, have little doggy odor, and are known to be as fastidious as cats. Well-socialized Chows are never fierce or intractable, but always refined and dignified. They are aloof with strangers and eternally loyal to loved ones. Serene and adaptable, with no special exercise needs, Chows happily take to city life."
    },

    {
        image: "https://www.petmoo.com/wp-content/uploads/2018/08/Doberman-990x556.jpg",
        title: "Doberman Pinscher",
        description: "Sleek and powerful, possessing both a magnificent physique and keen intelligence, the Doberman Pinscher is one of dogkind's noblemen. This incomparably fearless and vigilant breed stands proudly among the world's finest protection dogs. Dobermans are compactly built dogs'¿muscular, fast, and powerful'¿standing between 24 to 28 inches at the shoulder. The body is sleek but substantial, and is covered with a glistening coat of black, blue, red, or fawn, with rust markings. These elegant qualities, combined with a noble wedge-shaped head and an easy, athletic way of moving, have earned Dobermans a reputation as royalty in the canine kingdom. A well-conditioned Doberman on patrol will deter all but the most foolish intruder."
    },

    {
        image: "https://cdn.britannica.com/46/233846-050-8D30A43B/Boxer-dog.jpg",
        title: "Boxer",
        description: "Loyalty, affection, intelligence, work ethic, and good looks: Boxers are the whole doggy package. Bright and alert, sometimes silly, but always courageous, the Boxer has been among America's most popular dog breeds for a very long time. A well-made Boxer in peak condition is an awesome sight. A male can stand as high as 25 inches at the shoulder; females run smaller. Their muscles ripple beneath a short, tight-fitting coat. The dark brown eyes and wrinkled forehead give the face an alert, curious look. The coat can be fawn or brindle, with white markings. Boxers move like the athletes they are named for: smooth and graceful, with a powerful forward thrust. Boxers are upbeat and playful. Their patience and protective nature have earned them a reputation as a great dog with children. They take the jobs of watchdog and family guardian seriously and will meet threats fearlessly. Boxers do best when exposed to a lot of people and other animals in early puppyhood."
    },

    {
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F05%2Fminiature-schnauzer-on-tree-stump-989851246.jpg",
        title: "Miniature Schnauzer",
        description: "The Miniature Schnauzer, the smallest of the three Schnauzer breeds, is a generally healthy, long-lived, and low-shedding companion. Add an outgoing personality, a portable size, and sporty good looks, and you've got an ideal family dog. Stocky, robust little dogs standing 12 to 14 inches, Miniature Schnauzers were bred down from their larger cousins, Standard Schnauzers. The bushy beard and eyebrows give Minis a charming, human-like expression. The hard, wiry coat comes in three color patterns: salt and pepper, black and silver, and solid black. Created to be all-around farm dogs and ratters, they are tough, muscular, and fearless without being aggressive. The Miniature Schnauzer is a bright, friendly, trainable companion, small enough to adapt to apartment life but tireless enough to patrol acres of farmland. They get along well with other animals and kids. Minis are sturdy little guys and enjoy vigorous play. Home and family oriented, they make great watchdogs."
    },

    {
        image: "https://breedexpert.com/wp-content/uploads/2022/07/cane-corse-sitting-in-grass.jpg",
        title: "Cane Corso",
        description: "Smart, trainable, and of noble bearing, the assertive and confident Cane Corso is a peerless protector. The Corso's lineage goes back to ancient Roman times, and the breed's name roughly translates from the Latin as 'bodyguard dog.' At nearly 28 inches at the shoulder and often weighing more than 100 pounds, with a large head, alert expression, and muscles rippling beneath their short, stiff coat, Corsi are at a glance intimidating creatures. Their imposing appearance is their first line of defense against intruders. As one writer put it, 'An understated air of cool competence, the kind of demeanor you'd expect from a professional bodyguard, is the breed's trademark.' Corsi are intelligent, loyal, eager to please, versatile, and intensely loyal to their humans, but are also assertive and willful, and can end up owning an unwitting owner. As with any other big guardian dog, responsible breeding and early socialization with people and other dogs is vital."
    },

    {
        image: "https://www.thefarmersdog.com/digest/wp-content/uploads/2022/01/Great-dane-grey.jpg",
        title: "Great Dane",
        description: "The easygoing Great Dane, the mighty 'Apollo of Dogs', is a total joy to live with, but owning a dog of such imposing size, weight, and strength is a commitment not to be entered into lightly. This breed is indeed great, but not a Dane. As tall as 32 inches at the shoulder, Danes tower over most other dogs and when standing on their hind legs, they are taller than most people. These powerful giants are the picture of elegance and balance, with the smooth and easy stride of born noblemen. The coat comes in different colors and patterns, perhaps the best-known being the black-and-white patchwork pattern known as 'harlequin'. Despite their sweet nature, Danes are alert home guardians. Just the sight of these gentle giants is usually enough to make intruders think twice. But those foolish enough to mistake the breed's friendliness for softness will meet a powerful foe of true courage and spirit. Patient with kids, Danes are people pleasers who make friends easily."
    },

    {
        image: "https://cdn.shopify.com/s/files/1/0531/2475/9744/files/1_1_2.jpg?v=1634102796",
        title: "Shih Tzu",
        description: "That face! Those big dark eyes looking up at you with that sweet expression! It's no surprise that Shih Tzu owners have been so delighted with this little 'Lion Dog' for a thousand years. Where Shih Tzu go, giggles and mischief follow. Shi Tsu (pronounced in the West 'sheed-zoo' or 'sheet-su'; the Chinese say 'sher-zer'), weighing between 9 to 16 pounds, and standing between 8 and 11 inches, are surprisingly solid for dogs their size. The coat, which comes in many colors, is worth the time you will put into it'¿few dogs are as beautiful as a well-groomed Shih Tzu. Being cute is a way of life for this lively charmer. The Shih Tzu is known to be especially affectionate with children. As a small dog bred to spend most of their day inside royal palaces, they make a great pet if you live in an apartment or lack a big backyard. Some dogs live to dig holes and chase cats, but a Shih Tzu's idea of fun is sitting in your lap acting adorable as you try to watch TV."
    },

    {
        image: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg",
        title: "Siberian Husky",
        description: "Siberian Husky, a thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses. Sibes are friendly, fastidious, and dignified. The graceful, medium-sized Siberian Husky's almond-shaped eyes can be either brown or blue'¿and sometimes one of each'¿and convey a keen but amiable and even mischievous expression. Quick and nimble-footed, Siberians are known for their powerful but seemingly effortless gait. Tipping the scales at no more than 60 pounds, they are noticeably smaller and lighter than their burly cousin, the Alaskan Malamute. As born pack dogs, they enjoy family life and get on well with other dogs. The Sibe's innate friendliness render them indifferent watchdogs. These are energetic dogs who can't resist chasing small animals, so secure running room is a must. An attractive feature of the breed: Sibes are naturally clean, with little doggy odor."
    },

    {
        image: "https://cdn.britannica.com/83/236683-050-84785C8B/Boston-Terrier-dog.jpg",
        title: "Boston Terrier",
        description: "The Boston Terrier is a lively little companion recognized by his tight tuxedo jacket, sporty but compact body, and the friendly glow in his big, round eyes. His impeccable manners have earned him the nickname 'The American Gentleman.' Boston Terriers are compact, short-tailed, well-balanced little dogs weighing no more than 25 pounds. The stylish 'tuxedo' coat can be white and either black, brindle, or seal (dark brown). The head is square, the muzzle is short, and the large, round eyes can shine with kindness, curiosity, or mischief. Ever alert to their surroundings, Bostons move with a jaunty, rhythmic step. It's a safe bet that a breed named for a city'¿the Havanese or Brussels Griffon, for instance'¿will make an excellent urban pet. Bostons are no exception: they are sturdy but portable, people-oriented, and always up for a brisk walk to the park or outdoor cafe. A bright dog with a natural gift for comedy, the dapper Bostonian is a steady source of smiles."
    },

    {
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Havanese2.jpg?h=bbe3efbc&itok=mTpAaUIY",
        title: "Havanese",
        description: "Havanese, the only dog breed native to Cuba, are cheerful little dogs with a spring in their step and a gleam in their big, brown eyes. These vivacious and sociable companions are becoming especially popular with American city dwellers. ¿Distinctive features of the Havanese include a curled-over tail and a gorgeous silky coat, which comes in a variety of colors. Some owners enjoy cording the coat, in the manner of a Puli, and others clip it short to reduce grooming time. Happily, Havenese are just as cute no matter what hairdo you give them. Their small but sturdy bodies, adaptable nature, and social skills make Havanese an ideal city dog, but they are content to be anywhere that they can command the attention of admirers young and old alike. Havanese, smart and trainable extroverts with the comic instincts of a born clown, are natural trick dogs. Havanese are also excellent watchdogs and take the job seriously, but will usually keep the barking to a minimum."
    },

    {
        image: "https://www.omlet.co.uk/images/cache/1024/692/Shetland-Sheepdog-Lying-Down.jpg",
        title: "Shetland Sheepdog",
        description: "The Shetland Sheepdog, also known as the Sheltie, is an extremely intelligent, quick, and obedient herder from Scotland's remote and rugged Shetland Islands. Shelties bear a strong family resemblance to their bigger cousin, the Collie. The Shetland Sheepdog is a small, active, and agile herding dog standing between 13 and 16 inches at the shoulder. The long coat is harsh and straight, with a dense undercoat, and comes in black, blue merle, and sable, with white markings. The coat, along with a long, wedge-shaped head; small, three-quarter erect ears; and deep-chested, level-backed torso, give Shelties the look of a rough-coated Collie in miniature. Bright and eager Shelties are easy trainers and world-class competitors in obedience, agility, and herding trials. They are sensitive and affectionate family dogs, highly in tune with the mood of the household. They like to bark and tend to be reserved toward strangers'¿two qualifications of an excellent watchdog."
    },

    {
        image: "https://www.hepper.com/wp-content/uploads/2021/11/Brittany-Spaniel_Shutterstock_Keith-Bell.jpg",
        title: "Brittany",
        description: "Sportsmen on both sides of the Atlantic cherish the agile, energetic Brittany as a stylish and versatile gundog. Bright and eager at home, and tireless afield, Brittanys require a lot of exercises, preferably with their favorite humans. Brittanys are smaller than setters but leggier than spaniels, standing about 20 inches at the shoulder. Their beautiful, boldly patterned coat comes in combinations of white and vivid orange and liver (reddish-brown). They are rugged and strong but smooth, clean, and quick afoot. The face has the 'softness' prized by bird-dog lovers; high-set ears convey the breed's essential eagerness. The zeal and versatility that make Brittanys peerless hunters can be channeled into dog sports. Obedience, agility, flyball, dock diving'¿you name it, this trainable breed is up for it. The Brittany is a nice fit for those seeking an all-purpose hunting partner, a dog-sport teammate, or a companion in sync with an upbeat, outdoorsy family life."
    },

    {
        image: "https://petsure.com.au/wp-content/uploads/2021/11/Cocker_Spaniel.png",
        title: "Cocker Spaniel",
        description: "The merry and frolicsome Cocker Spaniel, with his big, dreamy eyes and impish personality, is one of the world's best-loved breeds. They were developed as hunting dogs, but Cockers gained their wide popularity as all-around companions. Those big, dark eyes; that sweet expression; those long, lush ears that practically demand to be touched'¿no wonder the Cocker spent years as America's most popular breed. The Cocker is the AKC's smallest sporting spaniel, standing about 14 to 15 inches. The coat comes in enough colors and patterns to please any taste. The well-balanced body is sturdy and solid, and these quick, durable gundogs move with a smooth, easy gait. Cockers are eager playmates for kids and are easily trained as companions and athletes. They are big enough to be sporty, but compact enough to be portable. A Cocker in full coat rewards extra grooming time by being the prettiest dog on the block. These energetic sporting dogs love playtime and brisk walks."
    },

    {
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Blue_Merle_Miniature_American_Shepherd_in_Grass.jpg",
        title: "Miniature American Shepherd",
        description: "The Miniature American Shepherd resembles a small Australian Shepherd. True herders in spite of their compact size, Minis are bright, self-motivated workers and endearingly loyal and lively companion dogs who have an affinity for horses. The Miniature American Shepherd shares many physical traits with its forebear the Australian Shepherd'¿only on a smaller scale. Females stand between 13 and 17 inches at the shoulder; males range from 14 to 18 inches. Despite their size, Minis are every inch a true herding dog: energetic, versatile, rugged, and extremely bright. The eye-catching coat comes in black, blue merle, red, and red merle. (The merle will exhibit in any amount marbling, flecks, or blotches.) Minis move with the smooth and agile step of a dog built for hard work on punishing terrain."
    },

    {
        image: "https://a.storyblok.com/f/152976/1258x833/8564e6d250/belgian-malinois-breed-hero-image-2.jpg",
        title: "Belgian Malinois",
        description: "The smart, confident, and versatile Belgian Malinois is a world-class worker who forges an unbreakable bond with his human partner. To deny a Mal activity and the pleasure of your company is to deprive him of his very reasons for being. Belgian Malinois are squarely built, proud, and alert herders standing 22 to 26 inches. Strong and well-muscled, but more elegant than bulky, there's an honest, no-frills look about them, as befit dogs built to work hard for their feed. A breed hallmark is the proud carriage of the head. Coat colors range from a rich fawn to mahogany. The black ears and mask accentuate bright, questioning eyes the color of dark Belgian chocolate. If you have ever seen a Mal perform an obedience routine, you know firsthand what a smart and eager breed this is. Problems set in, though, when this people-oriented dog is underemployed and neglected. Exercise, and plenty of it, preferably side by side with their adored owner, is key to Mal happiness."
    },

    {
        image: "https://hips.hearstapps.com/hmg-prod/images/hungarian-viszla-dog-breed-of-the-month-1653290257.jpg?crop=0.622xw:0.934xh;0.0374xw,0.0434xh&resize=1200:*",
        title: "Vizsla",
        description: "The Vizsla is a versatile, red-coated gundog built for long days in the field. For centuries these rugged but elegant athletes have been the pride of Hungarian sportsmen, and their popularity in America increases with each passing year. The Vizsla is easily recognized by his sleek golden-rust coat. They can stand between 21 to 24 inches at the shoulder and are the picture of a lean, light-footed hunter's companion. The long, silky ears frame a facial expression that is sensitive and loving around the house and intense when at work. As a hunter expected to work closely with humans, Vizslas form a tight bond with their owners and hate to be left alone. Athletes of many talents, Vizslas excel at various sports and activities. They are eager and graceful trotters of great stamina, making them ideal jogging or biking companions. An expert on the breed tells us, 'If you don't have the time to encourage this breed's full use of its brain, you're wasting a good dog.'"
    },

    {
        image: "https://d.newsweek.com/en/full/2202634/chihuahua.jpg",
        title: "Chihuahua",
        description: "The Chihuahua is a tiny dog with a huge personality. A national symbol of Mexico, these alert and amusing 'purse dogs' stand among the oldest breeds of the Americas, with a lineage going back to the ancient kingdoms of pre-Columbian times. The Chihuahua is a balanced, graceful dog of terrier-like demeanor, weighing no more than 6 pounds. The rounded 'apple' head is a breed hallmark. The erect ears and full, luminous eyes are acutely expressive. Coats come in many colors and patterns, and can be long or short. The varieties are identical except for coat. Chihuahuas possess loyalty, charm, and big-dog attitude. Even tiny dogs require training, and without it this clever scamp will rule your household like a little Napoleon. Compact and confident, Chihuahuas are ideal city pets. They are too small for roughhousing with kids, and special care must be taken in cold weather, but Chihuahuas are adaptable'¿as long as they get lots of quality time in their preferred lap."
    },

    {
        image: "https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg",
        title: "Pug",
        description: "Once the mischievous companion of Chinese emperors, and later the mascot of Holland's royal House of Orange, the small but solid Pug is today adored by his millions of fans around the world. Pugs live to love and to be loved in return. The Pug's motto is the Latin phrase 'multum in parvo' (a lot in a little)'¿an apt description of this small but muscular breed. They come in three colors: silver or apricot-fawn with a black face mask, or all black. The large round head, the big, sparkling eyes, and the wrinkled brow give Pugs a range of human-like expressions'¿surprise, happiness, curiosity'¿that have delighted owners for centuries. Pug owners say their breed is the ideal house dog. Pugs are happy in the city or country, with kids or old folks, as an only pet or in a pack. They enjoy their food, and care must be taken to keep them trim. They do best in moderate climates'¿not too hot, not too cold'¿but, with proper care, Pugs can be their adorable selves anywhere."
    },

    {
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F07%2F06%2Fbasset-hound-sitting-on-sidewalk-271176049-2000.jpg",
        title: "Basset Hound",
        description: "Among the most appealing of the AKC breeds, the endearing and instantly recognizable Basset Hound is a perennial favorite of dog lovers all over the world. This low-slung and low-key hound can be sometimes stubborn, but is always charming. The Basset Hound stands no higher than 14 inches at the shoulder but, with his remarkably heavy bone, powerful little legs, and massive paws, he possesses big-dog strength and stamina. Bassets are famous for a large, domed head that features extremely long, velvety ears, mournful eyes, and a wrinkled brow, which give the breed the look of a sad clown. Built more for endurance than speed, the Basset moves in a deliberate but effortless manner. The breed's scenting ability is uncanny; it's said that among dogs only the Bloodhound's nose is more accurate. Mild and agreeable at home, the Basset is stubborn on the trail and barks in a loud, ringing voice. Although they may not be wildly demonstrative in their affections, they are steadfastly loyal."
    },

    {
        image: "https://cdn-images.vetstreet.com/72/32/f2a109cc4a59aec759fca90db449/mastiff-ap-1czd1n-645.jpg",
        title: "Mastiff",
        description: "The colossal Mastiff belongs to a canine clan as ancient as civilization itself. A massive, heavy-boned dog of courage and prodigious strength, the Mastiff is docile and dignified but also a formidable protector of those they hold dear. For the uninitiated, a face-to-face encounter with these black-masked giants can be startling. A male stands at least 30 inches at the shoulder and can outweigh many a full-grown man. The rectangular body is deep and thickly muscled, covered by a short double coat of fawn, apricot, or brindle stripes. The head is broad and massive, and a wrinkled forehead accentuates an alert, kindly expression. Mastiffs are patient, lovable companions and guardians who take best to gentle training. Eternally loyal Mastiffs are protective of family, and a natural wariness of strangers makes early training and socialization essential. Mastiffs are magnificent pets, but acquiring a powerful giant-breed dog is commitment not to be taken lightly."
    },

    {
        image: "https://cdn.britannica.com/72/234472-050-735B6214/maltese-dog.jpg",
        title: "Maltese",
        description: "The tiny Maltese, 'Ye Ancient Dogge of Malta,' has been sitting in the lap of luxury since the Bible was a work in progress. Famous for their show-stopping, floor-length coat, Maltese are playful, charming, and adaptable toy companions. Maltese are affectionate toy dogs weighing less than seven pounds, covered by a long, straight, silky coat. Beneath the all-white mantle is a compact body moving with a smooth and effortless gait. The overall picture depicts free-flowing elegance and balance. The irresistible Maltese face' with its big, dark eyes and black gumdrop nose' can conquer the most jaded sensibility.     Despite their aristocratic bearing, Maltese are hardy and adaptable pets. They make alert watchdogs who are fearless in a charming toy-dog way, and they are game little athletes on the agility course. Maltese are low-shedding, long-lived, and happy to make new friends of all ages. Sometimes stubborn and willful, they respond well to rewards-based training."
    },

    {
        image: "https://www.purina.com.sg/sites/default/files/styles/ttt_image_510/public/2021-01/Collie%20%28Rough%291.jpg?itok=KWCgDJg3",
        title: "Collie",
        description: "The majestic Collie, thanks to a hundred years as a pop-culture star, is among the world's most recognizable and beloved dog breeds. The full-coated 'rough' Collie is the more familiar variety, but there is also a sleek 'smooth' Collie. The Collie is a large but lithe herder standing anywhere from 22 to 26 inches tall. The rough variety boasts one of the canine kingdom's most impressively showy coats; the smooth coat's charms are subtler but no less satisfying. Coat colors in both varieties are sable and white, tricolor, blue merle, or white. Collie fanciers take pride in their breed's elegant wedge-shaped head, whose mobile ears and almond eyes convey a wide variety of expressions. Collies are famously fond of children and make wonderful family pets. These swift, athletic dogs thrive on companionship and regular exercise. With gentle training, they learn happily and rapidly. The Collie's loyalty, intelligence, and sterling character are the stuff of legend."
    },

    {
        image: "https://www.petfinder.com/sites/default/files/images/content/english-cocker-spaniel-detail-scaled.jpg",
        title: "English Cocker Spaniel",
        description: "English Cocker Spaniel lovers often use the word 'merry' to describe their breed. Upbeat in the field and mellow at home, this compact, silky-coated bird dog is widely admired for his delightful personality and irresistible good looks. The English Cocker Spaniel is a compactly built sporting dog standing between 15 to 17 inches at the shoulder. The softly contoured head, with its dark, melting eyes that convey an alert and dignified expression, is framed by lush, close-lying ears. The medium-length coat, seen in a variety of striking colors and patterns, is silky to the touch. 'Balance' is a key word in understanding the breed: The EC is balanced in temperament, construction, and movement. Beneath the EC's physical beauty beats the heart of a tireless, eager-to-please hunter's helper, famous the world over for his ability to flush and retrieve gamebirds. For those who prefer more domestic pursuits, there is no more charming and agreeable household companion."
    },

    {
        image: "https://dogsqueensland.org.au/media/img/BrowseAllBreed/Rhodesian-Ridgeback.jpg",
        title: "Rhodesian Ridgeback",
        description: "The Rhodesian Ridgeback is an all-purpose 'Renaissance hound' whose hallmark is the ridge, or stripe of backward-growing hair, on his back. Though the breed was made famous in its native Africa for its skill at tracking and baying, but never, ever killing,  lions, today Ridgebacks are cherished family dogs whose owners must be prepared to deal with their independence and strong prey drive. Beneath the Ridgeback's trademark ridge is a whole lot of hound: Ridgebacks are fast and powerful athletes who can weigh between 70 and 85 pounds, and oftentimes more. They come in only one color, wheaten, which spans every shade seen in a wheat field, from pale flaxen to the burnished red of a maturing crop. Ridgebacks also have two nose colors: black and the less commonly seen brown. The formidable Ridgeback can be strong-willed, independent, and sometimes domineering. Ridgebacks must be guided with a firm but a fair hand from puppyhood. They are faithful friends, protective of their loved ones, and meltingly affectionate with those whom they trust. Still, a Ridgeback can be too much hound for the novice dog owner."
    },

    // {
    //     image: "https://scontent.fsin15-1.fna.fbcdn.net/v/t31.18172-8/1119989_580477391999060_123163845_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bdTWWgl9EkoAX-PsUfR&_nc_ht=scontent.fsin15-1.fna&oh=00_AfBrkarDxWu8e0Fu1-tw6iormoCAhsLKvDuA9ZWEg-7Vbg&oe=647DE4C1",
    //     title: "Beary",
    //     description: "A bear"
    // },
]

// limit the description to only 300 chars
dogs.forEach(item => {
    item.fullDescription = item.description;
    item.description = item.description.substring(0, 300).trim();
});

// sort the dogs array
dogs.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (titleA < titleB) {
        return -1; // a should be sorted before b
    } else if (titleA > titleB) {
        return 1; // a should be sorted after b
    } else {
        return 0; // names are equal
    }
});

export default dogs;