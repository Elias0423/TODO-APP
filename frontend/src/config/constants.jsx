export const INPUT_STYLE = "w-full px-3 py-2 border border-gray-300 rounded";

export const env = {
  TASK_API_URL:
    import.meta.env.VITE_TASK_API_URL || "http://localhost:3001/api/tasks/",
};
