async function normalizeDBQuery(promise) {
  let result = {
    data: null,
    error: null,
  };

  try {
    const data = await promise;
    result.data = data;
  } catch (error) {
    result.error = error.message;
  }

  return result;
}

module.exports = normalizeDBQuery;
