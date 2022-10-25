const name = document.querySelector('.heavenly-title');
const description = document.querySelector('.heavenly-description');
const distance = document.querySelector('.distance-value');
const time = document.querySelector('.time-value');
const image = document.querySelector('.heavenly-body-image');

// const moonButton = document.querySelector('.moon-button');
// const marsButton = document.querySelector('.mars-button');
// const europaButton = document.querySelector('.europa-button');
// const titanButton = document.querySelector('.titan-button');

const heavenlyButtons = document.querySelectorAll('.heavenly-button');

const heavenlyInfo = [
    {
        name: 'Moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain' +
            ' perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2' +
            ' and Apollo 11 landing sites.',
        distance: '384,400 km',
        time: '3 days',
        image: 'assets/destination/image-moon.png'
    },
    {
        name: 'Mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest' +
            ' planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 Mil. km',
        time: '9 months',
        image: 'assets/destination/image-mars.png'
    },
    {
        name: 'Europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream.' +
            ' With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in' +
            ' your snug wintery cabin.',
        distance: '628 Mil. km',
        time: '3 years',
        image: 'assets/destination/image-europa.png'
    },
    {
        name: 'Titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from' +
            ' home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 Bil. km',
        time: '7 years',
        image: 'assets/destination/image-titan.png'
    }
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

heavenlyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
    if(!button.classList.contains('selected-body')) {
        let previousSelect = document.querySelector('.selected-body');
        previousSelect.classList.remove('selected-body');

        button.classList.add('selected-body');

        dataChange(name, 'name', index);
        dataChange(description, 'description', index);
        dataChange(time, 'time', index);
        dataChange(distance, 'distance', index);
        dataChange(image, 'image', index);
    }
    })
})

async function dataChange(component, dataType, index) {

    let iosDevice = /iPhone/i.test(navigator.userAgent);

    if(!iosDevice) {
        component.style.transition = 'opacity .3s';
        component.style.opacity = '0';
        await sleep(300);
    }
    switch(dataType) {
        case 'name': component.innerHTML = heavenlyInfo[index].name;
            break;
        case 'description': component.innerHTML = heavenlyInfo[index].description;
            break;
        case 'time': component.innerHTML = heavenlyInfo[index].time;
            break;
        case 'distance': component.innerHTML = heavenlyInfo[index].distance;
            break;
        case 'image': component.setAttribute('src', heavenlyInfo[index].image)
    }
    if(!iosDevice)) {
        component.style.opacity = '';
        await sleep(300);
        component.style.transition = '';
    }
}