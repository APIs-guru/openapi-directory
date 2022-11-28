import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiV2010AccountSipSipIpAccessControlListSipIpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=cidr_prefix_length" })
  cidrPrefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_access_control_list_sid" })
  ipAccessControlListSid?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
