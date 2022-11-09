import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyV2VerificationTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=translations" })
  translations?: any;
}
