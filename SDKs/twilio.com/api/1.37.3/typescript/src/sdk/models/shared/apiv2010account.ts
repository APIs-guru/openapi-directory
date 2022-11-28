import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountEnumStatusEnum } from "./accountenumstatusenum";
import { AccountEnumTypeEnum } from "./accountenumtypeenum";



export class ApiV2010Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_token" })
  authToken?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_account_sid" })
  ownerAccountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AccountEnumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
