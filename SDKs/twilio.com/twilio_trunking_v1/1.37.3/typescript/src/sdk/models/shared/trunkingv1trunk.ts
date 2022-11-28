import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrunkEnumTransferCallerIdEnum } from "./trunkenumtransfercalleridenum";
import { TrunkEnumTransferSettingEnum } from "./trunkenumtransfersettingenum";


export enum TrunkingV1TrunkDisasterRecoveryMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class TrunkingV1Trunk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_type_set" })
  authTypeSet?: string[];

  @SpeakeasyMetadata({ data: "json, name=cnam_lookup_enabled" })
  cnamLookupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=disaster_recovery_method" })
  disasterRecoveryMethod?: TrunkingV1TrunkDisasterRecoveryMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=disaster_recovery_url" })
  disasterRecoveryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: any;

  @SpeakeasyMetadata({ data: "json, name=secure" })
  secure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_caller_id" })
  transferCallerId?: TrunkEnumTransferCallerIdEnum;

  @SpeakeasyMetadata({ data: "json, name=transfer_mode" })
  transferMode?: TrunkEnumTransferSettingEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
