import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountsV1SecondaryAuthToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=secondary_auth_token" })
  secondaryAuthToken?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
