import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegulationEnumEndUserTypeEnum } from "./regulationenumendusertypeenum";


export class NumbersV2RegulatoryComplianceRegulation extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_user_type" })
  endUserType?: RegulationEnumEndUserTypeEnum;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;

  @Metadata({ data: "json, name=requirements" })
  requirements?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
