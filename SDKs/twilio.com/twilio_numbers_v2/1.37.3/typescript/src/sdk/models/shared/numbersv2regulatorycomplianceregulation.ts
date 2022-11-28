import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegulationEnumEndUserTypeEnum } from "./regulationenumendusertypeenum";



export class NumbersV2RegulatoryComplianceRegulation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_user_type" })
  endUserType?: RegulationEnumEndUserTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "json, name=requirements" })
  requirements?: any;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
