export const required = value => {
  if (value) return undefined;
  return "Заполните поле!";
};

export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength) return `Максимум ${maxLength} символов`;
  return undefined;
};

export const maxLengthCreatorA = maxLength => value => {
  if (value.length > maxLength) return `Максимум ${maxLength} символа`;
  return undefined;
};

export const minLengthCreator = maxLength => value => {
  if (value.length < maxLength) return `Минимум ${maxLength} символа`;
  return undefined;
};

export const email = value =>
  value &&
  !/^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(
    value
  )
    ? "Неверный email адрес"
    : undefined;

export const phone = value =>
  value && !/^9\d{9}$/.test(value) ? "Неверный формат" : undefined;

export const onluLatinSymbols = value =>
  value && !/^[a-zA-Z\s]+$/.test(value)
    ? "Можно только латинские символы"
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? "Можно только цифры" : undefined;

export const normalizeInn = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  if (!previousValue || value.length > previousValue.length) {
    if (onlyNums.length === 3) {
      return onlyNums + "";
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 3) + "" + onlyNums.slice(3) + "";
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + "" + onlyNums.slice(3);
  }
  return (
    onlyNums.slice(0, 3) +
    "" +
    onlyNums.slice(3, 6) +
    "" +
    onlyNums.slice(6, 10)
  );
};

export const onlyNumber = value =>
  value && !/^(0|[0-9][0-9]{9})$/i.test(value)
    ? "Минимум 10 символов"
    : undefined;
