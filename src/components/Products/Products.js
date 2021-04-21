import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SingleProduct from './SingleProduct/SingleProduct';
import Loading from '../Loading/Loading';
import { useAppContext } from '../../context/context';
import './Products.css';
import useFetchData from '../../hooks/useFetch';

const Products = () => {
  const [state, dispatch] = useAppContext();
  const [loading, products] = useFetchData();

  const filterProduct = (e) => {
    const category = e.target.value;
    dispatch({
      type: 'SET_CATEGORY',
      payload: category,
    });
  };

  if (loading) return <Loading />;
  return (
    <section className="products">
      <div className="products__top container">
        <h1>All Products</h1>
        <form>
          <select onChange={filterProduct}>
            <option value="All">All</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
          <span>
            <ArrowDropDownIcon />
          </span>
        </form>
      </div>

      <div className="products__center container">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <div className=" container">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span className="page__icon">
            <ArrowForwardIosIcon className="page__icon" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
