import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FiveHundredAndThreeServiceUnavailableCodeEnum {
    ServiceUnavailable = "SERVICE_UNAVAILABLE"
}

export enum FiveHundredAndThreeServiceUnavailableMessageEnum {
    InternalServerError = "Internal server error"
}


export class FiveHundredAndThreeServiceUnavailable extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: FiveHundredAndThreeServiceUnavailableCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: FiveHundredAndThreeServiceUnavailableMessageEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
