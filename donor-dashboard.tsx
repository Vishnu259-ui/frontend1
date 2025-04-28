function onSubmit(data: MedicineFormValues) {
  createMedicineMutation.mutate({
    ...data,
    expiryDate: data.expiryDate.toISOString(),
    manufactureDate: data.manufactureDate.toISOString(),
  });
}
