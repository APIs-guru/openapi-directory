import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VoiceV1DialingPermissionsDialingPermissionsCountryInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=continent" })
  continent?: string;

  @Metadata({ data: "json, name=country_codes" })
  countryCodes?: string[];

  @Metadata({ data: "json, name=high_risk_special_numbers_enabled" })
  highRiskSpecialNumbersEnabled?: boolean;

  @Metadata({ data: "json, name=high_risk_tollfraud_numbers_enabled" })
  highRiskTollfraudNumbersEnabled?: boolean;

  @Metadata({ data: "json, name=iso_code" })
  isoCode?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=low_risk_numbers_enabled" })
  lowRiskNumbersEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
