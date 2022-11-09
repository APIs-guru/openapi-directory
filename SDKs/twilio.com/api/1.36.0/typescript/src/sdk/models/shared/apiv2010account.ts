import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountEnumStatusEnum } from "./accountenumstatusenum";
import { AccountEnumTypeEnum } from "./accountenumtypeenum";


export class ApiV2010Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_token" })
  authToken?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=owner_account_sid" })
  ownerAccountSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: AccountEnumStatusEnum;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: AccountEnumTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
