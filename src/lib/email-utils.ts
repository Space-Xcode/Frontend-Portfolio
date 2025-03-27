export const validateString = (
  value: string,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getsendMessage = (send: unknown): string => {
  let message: string;
  if (send instanceof Error) {
    message = send.message;
  } else if (send && typeof send === "object" && "message" in send) {
    message = String(send.message);
  } else if (typeof send === "string") {
    message = send;
  } else {
    message = "Something went wrong";
  }

  return message;
};
