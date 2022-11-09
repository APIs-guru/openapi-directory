import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetEnumDataMeteringEnum } from "./fleetenumdatameteringenum";

export enum SupersimV1FleetIpCommandsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum SupersimV1FleetSmsCommandsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class SupersimV1Fleet extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=data_enabled" })
  dataEnabled?: boolean;

  @Metadata({ data: "json, name=data_limit" })
  dataLimit?: number;

  @Metadata({ data: "json, name=data_metering" })
  dataMetering?: FleetEnumDataMeteringEnum;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=ip_commands_method" })
  ipCommandsMethod?: SupersimV1FleetIpCommandsMethodEnum;

  @Metadata({ data: "json, name=ip_commands_url" })
  ipCommandsUrl?: string;

  @Metadata({ data: "json, name=network_access_profile_sid" })
  networkAccessProfileSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sms_commands_enabled" })
  smsCommandsEnabled?: boolean;

  @Metadata({ data: "json, name=sms_commands_method" })
  smsCommandsMethod?: SupersimV1FleetSmsCommandsMethodEnum;

  @Metadata({ data: "json, name=sms_commands_url" })
  smsCommandsUrl?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
