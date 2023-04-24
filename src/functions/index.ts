import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

export const getProcedures = (setArr: any) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'text/plain');
  myHeaders.append('Authorization', 'Bearer {{bearerToken}}');
  myHeaders.append(
    'Cookie',
    'ARRAffinity=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318; ARRAffinitySameSite=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318'
  );

  const raw = JSON.stringify({
    locale: i18n.language,
    pageSize: 100,
    page: 0,
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'https://klinikya-api.azurewebsites.net/api/ReadyMadeProcedure/get-all-ready-made-procedures',
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => setArr(res?.Items))
    .catch((error) => console.log('error', error));
};

export const getBlogs = (setArr: any) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'text/plain');
  myHeaders.append('Authorization', 'Bearer {{bearerToken}}');
  myHeaders.append(
    'Cookie',
    'ARRAffinity=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318; ARRAffinitySameSite=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318'
  );

  const raw = JSON.stringify({
    locale: i18n.language,
    pageSize: 100,
    page: 0,
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'https://klinikya-new-dev.azurewebsites.net/api/Data/get-blogs',
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => setArr(res?.Items))
    .catch((error) => console.log('error', error));
};
export const getHospitals = (setArr: any) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'text/plain');
  myHeaders.append(
    'Cookie',
    'ARRAffinity=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318; ARRAffinitySameSite=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318'
  );

  const raw = JSON.stringify({
    locale: 'tr',
    pageSize: 17583011,
    page: 0,
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'https://klinikya-api.azurewebsites.net/api/HospitalAdmin/get-all-hospitals',
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => setArr(res?.Items))
    .catch((error) => console.log('error', error));
};
export const getCities = (setArr: any) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'text/plain');
  myHeaders.append(
    'Cookie',
    'ARRAffinity=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318; ARRAffinitySameSite=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318'
  );

  const raw = JSON.stringify({
    locale: 'tr',
    isActive: true,
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'https://klinikya-api.azurewebsites.net/api/Information/get-city-districts',
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => setArr(res?.Items))
    .catch((error) => console.log('error', error));
};

export const getBlog = (id: any, locale: any, setArr: any) => {
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'text/plain');
  myHeaders.append(
    'Cookie',
    'ARRAffinity=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318; ARRAffinitySameSite=280acb3c0367cac76a456a7866003bea050374037143b24243d718b2c4cd2318'
  );

  var requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch(
    `https://klinikya-api.azurewebsites.net/api/Data/get-blog?id=${id}&locale=${locale}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => setArr(res?.Item))
    .catch((error) => console.log('error', error));
};
