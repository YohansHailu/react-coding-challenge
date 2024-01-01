import axios from 'axios';
import baseUrl from '../config';


export function postUser(name, sector_names, setSubmitting) {
  setSubmitting(true);
  console.log("submitting sector -> ", sector_names);
  let userData = { name: name, sector_names: sector_names };

  axios.post(`${baseUrl}/users`, userData).then((response) => {
    console.log(response.data);
    localStorage.setItem("userId", response.data._id);
    window.location.href = "/users/" + response.data._id;
  }).catch((error) => {
    console.log(error);
    alert("Error in submitting data. Please try again.");
  }).finally(() => {
    setSubmitting(false);
  });

}

export function updateUser(name, sector_names, userId, setSubmitting) {
  setSubmitting(true);
  console.log("submitting sector -> ", sector_names);
  let userData = { name: name, sector_names: sector_names };

  axios.put(`${baseUrl}/users/${userId}`, userData).then((response) => {
    console.log(response.data);
    window.location.href = "/users/" + response.data._id;
  }).catch((error) => {
    console.log(error);
    alert("Error in submitting data. Please try again.");
  }).finally(() => {
    setSubmitting(false);
  });
}

export function deleteUser(userId, setLoading) {
  setLoading(true);
  axios.delete(`${baseUrl}/users/${userId}`).then((response) => {
    console.log(response.data);
    window.location.href = "/register";
  }).catch((error) => {
    console.log(error);
    alert("Error in deleting user. Please try again.");
    localStorage.removeItem("userId");
  }).finally(() => {
    setLoading(false);
    localStorage.clear()
    localStorage.removeItem("userId");
  });
}
