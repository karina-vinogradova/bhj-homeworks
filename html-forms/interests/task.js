function changeCheckbox(event) {    
    checkChild(event.target);
    checkParent(event.target);
}

function getChildren(element) {
    try {       
        return element.closest('.interest').querySelector('.interests').querySelectorAll('.interest__check');
    } catch {
        return element;
    }
}

function getParent(element) {
    try {       
        return element.closest('.interests').closest('.interest').querySelector('.interest__check');
    } catch {
        return null;
    }
}

function checkParent(element) {
    
    while ((element = getParent(element))) {
        let child = getChildren(element);

        let childLength = Array.from(child).filter((el) => el.checked).length;
      
        childLength === child.length ? element.checked = true : element.checked = false;
        childLength !== 0 && !element.checked ? element.indeterminate = true : element.indeterminate = false;
    }
}

function checkChild(element) {
    let child = getChildren(element);
    
    if (child.length > 0) {
        for (let item of child) {
            item.checked = element.checked;   
            item.indeterminate = false;
        }
    }
}

document.addEventListener('change', changeCheckbox);