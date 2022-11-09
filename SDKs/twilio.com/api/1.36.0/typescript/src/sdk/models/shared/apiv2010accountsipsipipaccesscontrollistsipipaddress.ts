import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountSipSipIpAccessControlListSipIpAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=cidr_prefix_length" })
  cidrPrefixLength?: number;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=ip_access_control_list_sid" })
  ipAccessControlListSid?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
