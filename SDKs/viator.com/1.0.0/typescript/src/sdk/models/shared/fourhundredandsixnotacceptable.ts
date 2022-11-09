import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FourHundredAndSixNotAcceptableCodeEnum {
    InvalidHeaderValue = "INVALID_HEADER_VALUE"
}


export class FourHundredAndSixNotAcceptable extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: FourHundredAndSixNotAcceptableCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
