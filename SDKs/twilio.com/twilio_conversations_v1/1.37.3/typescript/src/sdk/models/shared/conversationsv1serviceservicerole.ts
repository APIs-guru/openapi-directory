import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceRoleEnumRoleTypeEnum } from "./serviceroleenumroletypeenum";



export class ConversationsV1ServiceServiceRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ServiceRoleEnumRoleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
