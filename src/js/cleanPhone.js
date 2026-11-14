export default function cleanPhone(phone) {
  const digits = phone.replace(/[^\d+]/g, '');

  if (/^\+?7\d{10}$/.test(digits)) {
    return `+7${digits.slice(-10)}`;
  }

  if (/^\+\d{10,15}$/.test(digits)) {
    return digits;
  }

  if (/^8\d{10}$/.test(digits)) {
    return `+7${digits.slice(-10)}`;
  }

  return digits;
}