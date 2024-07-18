import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { getUser } from "../redux/reducer/auth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (isAuthenticated) {
    console.log("isAuthenticated:---", isAuthenticated);
    <Navigate to="/home" />;
  }

  // if (!isAuthenticated) {
  //   console.log("is not Authenticated:---", isAuthenticated);
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default ProtectedRoute;
