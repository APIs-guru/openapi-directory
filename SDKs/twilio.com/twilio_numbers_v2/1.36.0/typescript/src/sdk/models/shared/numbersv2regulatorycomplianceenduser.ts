import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndUserEnumTypeEnum } from "./enduserenumtypeenum";


export class NumbersV2RegulatoryComplianceEndUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: any;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=type" })
  type?: EndUserEnumTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
