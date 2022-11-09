import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FiveHundredInternalServerErrorCodeEnum {
    InternalServerError = "INTERNAL_SERVER_ERROR"
}

export enum FiveHundredInternalServerErrorMessageEnum {
    InternalServerError = "Internal server error"
}


export class FiveHundredInternalServerError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: FiveHundredInternalServerErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: FiveHundredInternalServerErrorMessageEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
