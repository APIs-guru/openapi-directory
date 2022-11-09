import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrunkEnumTransferCallerIdEnum } from "./trunkenumtransfercalleridenum";
import { TrunkEnumTransferSettingEnum } from "./trunkenumtransfersettingenum";

export enum TrunkingV1TrunkDisasterRecoveryMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class TrunkingV1Trunk extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=auth_type" })
  authType?: string;

  @Metadata({ data: "json, name=auth_type_set" })
  authTypeSet?: string[];

  @Metadata({ data: "json, name=cnam_lookup_enabled" })
  cnamLookupEnabled?: boolean;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=disaster_recovery_method" })
  disasterRecoveryMethod?: TrunkingV1TrunkDisasterRecoveryMethodEnum;

  @Metadata({ data: "json, name=disaster_recovery_url" })
  disasterRecoveryUrl?: string;

  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=recording" })
  recording?: any;

  @Metadata({ data: "json, name=secure" })
  secure?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=transfer_caller_id" })
  transferCallerId?: TrunkEnumTransferCallerIdEnum;

  @Metadata({ data: "json, name=transfer_mode" })
  transferMode?: TrunkEnumTransferSettingEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
