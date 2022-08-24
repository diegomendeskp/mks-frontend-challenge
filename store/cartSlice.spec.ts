import { addToCart, decreaseCart, removeFromCart, subTotals } from './cartSlice'
import {store} from './store'

describe('testing cartSliceReducer', ()=>{
    it('Should initially set cartItems to an empty object', ()=>{
        const state = store.getState().cart
        expect(state.cartItems).toEqual([])
    })
    describe('testing addToCart', ()=>{
        it('should add a item to the cart state', ()=>{
            store.dispatch(addToCart({
                id: 1,
                photo: 'photo',
                name: 'itemobject',
                description: 'itemDescription',
                price: 25,
                key: 7,
                cartQuantity: 3,
            }))
            const state = store.getState().cart
             expect(state.cartItems[0].description).toEqual('itemDescription')
        })
    })
    describe('testing subTotals', ()=>{
        it('should add a item to the cart state', ()=>{
            store.dispatch(subTotals())
            const state = store.getState().cart
             expect(state.cartTotalQuantity).toEqual(1)
             expect(state.cartTotalAmont).toEqual(25)

        })
    })
    describe('testing decreaseCart', ()=>{
        it('should add a item to the cart state', ()=>{
            store.dispatch(addToCart({
                id: 2,
                photo: 'photo',
                name: 'itemobject',
                description: 'itemDescription',
                price: 25,
                key: 7,
                cartQuantity: 3,
            }))
            store.dispatch(decreaseCart({
                id: 2,
                photo: 'photo',
                name: 'itemobject',
                description: 'itemDescription',
                price: 25,
                key: 7,
                cartQuantity: 3,
            }))
            const state = store.getState().cart
             expect(state.cartTotalQuantity).toEqual(1)
             expect(state.cartItems[0].description).toEqual('itemDescription')
        })
    })

    
})