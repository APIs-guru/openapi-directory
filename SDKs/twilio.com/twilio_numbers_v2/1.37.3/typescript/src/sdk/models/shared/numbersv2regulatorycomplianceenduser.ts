import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndUserEnumTypeEnum } from "./enduserenumtypeenum";



export class NumbersV2RegulatoryComplianceEndUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: any;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EndUserEnumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
