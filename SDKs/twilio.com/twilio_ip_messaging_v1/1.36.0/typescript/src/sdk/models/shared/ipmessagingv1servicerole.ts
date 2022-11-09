import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleEnumRoleTypeEnum } from "./roleenumroletypeenum";


export class IpMessagingV1ServiceRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=type" })
  type?: RoleEnumRoleTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
