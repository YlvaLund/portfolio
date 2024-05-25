export async function fetchStored(key) {
  try {
    const value = await localforage.getItem(key);
    console.log(value);
  } catch (err) {
    console.log(err);
  }
}
