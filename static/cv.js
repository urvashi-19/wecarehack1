console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Madhu Bala',
        age: 34,
        city: 'Kolkata',
        Education: '10th pass',
        Experience : 4,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/51.jpg'
    },

    {
        name: 'Aarti Jain',
        age: 28,
        city: 'Bangalore',
        Education: '10th pass',
        Experience : 4,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/54.jpg'
    },

    {
        name: 'Saraswati Agarwal',
        age: 38,
        city: 'Kolkata',
        Education: '12th pass',
        Experience : 8,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        Education: 'B.A',
        Experience : 20,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Maya',
        age: 34,
        city: 'Jharkhand',
        Education: '12th pass',
        Experience : 9,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/95.jpg'
    },
    {
        name: 'Kajal Verma',
        age: 49,
        city: 'Assam',
        Education: '12th pass',
        Experience : 10,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    {
        name: 'Shivani Roy',
        age: 40,
        city: '9th pass',
        Education: '12th pass',
        Experience : 7,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
        name: 'Kanchana',
        age: 34,
        city: 'Delhi',
        Education: 'B.A',
        Experience : 2,
        contact : 123456789,
        image: 'https://randomuser.me/api/portraits/women/70.jpg'
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Education: ${currentCandidate.Education}</li>
    <li class="list-group-item">Experience: ${currentCandidate.Experience}</li>
    <li class="list-group-item">Mob.No: ${currentCandidate.contact}</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}