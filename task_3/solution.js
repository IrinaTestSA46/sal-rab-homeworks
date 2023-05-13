function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество

    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
 
    let itemCountText = " ";
        itemCountText = product.count + " × " + product.price + " ₽ " + "= " ;
    let sum = product.count * product.price;
        itemCountText = itemCountText + sum + " ₽";

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
