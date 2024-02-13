import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const TotalCartPrice = useSelector(getTotalCartPrice)
  if (!totalCartQuantity) return null
  return (
    <div className="md-text-base flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6">
      <p className="space-x-4	 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${TotalCartPrice}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
