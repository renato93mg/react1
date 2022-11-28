import logo from './assets/img/shopping-cart.png'

export default function CartWidget(props){
    return (
        <>
            <img src={logo} alt="" width={props.width} height={props.height} />
        </>
    )
}