import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BundleEnumStatusEnum } from "./bundleenumstatusenum";


export class NumbersV2RegulatoryComplianceBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=regulation_sid" })
  regulationSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: BundleEnumStatusEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=valid_until" })
  validUntil?: Date;
}
