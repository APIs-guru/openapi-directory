import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountsV1AuthTokenPromotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=auth_token" })
  authToken?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
