import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FourHundredAndOneUnauthorizedCodeEnum {
    Unauthorized = "UNAUTHORIZED"
}

export enum FourHundredAndOneUnauthorizedMessageEnum {
    InvalidApiKey = "Invalid API key"
}


export class FourHundredAndOneUnauthorized extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: FourHundredAndOneUnauthorizedCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: FourHundredAndOneUnauthorizedMessageEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
