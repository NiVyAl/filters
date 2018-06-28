var photo = document.querySelector('.photo-container');
var filters = document.querySelectorAll('.filters li');
var reset = document.querySelector('.reset');
var isFilter = false;

reset.addEventListener('click', function(){
    if (isFilter){
        console.log('true');
        reset.classList.add('reset-active');
        resetFilter();
    }
});

var clickControl = function(control) {
    control.addEventListener('click', function(){
        useFilter(control);
    })
}

var resetFilter = function() {
    for (var i=0; i<filters.length; i++){
        photo.classList.remove(filters[i].dataset.filtername);
        filters[i].classList.remove('active');
        isFilter = false;
    }
}

var useFilter = function(filterAddress) {
    resetFilter();
    
    var filterName = filterAddress.dataset.filtername;
    photo.classList.add(filterName);
    filterAddress.classList.add('active');
    isFilter = true;
    reset.classList.remove('reset-active');
}


for (var i=0; i<filters.length; i++){
    filters[i].innerHTML = filters[i].dataset.filtername;
    filters[i].classList.add(filters[i].dataset.filtername);
    clickControl(filters[i]);
}
