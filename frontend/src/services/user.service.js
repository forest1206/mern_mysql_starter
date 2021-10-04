import axios from "axios";
import authHeader from "./auth-header";
import { handleError } from "./utils";
import axiosInstance from "./axiosInstance";
import { API_URL } from "./config";

const baseUrl = `${API_URL}/api/user/`;

const userService = {
  getAll: async () => {
    try {
      return await axiosInstance.get(`api/user/`, { headers: authHeader() });
    } catch (error) {
      return handleError(error);
    }
  },
  retrieve: async (userId) => {
    try {
      return await axiosInstance.get(`api/user/${userId}`);
    } catch (error) {
      return handleError(error);
    }
  },
  create: async (user) => {
    try {
      return await axiosInstance.post(`api/user/`, user);
    } catch (error) {
      return handleError(error);
    }
  },
  update: async (user) => {
    try {
      return await axiosInstance.put(`api/user/${user.id}`, user);
    } catch (error) {
      return handleError(error);
    }
  },
  delete: async (userId) => {
    try {
      return await axiosInstance.delete(`api/user/${userId}`);
    } catch (error) {
      return handleError(error);
    }
  },
};

export default userService;
