import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import Navbar from "../component/Navbar";
import SingleCard from "../component/SingleCard";
import { singleApi } from "../store/Data/data.action";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const SingleSelector = useSelector((state) => state.data);
  let one = { ...SingleSelector.data[0] };
  useEffect(() => {
    dispatch(singleApi(id));
  }, []);
  return (
    <div>
      <Navbar />

      <div>
        {useSelector.loading ? (
          <Loading />
        ) : (
          <SingleCard one={one} width="400px" />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
