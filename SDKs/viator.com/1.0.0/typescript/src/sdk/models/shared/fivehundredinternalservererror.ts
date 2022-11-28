import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FiveHundredInternalServerErrorCodeEnum {
    InternalServerError = "INTERNAL_SERVER_ERROR"
}

export enum FiveHundredInternalServerErrorMessageEnum {
    InternalServerError = "Internal server error"
}


export class FiveHundredInternalServerError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: FiveHundredInternalServerErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: FiveHundredInternalServerErrorMessageEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
