
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dataChange(component, dataType, index) {

    let iosDevice = /iPhone/i.test(navigator.userAgent);

    if(!iosDevice) {
        component.style.transition = 'opacity .3s';
        component.style.opacity = '0';
        await sleep(300);
    }

    switch(dataType) {
        case 'name': component.innerHTML = data[index].name;
            break;
        case 'title': component.innerHTML = data[index].title;
            break;
        case 'description': component.innerHTML = data[index].description;
            break;
        case 'time': component.innerHTML = data[index].time;
            break;
        case 'distance': component.innerHTML = data[index].distance;
            break;
        case 'image': component.setAttribute('src', data[index].image);
            break;
        case 'wideImage': component.style.setProperty('--content', data[index].wideImage)
    }

    if(!iosDevice) {
        component.style.opacity = '';
        await sleep(300);
        component.style.transition = '';
    }
}