import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FourHundredAndOneUnauthorizedCodeEnum {
    Unauthorized = "UNAUTHORIZED"
}

export enum FourHundredAndOneUnauthorizedMessageEnum {
    InvalidApiKey = "Invalid API key"
}


export class FourHundredAndOneUnauthorized extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: FourHundredAndOneUnauthorizedCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: FourHundredAndOneUnauthorizedMessageEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
