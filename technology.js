

const techButtons = document.querySelectorAll('.tech-button');

const title = document.querySelector('.tech-term');
const description = document.querySelector('.tech-term-definition');
const image = document.querySelector('.tech-img');

const data = [
    {
        title: 'Launch vehicle',
        description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from' +
            ' Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most' +
            ' powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
        image: 'assets/technology/image-launch-vehicle-portrait.jpg',
        wideImage: 'url(\'assets/technology/image-launch-vehicle-landscape.jpg\')'
    },
    {
        title: 'Spaceport',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the' +
            ' seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally' +
            ' situated to take advantage of the Earth’s rotation for launch.',
        image: 'assets/technology/image-spaceport-portrait.jpg',
        wideImage: 'url(\'assets/technology/image-spaceport-landscape.jpg\')'
    },
    {
        title: 'Space capsule',
        description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter' +
            ' the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight.' +
            ' It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        image: 'assets/technology/image-space-capsule-portrait.jpg',
        wideImage: 'url(\'assets/technology/image-space-capsule-landscape.jpg\')'
    }
]

techButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if(!button.classList.contains('selected-tech')) {
            let previousSelect = document.querySelector('.selected-tech');
            previousSelect.classList.remove('selected-tech');

            button.classList.add('selected-tech');

            dataChange(title, 'title', index);
            dataChange(description, 'description', index);
                dataChange(image, 'image', index);
                dataChange(image, 'wideImage', index);

        }
    })
})
