import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProxyV1ServicePhoneNumberCapabilities
/** 
 * The capabilities of the phone number
**/
export class ProxyV1ServicePhoneNumberCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mms" })
  mms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: boolean;
}


export class ProxyV1ServicePhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: ProxyV1ServicePhoneNumberCapabilities;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=in_use" })
  inUse?: number;

  @SpeakeasyMetadata({ data: "json, name=is_reserved" })
  isReserved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
