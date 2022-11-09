import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyV2Safelist extends SpeakeasyBase {
  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
