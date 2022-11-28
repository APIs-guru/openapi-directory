import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RegisterRealtimeApiDataRegistrationTypeEnum {
    Disabled = "Disabled",
    SingleMeterRegistration = "SingleMeterRegistration",
    UserRegistration = "UserRegistration"
}


// RegisterRealtimeApiData
/** 
 * Container class for the register realtime API API
**/
export class RegisterRealtimeApiData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiUrl, form, name=ApiUrl;" })
  apiUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=BasicAuthPassword, form, name=BasicAuthPassword;" })
  basicAuthPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=BasicAuthUsername, form, name=BasicAuthUsername;" })
  basicAuthUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MeterId, form, name=MeterId;" })
  meterId?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrationType, form, name=RegistrationType;" })
  registrationType?: RegisterRealtimeApiDataRegistrationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber?: string;
}
