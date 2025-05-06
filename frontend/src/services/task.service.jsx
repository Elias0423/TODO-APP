import axios, { HttpStatusCode } from "axios";
import { env } from "../config/constants";

export const getTasks = async () => {
  try {
    const response = await axios.get(env.TASK_API_URL);
    const { data, success, message } = response.data;
    if (data && success) return data;
    else return { error: message };
  } catch (error) {
    console.error("Error:", error);
    if (error?.response?.status === HttpStatusCode.NotFound) {
      return [];
    }
    return { error: error?.response?.data?.message || error.message };
  }
};
export const saveTask = async (task) => {
  try {
    const response = await axios.post(env.TASK_API_URL, task);
    const { data, success, message } = response.data;
    if (data && success) return data;
    else return { error: message };
  } catch (error) {
    console.error("Error:", error);
    return { error: error?.response?.data?.message || error.message };
  }
};
export const updateTaskStatus = async (taskId, status) => {
  try {
    const response = await axios.patch(`${env.TASK_API_URL}${taskId}`, {
      status,
    });
    const { success, message } = response.data;
    if (success) return { message };
    else return { error: message };
  } catch (error) {
    console.error("Error:", error);
    return { error: error?.response?.data?.message || error.message };
  }
};
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${env.TASK_API_URL}${taskId}`);
    const { success, message } = response.data;
    if (success) return { message };
    else return { error: message };
  } catch (error) {
    console.error("Error:", error);
    return { error: error?.response?.data?.message || error.message };
  }
};
