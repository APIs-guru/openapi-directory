import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities
/** 
 * Whether a phone number can receive calls or messages
**/
export class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mms" })
  mms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: boolean;
}


export class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_requirements" })
  addressRequirements?: string;

  @SpeakeasyMetadata({ data: "json, name=beta" })
  beta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachineCapabilities;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=lata" })
  lata?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=rate_center" })
  rateCenter?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
