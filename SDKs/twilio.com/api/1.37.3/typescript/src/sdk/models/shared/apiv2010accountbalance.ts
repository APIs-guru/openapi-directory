import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiV2010AccountBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}
