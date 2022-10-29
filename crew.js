
const memberButtons = document.querySelectorAll('.member-button');

const name = document.querySelector('.member-name');
const title = document.querySelector('.job-title');
const description = document.querySelector('.member-description');
const image = document.querySelector('.member-photo');

const data = [
    {
        name: 'Douglas Hurley',
        title: 'Commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA' +
            ' astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: 'assets/crew/image-douglas-hurley.png'
    },
    {
        name: 'Mark Shuttleworth',
        title: 'Mission Specialist',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the' +
            ' Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to' +
            ' space as a space tourist.',
        image: 'assets/crew/image-mark-shuttleworth.png'
    },
    {
        name: 'Victor Glover',
        title: 'Pilot',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space' +
            ' Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of' +
            ' Expedition 64, and served as a station systems flight engineer.',
        image: 'assets/crew/image-victor-glover.png'
    },
    {
        name: 'Anousheh Ansari',
        title: 'Flight Engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was' +
            ' the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first' +
            ' Iranian in space. ',
        image: 'assets/crew/image-anousheh-ansari.png'
    }
]

memberButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if(!button.classList.contains('selected-member')) {
            let previousSelect = document.querySelector('.selected-member');
            previousSelect.classList.remove('selected-member');

            button.classList.add('selected-member');

            dataChange(name, 'name', index);
            dataChange(title, 'title', index);
            dataChange(description, 'description', index);
            dataChange(image, 'image', index);
        }
    })
})

import image1 from "/assets/crew/image-douglas-hurley.png";
import image2 from "/assets/crew/image-mark-shuttleworth.png";
import image3 from "/assets/crew/image-victor-glover.png";
import image4 from "/assets/crew/image-anousheh-ansari.png";
