import { configureStore } from "@reduxjs/toolkit";
import task from './task/slice';

const store = configureStore({ reducer: {task} })

export default store;