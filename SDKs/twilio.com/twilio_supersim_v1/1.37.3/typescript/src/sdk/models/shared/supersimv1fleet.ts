import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetEnumDataMeteringEnum } from "./fleetenumdatameteringenum";


export enum SupersimV1FleetIpCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum SupersimV1FleetSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class SupersimV1Fleet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=data_enabled" })
  dataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=data_limit" })
  dataLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=data_metering" })
  dataMetering?: FleetEnumDataMeteringEnum;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=ip_commands_method" })
  ipCommandsMethod?: SupersimV1FleetIpCommandsMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=ip_commands_url" })
  ipCommandsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=network_access_profile_sid" })
  networkAccessProfileSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_commands_enabled" })
  smsCommandsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sms_commands_method" })
  smsCommandsMethod?: SupersimV1FleetSmsCommandsMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_commands_url" })
  smsCommandsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
