import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyV2VerificationTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string[];

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=translations" })
  translations?: any;
}
