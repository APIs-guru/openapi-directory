import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=balance" })
  balance?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;
}
