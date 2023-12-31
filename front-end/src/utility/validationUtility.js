export function clearValidationError(setValidationError) {
  setValidationError(null);
}

export function validateForm(name, sector_names, agreed, setValidationError) {

  if (!name) {
    setValidationError("Please enter a name.");
    return false;
  }
  if (name.length < 4) {
    setValidationError("Please enter a name of at least 4 characters.");
    return false;
  }

  if (sector_names.length === 0) {
    setValidationError("Please select your sector.");
    return false;
  }

  if (!agreed) {
    setValidationError("Please agree to the terms.");
    return false;
  }

  return true;
}
