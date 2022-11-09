import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NumbersV2RegulatoryComplianceSupportingDocumentType extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: any[];

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=machine_name" })
  machineName?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
