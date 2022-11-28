import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FourHundredAndSixNotAcceptableCodeEnum {
    InvalidHeaderValue = "INVALID_HEADER_VALUE"
}


export class FourHundredAndSixNotAcceptable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: FourHundredAndSixNotAcceptableCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
