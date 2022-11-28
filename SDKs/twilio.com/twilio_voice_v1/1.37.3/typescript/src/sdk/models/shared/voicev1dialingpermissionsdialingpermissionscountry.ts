import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VoiceV1DialingPermissionsDialingPermissionsCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continent" })
  continent?: string;

  @SpeakeasyMetadata({ data: "json, name=country_codes" })
  countryCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=high_risk_special_numbers_enabled" })
  highRiskSpecialNumbersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=high_risk_tollfraud_numbers_enabled" })
  highRiskTollfraudNumbersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iso_code" })
  isoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=low_risk_numbers_enabled" })
  lowRiskNumbersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
