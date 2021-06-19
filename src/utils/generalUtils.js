const re = /(?:\.([^.]+))?$/;

export const fileExtensionFromString = (string_) => re.exec(string_)[0];
