import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyV2Safelist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
