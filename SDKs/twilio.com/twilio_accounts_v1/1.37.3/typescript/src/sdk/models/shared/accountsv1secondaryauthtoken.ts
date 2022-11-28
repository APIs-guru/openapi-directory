import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountsV1SecondaryAuthToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=secondary_auth_token" })
  secondaryAuthToken?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
