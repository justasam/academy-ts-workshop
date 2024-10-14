export enum ResponseCode {
  Success = 0,
  NoResults = 1,
  InvalidParameter = 2,
  TokenNotFound = 3,
  TokenEmpty = 4,
  RateLimit = 5,
}

export const ERROR_MESSAGES: Record<ResponseCode, string> = {
  [ResponseCode.Success]: "",
  [ResponseCode.NoResults]: "No results found",
  [ResponseCode.InvalidParameter]: "Invalid parameter",
  [ResponseCode.TokenNotFound]: "Token not found",
  [ResponseCode.TokenEmpty]: "Token is empty",
  [ResponseCode.RateLimit]: "Rate limit exceeded",
};
