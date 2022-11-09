import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RegisterRealtimeApiDataRegistrationTypeEnum {
    Disabled = "Disabled"
,    SingleMeterRegistration = "SingleMeterRegistration"
,    UserRegistration = "UserRegistration"
}


// RegisterRealtimeApiData
/** 
 * Container class for the register realtime API API
**/
export class RegisterRealtimeApiData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiUrl, form, name=ApiUrl;" })
  apiUrl?: string;

  @Metadata({ data: "json, name=BasicAuthPassword, form, name=BasicAuthPassword;" })
  basicAuthPassword?: string;

  @Metadata({ data: "json, name=BasicAuthUsername, form, name=BasicAuthUsername;" })
  basicAuthUsername?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=MeterId, form, name=MeterId;" })
  meterId?: string;

  @Metadata({ data: "json, name=RegistrationType, form, name=RegistrationType;" })
  registrationType?: RegisterRealtimeApiDataRegistrationTypeEnum;

  @Metadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber?: string;
}
