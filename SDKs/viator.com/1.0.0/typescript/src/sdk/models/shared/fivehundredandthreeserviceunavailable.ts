import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FiveHundredAndThreeServiceUnavailableCodeEnum {
    ServiceUnavailable = "SERVICE_UNAVAILABLE"
}

export enum FiveHundredAndThreeServiceUnavailableMessageEnum {
    InternalServerError = "Internal server error"
}


export class FiveHundredAndThreeServiceUnavailable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: FiveHundredAndThreeServiceUnavailableCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: FiveHundredAndThreeServiceUnavailableMessageEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
