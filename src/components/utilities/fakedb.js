const addToLocalStorage = id => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id]; 
    if(quantity){
        const newQuantity = quantity+1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newItem);
    }
    else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
}

const removeFromLocalStorage = id =>{
    // console.log('inside db', id)
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            // console.log('here', id);
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        else{
            console.log('not here', id);
        }
    }
}

const deleteFromLocalStorage = () =>{
    localStorage.removeItem('shopping-cart');
}

const getTotalPrice = foods =>{
    const reducer = (previous, current) =>{
        return previous + current.price;
    }

    const total = foods.reduce(reducer, 0);
    return total;
    
} 

export {addToLocalStorage, removeFromLocalStorage, deleteFromLocalStorage, getTotalPrice as getTotal};