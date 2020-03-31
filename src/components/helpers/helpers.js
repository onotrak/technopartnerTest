export const validateEmail = email => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

export const convertCurrency = (nominal = 0, currency) => {
  let rupiah = '';
  const nominalref = nominal
    .toString()
    .split('')
    .reverse()
    .join('');
  for (let i = 0; i < nominalref.length; i++)
    if (i % 3 === 0) rupiah += nominalref.substr(i, 3) + '.';

  if (currency) {
    return (
      currency +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  } else {
    return rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('');
  }
};

export const splitSpace = data => {
  return data.split(' ')
}
