export const ageCalc = (birthdate) => {
  let birthDate = new Date(birthdate);
  let differenceInMS = Date.now() - birthDate.getTime();
  let ageDate = new Date(differenceInMS);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default ageCalc;
