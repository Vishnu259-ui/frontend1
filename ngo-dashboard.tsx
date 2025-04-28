mutationFn: async (medicineId: number) => {
  const res = await apiRequest("POST", "/api/ngo/medicines", {
    medicineId,
    status: "pending",
  });
  return await res.json();
}
