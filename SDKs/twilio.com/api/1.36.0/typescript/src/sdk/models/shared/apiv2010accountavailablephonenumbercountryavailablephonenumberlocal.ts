import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities
/** 
 * Whether a phone number can receive calls or messages
**/
export class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=fax" })
  fax?: boolean;

  @Metadata({ data: "json, name=mms" })
  mms?: boolean;

  @Metadata({ data: "json, name=sms" })
  sms?: boolean;

  @Metadata({ data: "json, name=voice" })
  voice?: boolean;
}


export class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_requirements" })
  addressRequirements?: string;

  @Metadata({ data: "json, name=beta" })
  beta?: boolean;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocalCapabilities;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=lata" })
  lata?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=rate_center" })
  rateCenter?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
