function OurFetch(...a) {
  return fetch(...a).then((response) => {
    return response.json().then((data) => {
      if (response.ok) return data;
      else {
        throw new Error(data);
      }
    });
  });
}

export default OurFetch;