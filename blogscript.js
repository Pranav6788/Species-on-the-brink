var tl1 = gsap.timeline()

tl1.from("#h1title",{
    opacity: 0,
    y:20,
    duration:1,
})
tl1.from("#headerdesc",{
    opacity: 0,
    y:20,
    duration:1,
    delay:-0.5
})

gsap.to("#menu-icon",{
    rotate:180,
    scrollTrigger:{
        trigger:"main",
        start:"top bottom",
        end: "15% bottom",
        scrub:true,
        // markers:true
    }
})
gsap.to(".navbar a",{
    x:-98,
    opacity: 0,
    scrollTrigger:{
        trigger:"main",
        start:"top bottom",
        end: "15% bottom",
        scrub:true,
        // markers:true
    }
})

gsap.to("#menu-icon, .navbar a",{
    color: "black",
    scrollTrigger:{
        trigger:"main",
        start:"top 5%",
        end: "5% 5%",
        scrub:true,
        // markers:true
    }
})

let menutoggle = false
document.getElementById("menu-icon").addEventListener("click", function(event) {
    event.preventDefault();
    if(!menutoggle){
        gsap.to(".navbar a",{
            x:0,
            opacity:1
        })
        menutoggle = true;
    }
    else{
        gsap.to(".navbar a",{
            x:-98,
            opacity:0
        })
        menutoggle = false;
    }
});


gsap.from(".f1",{
    x:-500,
    opacity:0,
    scrollTrigger:{
        trigger:".inner-fart",
        start: "top-=20% center",
        end: "35% center",
        scrub:true,
        // markers: true
    }
})
gsap.from(".f2",{
    x:500,
    opacity:0,
    scrollTrigger:{
        trigger:".inner-fart",
        start: "top-=20% center",
        end: "35% center",
        scrub:true,
        // markers: true
    }
})


document.querySelectorAll(".cards").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -10,
            duration: 0.01,
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            duration: 0.01,
        });
    });
});


gsap.from(".lposts", {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".inner-latest",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
        // markers: true
    }
});

const FA = new SplitType("#FA");
const LP = new SplitType("#LP");

gsap.from("#FA .char",{
    y:-40,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#FA",
        start:"top+=30% 80%",
        end:"bottom+=70% 80%",
        scrub:true,
        // markers:true
    }
})
gsap.from("#LP .char",{
    y:-40,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#LP",
        start:"top+=10% 80%",
        end:"bottom+=60% 80%",
        scrub:true,
        // markers:true
    }
})

var tl3 = gsap.timeline()
tl3.from(".details",{
    opacity:0,
    scrollTrigger:{
        trigger:"footer",
        start:"top+=50% bottom",
        end:"bottom bottom",
        scrub: true,
        // markers: true
    }
})
tl3.from(".nl-outer",{
    opacity:0,
    scrollTrigger:{
        trigger:"footer",
        start:"top+=50% bottom",
        end:"bottom bottom",
        scrub: true,
        // markers: true
    }
}) 

const sub = document.getElementById("sub");
const nl = document.querySelector(".nl");
const ack = document.querySelector(".ack");
sub.onclick = () => {
    const em = document.getElementById("em");
    if(em.checkValidity()){
        nl.style.display="none";
        ack.style.display="flex";
    }
};

let lenis;
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDate = document.getElementById("modal-date");
    const modalInfo = document.getElementById("modal-info");
    const closeModal = document.querySelector(".close");

    lenis = new Lenis({
        autoRaf: true,
    });

    document.querySelectorAll(".cards").forEach(card => {
        card.addEventListener("click", function () {
            const title = this.querySelector("h3").textContent;
            const imageSrc = this.querySelector("img").src;
            const date = this.querySelector("p").textContent;

            modalTitle.textContent = title;
            modalImage.src = imageSrc;
            modalDate.textContent = date;

            switch(title){
                case("Community-Owned Somkhanda Game Reserve Achieves Success in Rhino Conservation"):
                    modalInfo.innerHTML = `<p>Located in Zululand, Northern KwaZulu-Natal, Somkhanda Game Reserve was the first Community Game Reserve to introduce a black rhino population as part of WWF’s Black Rhino Range Expansion Project (BRREP) in 2007. Recently, the reserve marked a significant milestone in rhino conservation with a dehorning operation aimed at reducing poaching threats, following a sharp increase in rhino poaching across KwaZulu-Natal in 2023.<br><br>The operation, supported by the Rhino Recovery Fund and other donors, involved a three-day dehorning procedure carried out by experienced veterinarians, including Dr. Rowan Leeming and Dr. Jen Lawrence, along with key partners like Wildlife ACT, PAMCo, and WWF. Dehorning is a preventive measure designed to reduce the value of rhino horns, making them less appealing to poachers. This necessary step is part of a broader strategy to protect rhinos from the devastating impact of poaching, which has wiped out smaller populations and put strain on larger ones.<br><br>Monitoring rhino populations is crucial to effective conservation, and Somkhanda Game Reserve employs a two-pronged approach: daily tracking by dedicated monitors and advanced remote tracking technology in partnership with Wildlife ACT. These methods allow for better understanding of rhino health, behavior, and movements, aiding in quick responses to threats.<br><br>With the support of the Rhino Recovery Fund, Somkhanda has also installed a solar-powered LoRaWAN system to enhance tracking coverage, especially in high-density rhino areas. The recent dehorning operation showcases the power of collaboration in the fight against poaching, with all partners working together to protect these iconic creatures.</p>`;
                    break;
                case("Southern Drakensberg Hide Launches in aid of Endangered Vulture Conservation"):
                    modalInfo.innerHTML = `<p>Opened on 19 February 2024, the Mzimkulu Vulture Hide in the Southern Drakensberg is a vital conservation hub for endangered vultures. The hide, set in the heart of this picturesque region, supports the Vulture Safe Feeding Zone initiative aimed at providing a safe food source for vultures. Visitors can enjoy clear views of these magnificent birds through one-way glass and learn about conservation efforts through informative materials on-site.<br><br>The Southern Drakensberg is home to the endangered Bearded and Cape Vultures, and the Mzimkulu Vulture Hide plays a key role in their protection. The hide is a collaborative project supported by the Drakensberg Conservation Initiative, Ezemvelo KZN Wildlife, Wildlife ACT, and local landowners. By providing safe feeding zones, the hide contributes to preserving these vital bird populations while also promoting ecotourism to support ongoing conservation efforts.<br><br>Located 8 km from Underberg, the hide is situated near the Maloti-Drakensberg Park, a World Heritage Site that serves as a sanctuary for numerous threatened species. The area’s biodiversity and the park’s importance as a refuge for endemic plants and animals make it a critical stronghold for conservation.<br><br>To visit, bookings must be made at least 48 hours in advance. The entrance fee is R300 per person, with a discount for children under 16. All funds raised through bookings go towards maintaining the Vulture Safe Feeding Site and the hide. Visitors can expect to see a variety of wild species, including vultures, eagles, and other birds, while contributing to the protection of these iconic creatures.</p>`;
                    break;
                case("What happens after a lost species is rediscovered? First, we celebrate. Then we get to work."):
                    modalInfo.innerHTML = `<p>Rediscovering a lost species is like embarking on a winding journey into the unknown, full of clues, dead ends, and surprising turns. When rediscovery happens, it can feel miraculous. As Re:wild’s lost species program officer, I can attest to this. <br><br> However, finding lost species is no miracle, as the success of our Search for Lost Species program shows. Since its launch in 2017, 13 species have been rediscovered, species lost to science for at least a decade, and in some cases, centuries. <br><br> Rediscoveries often make headlines, inspiring hope for biodiversity, but the real conservation work begins after the species is found. Seven years into the program, we're seeing significant ripple effects and success stories showing how rediscovering a species can spark conservation efforts. <br><br> Let’s look at the first species rediscovered from our most wanted list — the Jackson’s Climbing Salamander, a species whose rediscovery helped expand the Finca San Isidro Amphibian Reserve in Guatemala. This moment of discovery led to the protection of land that had been slated for coffee production. <br><br> Another rediscovery, the Pernambuco Holly, found in Brazil after being absent for nearly two centuries, led to the establishment of a critical habitat protection area, classified as an Alliance for Zero Extinction (AZE) site. <br><br> Rediscovering species often involves partnerships with Indigenous and local communities, which combine scientific and cultural knowledge for long-term ecosystem stewardship. For example, the Starry Night Harlequin Toad was rediscovered in collaboration with the Indigenous Arhuaco people of Colombia. The toad, a revered guardian of water, became the focal point for efforts to conserve its ecosystem, benefiting both the toad and the community. <br><br> Rediscoveries also help cultivate young talent in conservation. An Nguyen, who rediscovered the Silver-backed Chevrotain, not only helped protect this species but also grew into a prominent conservation scientist, focusing on protecting other endangered species in Vietnam. <br><br> “First, we celebrate. Then we get to work.” This saying highlights the importance of rediscoveries, which serve as the starting point for broader conservation efforts. While rediscovering a species doesn’t automatically guarantee its survival, it’s the crucial first step in ensuring we can protect what’s left. Over the years, our program has sparked policy change, contributed to science, and forged meaningful partnerships. By rediscovering species, we are igniting real, long-term conservation action that benefits the planet.</p>`;
                    break;
                case("Sharks: Predators or Protectors?"):
                    modalInfo.innerHTML = `<p>Sharks have fascinated us for centuries, and no matter your feelings toward them, they are crucial to the health of our oceans. As apex predators, they regulate ocean populations, and they also play a key role in maintaining coral reef and seagrass ecosystems, helping them withstand increasingly frequent climate events. <br><br> Our understanding of sharks is still evolving. In the past 15 years, 20% of known shark species have been scientifically described. Sadly, over 30% of shark species are currently threatened due to overfishing, habitat loss, pollution, and climate change. <br><br> Re:wild is a proud partner of the Shark Conservation Fund (SCF), a global collaboration of philanthropists dedicated to ocean health through shark and ray conservation. Re:wild also supports marine protected areas, island-ocean ecosystems, and exploration efforts to protect new species, including sharks. <br><br> Whether you live near the coast or not, here are ways you can help protect sharks in the wild: <br><br> 1. Shop shark-free. Avoid cosmetic products and vitamins containing squalene, a shark-derived ingredient, and steer clear of shark curios like jaws and teeth. <br><br> 2. Change your diet. Overfishing is the biggest threat to sharks and rays. The industrial hunting of marine animals has decimated ecosystems. Consider reducing or eliminating meat, dairy, and fish from your diet. Shifting to plant-based foods benefits both health and the planet. <br><br> 3. Upload your photos! Participate in citizen science projects, such as Re:wild's Search for Lost Sharks, and use apps like iNaturalist to help gather scientific data. <br><br> 4. Advocate for sharks. Support laws that protect sharks and their habitats, including bans on unsustainable fishing, creation of marine protected areas, and ending the trade of threatened shark species. <br><br> 5. Reduce plastic waste. Minimize your plastic use to help prevent marine life, including sharks, from ingesting or getting entangled in it. <br><br> 6. Dive responsibly. If diving or snorkeling, follow guidelines to minimize disruption. Avoid touching or feeding sharks, respect their space, and use reef-safe sunscreen. Equip yourself with proper skills to minimize your impact. <br><br> 7. Celebrate sharks! Share accurate information about sharks with your network, helping to raise awareness of their vital role in nature. <br><br> 8. Donate. Support or volunteer with organizations dedicated to shark conservation, like Re:wild's shark initiatives.</p>`;
                    break;
                case("Rediscovering the Holy Grail of New Zealand moths"):
                    modalInfo.innerHTML = `<p>It almost sounds like a mythic tale. On a small island of rugged coasts and sheltered inlets, there exists a mysterious silvery-winged creature called the Frosted Phoenix. This elusive creature, also known as Titanomis sisyrota, remained unseen for over half a century. Once feared extinct, it was rediscovered through a combination of chance, citizen science, and the dedication of experts. <br><br> In March of this year, Swedish biologist Pav Johnsson, leading a birdwatching tour in Oban, Stewart Island, unknowingly became the only living person to have seen the Frosted Phoenix. Equipped with a UV light for moth-spotting, Johnsson spotted a large, solitary moth with ash-like wings, which led to the rediscovery. After uploading the photos to iNaturalist, the moth was identified by expert Dr. Robert Hoare, confirming it as the Frosted Phoenix, a moth long considered lost to science. <br><br> iNaturalist, a platform for sharing biodiversity photos, played a vital role in the rediscovery, allowing nature enthusiasts to collaborate and contribute to conservation efforts. This community-driven effort highlights the power of citizen science in bringing species back into the spotlight. The rediscovery sparked conversations among experts and amateurs worldwide, contributing to future research and potential habitat protection. <br><br> Johnsson’s chance discovery and the subsequent collaboration on iNaturalist demonstrate how citizen science can fill the gaps when there aren’t enough eyes on the lookout. Platforms like iNaturalist enhance the chances of rediscovering species while fostering a growing community of passionate individuals. This story is a reminder of how building a community around nature can inspire hope and contribute to conservation efforts, reminding us of the unexpected ways people can work together to protect our planet.</p>`;
                    break;
                case("The “Sustainability” Problem"):
                    modalInfo.innerHTML = `<p>"Sustainability" is often seen as the ideal standard in how we interact with the environment, but it's worth questioning whether it's truly sustainable or just a slower form of harm. Take terms like “sustainable fishing” or “sustainable hunting.” These are often marketed as responsible practices but rely on the shifting baseline effect, where the health of ecosystems is measured against already degraded conditions. In essence, when something is labeled as sustainable, it implies that an ecosystem can endure a certain level of exploitation for the time being, but what does this mean for ecosystems and species already struggling? Sustainability, in many cases, has become a justification for ongoing exploitation. It portrays actions as ethical because we're not over-extracting, but in reality, we're still depleting populations and habitats. <br><br> True sustainability should go beyond just maintaining what little remains; it should aim to rebuild what’s been lost and foster ecosystems where species can thrive. Solutions like rewilding, habitat restoration, and stronger biodiversity protection should be the goals. While feeding 8 billion people is a major challenge, the real issue lies in how we approach it. Current systems often prioritize short-term profit over long-term regeneration, depleting ecosystems. Industrial fishing, for example, damages marine habitats and overharvests fish, but there are solutions like marine exclusion zones where fishing is prohibited, allowing fish populations to recover. These healthier populations can then spill over into surrounding areas where fishing is permitted, creating a sustainable model. <br><br> Similarly, industrial monocropping harms soil and biodiversity, but alternative methods like agroforestry and polyculture can boost yields without the same destruction. We don't have to choose between feeding people and protecting the planet. What we need is a shift in practices, from marine exclusion zones to regenerative farming and alternative proteins, such as bivalve aquaculture or plant-based innovations. It’s not about stopping entirely, but about improving practices. If we don’t adapt, the same 8 billion people may find a planet unable to support them.</p>`;
                    break;
                case("The Secret Ingredient to the Perfect Beach Sand? Parrotfish Poop"):
                    modalInfo.innerHTML = `<p>Walking along a tropical white sand beach, you may feel the salty breeze in your hair and the warmth of the sand between your toes—but did you know that part of that sand is fish poop?<br><br>Yes, fish poop.<br><br>Specifically, the Parrotfish, one of nature’s unintentional architects. Parrotfish, known for their vibrant colors and bird-like beaks, play a vital role in coral reef ecosystems. Found in shallow tropical waters, these remarkable fish feed on coral polyps, small organisms that make up coral reefs. While munching on algae-covered coral, they also ingest fragments of coral skeleton. Their specialized teeth, called a pharyngeal mill, help grind the coral pieces to make digestion easier.<br><br>Parrotfish have a unique digestive system that extracts nutrients from the coral and expels the remains as fine, white sand. This process happens day after day, with countless parrotfish contributing to the creation of sand. An adult parrotfish can produce over 1 ton of sand annually. Over time, the accumulation of sand, combined with natural forces like ocean currents, helps form islands.<br><br>So, next time you're on a white sand beach, instead of thinking about fish poop, take a moment to appreciate the colorful parrotfish for their role in shaping the landscapes you enjoy.</p>`;
                    break;
                case("Awake in Winter: How Climate Change is Disrupting Black Bear Hibernation"):
                    modalInfo.innerHTML = `Imagine stepping outside on a chilly winter morning and spotting a black bear rummaging through your trash. While winter is typically a time for bears to hibernate, warming temperatures are causing black bears to stay awake longer or even skip hibernation altogether. This shift is a result of climate change, which is disrupting natural behaviors and increasing human-bear interactions.<br><br>Why Do Bears Hibernate?<br>Bears enter a state of hibernation in winter to conserve energy, relying on fat reserves they’ve built up during the fall. Unlike true hibernators, bears don’t experience dramatic drops in body temperature. They simply slow their metabolism to survive the winter when food is scarce. Hibernation typically lasts from September to April, but warming winters are shortening this period.<br><br>The Impact of Warming Winters<br>As winter temperatures rise, bears are staying awake longer. For every 1°C increase in winter temperatures, bears remain active for an additional six days. By mid-century, this could mean black bears are awake for an extra month each year, throwing off their natural rhythms and leading to potential food shortages.<br><br>What This Means for Bears<br>Longer periods of activity without adequate food sources can lead to malnutrition or even starvation. With changing climate patterns, bears also face reduced snowpack, earlier stream drying, and lower water levels, making it harder for them to build up the fat stores they need for survival.<br><br>More Encounters with Humans<br>As bears struggle to find natural food, they’re increasingly turning to human settlements for easy meals—garbage, bird feeders, and even fast-food wrappers. These encounters often lead to conflict, and bears that become habituated to human food are at risk of being euthanized or relocated. In places like Colorado, warmer winters and urban expansion are bringing bears closer to human activity year-round, leading to more bear sightings, even in the colder months.<br><br>How to Keep Bears Away<br>If you live in bear country, it’s important to take steps to discourage bears from approaching your home, even in winter. Here are some tips:<br>- Secure your trash in bear-proof containers.<br>- Take down bird feeders during the winter.<br>- Keep your car clean and locked, especially from food scraps.<br>- Use bear-proof containers when camping.<br>- Carry bear spray when hiking and use bear bells to alert wildlife to your presence.<br>- Keep pets leashed to avoid startling a bear.<br><br>Working Together for Coexistence<br>While warming winters are changing how bears behave, it’s possible to reduce conflicts by being prepared and aware. These challenges highlight larger environmental issues caused by climate change. By supporting conservation efforts and addressing climate change, we can help restore balance to ecosystems, ensuring a safer future for both humans and bears.<br><br>In the end, turning conflict into coexistence benefits us all—bears, humans, and the planet.`;
                    break;
                case("Protecting the Red Wolf: The Most Endangered Wolf in the World"):
                    modalInfo.innerHTML = `National Wildlife Federation teams up with LG Electronics (LG) for an ongoing campaign to highlight vulnerable and endangered species. In December, LG featured the Red Wolf, the most endangered wolf in the world, as the fourth animal in the campaign series with NWF.
                        <br><br>
                        Experience the red wolf in stunning 3D anamorphic display on LG’s Times Square billboard in New York City, available through February.
                        <br><br>
                        The Red Wolf is protected by the Endangered Species Act and has been designated by the International Union for Conservation of Nature (IUCN) as a critically endangered species, and their population in the wild is perilously low.
                        <br><br>
                        Red Wolves can be found in the wild in North Carolina only. Gray Wolves, another imperiled wolf species and the largest living canine species, also lives in the U.S. However, their range is much broader with populations in Alaska, several states in the northern U.S., along with a subspecies, the Mexican Gray Wolf, with a small population in the southwest U.S. Red Wolves are facing multiple threats to the survival of the species, including habitat loss, hybridization with coyotes, and human-caused mortality events, such as gunshots and vehicle strikes.`;
                    break;
                case("A Place for Wildlife to Live, Survive—and Thrive."):
                    modalInfo.innerHTML = `<p>Every wild animal requires a place to live, but today, much of their habitat is under threat from human development, climate change, and fragmentation, which disrupts natural migration routes. Some wildlife species, especially territorial ones, face challenges with population density and the need to travel long distances for mating and reproduction. It's crucial to preserve large, undeveloped landscapes that support the free movement of wildlife, especially with the additional pressures from climate change. Let's explore the challenges faced by different wildlife species and the ways our donors are supporting science-based solutions, led by our Chief Scientist, Dr. Diane Pataki, to help wildlife thrive.<br><br>Mule deer are selective eaters, feeding on the most nutritious parts of plants like leaves, stems, and buds. Prolonged droughts, driven by climate change, along with human impacts on their habitat, have led to a decline in mule deer populations. The National Wildlife Federation is assessing these threats and working to expand habitat for mule deer, create migratory corridors, and mitigate the effects of climate change and oil and gas development on their habitat.<br><br>Manatees, marine mammals inhabiting the Gulf and Atlantic coasts, seek warm waters during the winter. However, dams, barriers, and water quality issues prevent them from accessing the warm waters they need. Additional threats include boat strikes and unpredictable water temperatures due to climate change. The National Wildlife Federation is focused on educating boaters, restoring manatee habitat, and improving water quality to protect the species.<br><br>Canada lynx, once widespread in northern states, now only inhabit a few states outside Alaska. Habitat loss from industrial logging, development, and climate change has threatened their survival. The National Wildlife Federation has partnered with other organizations to restore landscape connectivity and ensure that lynx can move freely, particularly as climate change alters their habitat. The lynx is now listed as threatened under the Endangered Species Act.<br><br>Pronghorn, the fastest land animal in North America, are also known for having the longest land migration in the U.S., traveling 150 miles between Wyoming’s Upper Green River Basin and Grand Teton National Park. Along the way, they face obstacles like highways, fences, and development. The National Wildlife Federation is working to open migratory corridors, reduce human-wildlife conflicts, and implement wildlife-friendly fencing to help pronghorn and other species navigate their range more easily.</p>`;
                    break;
                case("Birders rediscover lost species on Mussau in Papua New Guinea"):
                    modalInfo.innerHTML = `<p>In June 2024, Joshua Bergmark led a group of birders through the forests of Mussau Island, the largest of the St. Matthias islands off the northeast coast of Papua New Guinea in the Bismarck Archipelago. It had been a successful trip so far, and the group reached Mussau 10 days into the 16 day trip. They had spotted three of the island’s four endemic species — the Mussau Monarch, Mussau Fantail and the Mussau Flycatcher — and were now searching for the elusive Mussau Triller.<br><br>The triller, a member of the cuckooshrike family, was last documented on Mussau in 1979, and is listed as a lost bird by the Search for Lost Birds, a collaboration between American Bird Conservatory (ABC), Re:wild and BirdLife International. Trillers, which are found across Australasia and Asia, are typically gray, white and black — Mussau Trillers have a distinct chestnut colouring on their breasts — and eat fruit and insects. Like the monarch, fantail and flycatcher, Mussau Trillers are forest birds, but prefer the taller trees in the dense forest at the center of the island, which can make them harder to find.<br><br>Bergmark, who is from Sydney, Australia, and co-founder of Ornis Birding Expeditions, secured an old ambulance for the birding group to drive farther into the forest center. After driving for an hour, the group got out and walked, but at the base of a steep hill, some stopped and waited to be driven up, while others began the ascent on foot. That turned out to be a fortuitous choice.<br><br>A birder who chose to wait noticed a couple of birds quietly perched in a nearby tree. Lo and behold, he had spotted the Mussau Triller. The other members of the group returned soon afterwards and together they took the first known photographs and sound recordings of the bird. They documented nine birds across three flocks.<br><br>“Usually, you often hear these birds before you see them. In this case one of the clients saw it first before he heard anything,” says Bergmark. “They were just moving around with the other birds and feeding, doing their own thing while we watched them.”<br><br>Logging a possible threat<br>The Mussau Triller is assessed as Vulnerable on the IUCN Red List of Threatened Species because of logging on the island since the 1980s. According to Global Forest Watch, primary forest in New Ireland province, which includes Mussau, decreased 7.2% between 2000 and 2023.<br><br>On his last visit to Mussau six years ago, Bergmark took the first known photographs of the Mussau Flycatcher. At the time, he couldn’t search for the triller because the island’s interior forests were inaccessible. This past June, he noted, it was likely that his birding group were able to spot the triller because logging roads now cut through the forest, even at the island’s summit, 1,600 feet (500 meters) above sea level. “Looking at satellite images of forest cover, we can have a tendency to assume that species like the triller are doing fine despite the lack of recent records,” says John Mittermeier, director of the Search for Lost Birds for ABC. “But in fact it is vitally important to check up on island species, like the triller. We don’t know how a bird like this responds to these habitat changes caused by logging and invasive species. The fact that Josh and his group found the triller and confirmed its presence after so many years is stunning news.”<br><br>Mittermeier emphasized that other island birds in the area have not fared so well, and the vast majority of all bird extinctions have happened on islands, like Mussau. He pointed to how the Makira Moorhen of the Solomon Islands was last documented in 1929 and for many years was assumed to be secure — despite the lack of further records — because of the amount of forest on the island where it lived. In fact, he said, the species was probably declining rapidly and multiple recent searches have failed to find it at all.<br><br>“The moorhen is always in my mind when I think about the importance of checking up on island birds,” he says. “It should be a red flag if no one has documented a species in more than 10 years.”<br><br>Birding community a valuable resource for conservation<br>Bergmark is co-founder of Ornis Birding Expeditions, which specializes in birding tours in remote regions around the world. The East Melanesian Islands are a biodiversity hotspot and, following the rediscovery of the triller, are home to 15 lost birds, making the area one of the three highest priority regions in the world for lost birds, along with mainland New Guinea and the Democratic Republic of Congo. The Islands also have one of the highest rates of species endemism in the world.<br><br>“That’s my favourite area in the world for birding by far,” says Bergmark. “It's one of the few regions where there's still very little known about a lot of the birds and the other animals: how to find them, where they are, how they live. Almost every time I go back to New Guinea, if I'm doing a tour, we find something interesting. Something that hasn't necessarily been documented before.”<br><br>The rediscovery and photographs of the Mussau Triller are an example of the valuable resource that the global birding community is for the Search for Lost Birds, said Mittermeier. After the Search for Lost Birds was launched in 2021, ABC reached out to Bergmark and other experts because of their experience searching for birds in places like Melanesia. According to a recent study published in Frontiers in Ecology and the Environment, citizen science platforms like eBird, Xeno-canto and iNaturalist, where anyone can record their sightings and upload photographs of birds around the globe — Bergmark said his company regularly uploads findings to eBird —contain records on 98% of all bird species on earth.<br><br>“That documentation is a hugely valuable data point for us as conservationists,” says Mittermeier. “One of the most basic pieces of information you need in conservation is simply knowing where a species is and geo-located records submitted by citizen scientists, like Josh’s photographs of the triller, help provide that understanding. That’s square one for any conservation analysis and planning.”<br><br>Bergmark says a bird touring company’s ability to reach remote areas is a good thing for conservationists. “As much as birdwatchers and researchers would like to just go and spend time looking at birds in these remote areas, it’s difficult to do it in formats other than organized tours like this.”<br><br>“For these lost birds, where ecological data is often so scant, each and every observation contributes disproportionately to our understanding of the threats facing them (if any), as well as their habitat needs and population trend,” said Alex Berryman, red list officer for BirdLife International.<br><br>On the June trip Bergmark also snapped his first photographs of the Manus Dwarf-Kingfisher, a bird endemic to Manus Island west of Mussau, that was also lost from 2002 until 2022. He also photographed the New Hanover Mannikin, an endemic species to New Hanover Island, south of Manus Island, which was close to being considered a Lost Bird.<br><br>“Every time we get out to one of these rarely visited islands or places, and just get on the ground, walk around and see things that few other people have seen, it’s exciting,” says Bergmark. “Yes, it's exciting, always.”</p>`;
                    break;
                case("Bucking the trend for amphibians, Costa Rica's salamanders stage a comeback"):
                    modalInfo.innerHTML = `<p>The second Global Amphibian Assessment reveals that amphibians are facing significant threats, with two out of every five species at risk of extinction. Despite this alarming situation, Costa Rica stands out as a success story. Two species of salamanders, La Estrella and Richard’s Salamander, have shown improvements in conservation status due to decades of government-led conservation efforts. Costa Rica experienced severe deforestation in the 20th century, but by the 1980s, the country began addressing this issue through institutional reforms and the establishment of a new Ministry of Environment. The introduction of the Payments for Ecosystem Services (PES) program in 1996 provided financial incentives for landowners to preserve forests, contributing to the restoration of 1.2 million hectares of land. This program not only helped to reverse deforestation but also supported biodiversity conservation, including amphibians like the salamanders. Today, Costa Rica’s conservation efforts are seen as a global model for balancing wildlife protection, economic growth, and environmental restoration.</p>`;
                    break;
                case("Brazil's battle for beef pushes Critically Endangered frog from its wetland home"):
                    modalInfo.innerHTML = `<p>A parched cow hardly seems like an intimidating threat, but for Pithecopus rusticus, a small frog that can fit in the palm of your hand, a towering bovine is a massive disturbance. The Rustic Monkey Tree Frog lives in Brazil’s Atlantic Forest, a biodiverse region where water is a precious resource. These frogs depend on access to clean water, but their habitat is threatened by livestock and agricultural activities. This Critically Endangered species is being pushed closer to extinction due to deforestation caused by the demand for beef production, which has already led to the loss of millions of trees in Brazil, particularly in the Amazon rainforest. Cattle ranching is the largest driver of this deforestation, with over 800 million trees cut down in just six years. As the global demand for beef continues to rise, Brazil has prioritized agricultural production over conservation, endangering species like the Rustic Monkey Tree Frog.<br><br>The industrial animal agriculture system has a direct impact on the frog’s survival. Habitat destruction is the most common threat to amphibians, with agriculture being the primary cause. In the case of the Rustic Monkey Tree Frog, habitat loss and destruction due to grazing and the creation of water troughs for cattle have severely impacted their population. Once restricted to a high-altitude grassland in Brazil’s Atlantic Forest, their population is now limited to just one small area, and only a few individuals have been recorded. Despite multiple searches, only about 40 individuals of this species remain.<br><br>The Rustic Monkey Tree Frog’s habitat has been further altered due to human activity. In 2018, the area was modified to create a water trough for cattle, burying the vegetation where the frogs used to lay their eggs. As a result, the frogs were forced to relocate, but the new area is also under threat due to cattle trampling and invasive species. Conservation efforts are urgently needed to prevent the extinction of this species. The frog’s survival depends on reducing human impact, such as preventing wetland draining and limiting pesticide use near their habitat. Additionally, climate change is exacerbating drought conditions in Brazil, increasing competition for water and putting further pressure on this fragile ecosystem. To ensure the frog and other threatened species have a chance of survival, conservation intervention is essential.</p>`;
                    break;
                case("New analysis reveals 126 birds are lost to science and haven't had a confirmed sighting in at least a decade"):
                    modalInfo.innerHTML = `<p>The Search for Lost Birds, a collaboration between Re:wild, American Bird Conservancy and BirdLife International, has developed the most complete tally of bird species that are lost to science. Of the approximately 11,849 species of birds, 126 meet the criteria of being “lost.” These birds have not had a documented sighting in at least 10 years (meaning there are no photos, videos or audio recordings of them), and they are not assessed as extinct or extinct in the wild by the International Union for Conservation of Nature’s (IUCN) Red List of Threatened Species. Citizen scientists and birders’ enthusiasm for documenting birds provided important data that helped create the list of lost birds.<br><br>“Birds are the most well-documented group of animals on Earth, and it’s a testament to just how much people love them that only about one percent of the world’s birds have evaded documentation during the last decade,” said Cameron Rutt, lead author of the paper and former lost birds science coordinator with American Bird Conservancy. “Within that one percent, however, there are many highly threatened species that haven’t been recorded in decades. Finding these birds is essential to prevent them from slipping into extinction.”<br><br>Ornithologists with the Search for Lost Birds analyzed more than 42 million photos, videos and audio recordings of birds collected by three citizen science platforms (The Cornell Lab of Ornithology’s Macaulay Library, iNaturalist and xeno-canto), as well as museum collections and media from search engines and scientific research papers. They also conferred with local experts to identify birds that have not had a documented sighting between 2012 and the end of 2021.<br><br>That analysis, titled “Global gaps in citizen science data reveal the world’s ‘lost’ birds,” was published in the journal Frontiers in Ecology and the Environment today, June 17, and totaled 144 birds. In the two years since that initial analysis was completed, the Search for Lost Birds has continued to track birds that have been rediscovered and taxonomic clarifications that no longer treat certain birds as separate species.<br><br>Fourteen of the original 144 species were recorded on citizen science platforms or documented by conservationists between 2022 and 2023. Two species were subject to taxonomic clarification. And two species from the original list have populations in human care, so even though they have no recent documentation in the wild, they do not qualify as “lost.” These findings bring the current total of lost birds to 126.<br><br>The list includes species that have been lost for just over the 10-year threshold and others that have been lost for more than 150 years, such as the Jamaican pauraque, coppery thorntail, and New Caledonian lorikeet. The most recently lost species, the Papuan whipbird, hasn’t been documented by scientists or registered on citizen science platforms in 13 years. The white-tailed tityra is the longest-lost bird and hasn’t had a confirmed sighting in 195 years. The Search for Lost Birds has made the list of all lost bird species accessible on its website. Bird scientists and enthusiasts can see the complete list and illustrations of every lost bird, as well as search for birds by species, location or taxonomy.<br><br>“Figuring out why these birds have become lost and then trying to find them can feel like a detective story,” says John C. Mittermeier, the director of the search for lost birds at American Bird Conservancy, who has participated in several lost bird searches in different parts of the world. “While some of the species on the list will be incredibly challenging or maybe even impossible to find, others might reveal themselves relatively quickly if people get to the right places. Regardless of the situation, working closely with local people and citizen scientists is the best way to find lost birds and begin conservation efforts to ensure that these species don't become lost again.”<br><br>Several of the lost species, including Itombwe nightjar, Jerdon’s courser, Himalayan quail, South Island Kōkako, Vilcabamba brushfinch, Negros fruit-dove, Siau scops-owl and Cuban kite are among the most wanted species that the Search for Lost Birds is hoping to rediscover with local partners. However, the Search for Lost Birds invites sharp-eyed birders around the world to help find other species. If birders see one of the lost species and capture photos, video or a sound recording of the bird, they can contact the Search for Lost Birds to help share their discovery and update the list.<br><br>Many of the lost bird species identified by the Search for Lost Birds live in the tropics, particularly on small islands or in mountainous areas. Oceania has 56 lost bird species, the most of any geographic area in the world, followed by Africa with 31, Asia with 27, South America with 19, North America with 13 and Europe with only one (note: some birds range across multiple regions).<br><br>The reasons why 126 species of birds are lost to science vary. Some of these birds are in areas that are difficult to reach, which has prevented conservationists from mounting searches to find them. It is possible that although scientists have not seen those species, they are not lost to local and Indigenous communities, as was the case with the black-naped pheasant-pigeon in Papua New Guinea (its local name is Auwo).<br><br>Sixty-two percent of lost birds are threatened with extinction. Birds that are lost and inhabit areas where local communities, birders, conservationists and ornithologists often visit are more likely to be endangered or critically endangered.<br><br>“Documenting the survival of lost birds is critically important for supporting next-step actions to conserve these species,” said Daniel Lebbin, vice president of threatened species at American Bird Conservancy. “We need to confirm these birds survive and where to conserve their habitat.”<br><br>As climate change and biodiversity loss continue to impact the planet, ornithologists worry that it’s possible that some species may be at a higher risk of extinction than conservationists realize, even if they live in remote areas with enough habitat. Expeditions to find species could help mitigate threats to those species before they become worse.<br><br>“While birds are the most well-documented group, every additional data point helps focus the direction of the program,” says Christina Biggs, leader of the Search for Lost Species at Re:wild and one of the co-authors of the paper. “We want to make sure that our resources go toward preventing extinction of the most threatened species, so this research is extremely valuable for us. As the sixth mass extinction progresses, it’s imperative that we grow our scientific circles to include Indigenous, local community, and citizen science knowledge, every possible bit of information directed at halting biodiversity loss.”<br><br>Since it was launched in 2021, the Search for Lost Birds and its partners have supported projects on lost bird species around the world including the Santa Marta sabrewing in the Sierra Nevada de Santa Marta in Colombia, the Sinú parakeet in the Alto Sinú in Colombia, the black-naped pheasant-pigeon in Papua New Guinea, the Siau scops-owl and black-browed babbler in Indonesia, Urich’s tyrannulet in Venezuela, pink-headed duck in Myanmar, South Island kōkako in New Zealand, and the dusky tetraka in Madagascar.</p>`;
                    break;
            }

            lenis.destroy();

            modal.style.display = "flex";

            document.body.classList.add("no-scroll");
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";

        lenis = new Lenis({
            autoRaf: true,
        });

        document.body.classList.remove("no-scroll");
        document.body.style.overflow = '';  
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";

            lenis = new Lenis({
                autoRaf: true,
            });

            document.body.classList.remove("no-scroll");
            document.body.style.overflow = '';  
        }
    });
});
