import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RegisterRealtimeApiDataRegistrationTypeEnum {
    Disabled = "Disabled",
    SingleMeterRegistration = "SingleMeterRegistration",
    UserRegistration = "UserRegistration"
}
/**
 * Container class for the register realtime API API
**/
export declare class RegisterRealtimeApiData extends SpeakeasyBase {
    apiUrl?: string;
    basicAuthPassword?: string;
    basicAuthUsername?: string;
    id?: string;
    meterId?: string;
    registrationType?: RegisterRealtimeApiDataRegistrationTypeEnum;
    serialNumber?: string;
}
