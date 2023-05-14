const mealsWrapper = document.querySelector('.meals');
const mealTemplate = document.querySelector('.mealtemplate').content;
const categoriesDiv = document.querySelector('.categories');
const categorySet = document.querySelectorAll('.category');

// show meals function
const showMeals = meals => {
    mealsWrapper.innerHTML = '';
    let mealsFragment = document.createDocumentFragment();
    meals.forEach(meal => {
        let duplicate = mealTemplate.cloneNode(true);
        duplicate.querySelector('.meal-pic').src = meal.rasm;
        duplicate.querySelector('.meal-pic').alt = meal.nom;
        duplicate.querySelector('.meal-name').textContent = meal.nom;
        duplicate.querySelector('.meal-price').textContent = meal.narx + " so'm";
        duplicate.querySelector('.meal-text').textContent = meal.matn;
        duplicate.querySelector('.meal-type').textContent = meal.tur;
        mealsFragment.appendChild(duplicate);
    });
    mealsWrapper.appendChild(mealsFragment);
}

// show all meals
showMeals(taomlar);

// change category
categoriesDiv.addEventListener('click', function(evt){
    if(evt.target.classList.contains('category')){
        categoriesDiv.querySelector('.active').classList.remove('active');

        let categoryNum = Number(evt.target.dataset.num);
        categorySet[categoryNum].classList.add('active');

        let chosenCategory = evt.target.dataset.type;
        if(chosenCategory === 'hammasi'){
            showMeals(taomlar);
        } else {
            let chosenMeals = taomlar.filter(taom => {
                return taom.tur === chosenCategory;
            });
            showMeals(chosenMeals);
        }
    }
});