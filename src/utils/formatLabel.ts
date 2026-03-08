const formatOptionLabel = (opt: string | number) => {
  if (typeof opt === "string") {
    return opt
      // Replace underscores with spaces
      .replace(/_/g, " ")
      // Add space before capital letters (camelCase handling)
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // Lowercase the whole string first
      .toLowerCase()
      // Capitalize each word
      .replace(/\b\w/g, (l) => l.toUpperCase());
  }
  return opt;
};

export default formatOptionLabel;
