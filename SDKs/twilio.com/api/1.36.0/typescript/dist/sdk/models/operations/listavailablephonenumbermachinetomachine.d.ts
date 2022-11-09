import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTAVAILABLEPHONENUMBERMACHINETOMACHINE_SERVERS: string[];
export declare class ListAvailablePhoneNumberMachineToMachinePathParams extends SpeakeasyBase {
    accountSid: string;
    countryCode: string;
}
export declare class ListAvailablePhoneNumberMachineToMachineQueryParams extends SpeakeasyBase {
    areaCode?: number;
    beta?: boolean;
    contains?: string;
    distance?: number;
    excludeAllAddressRequired?: boolean;
    excludeForeignAddressRequired?: boolean;
    excludeLocalAddressRequired?: boolean;
    faxEnabled?: boolean;
    inLata?: string;
    inLocality?: string;
    inPostalCode?: string;
    inRateCenter?: string;
    inRegion?: string;
    mmsEnabled?: boolean;
    nearLatLong?: string;
    nearNumber?: string;
    pageSize?: number;
    smsEnabled?: boolean;
    voiceEnabled?: boolean;
}
export declare class ListAvailablePhoneNumberMachineToMachineSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAvailablePhoneNumberMachineToMachineRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAvailablePhoneNumberMachineToMachinePathParams;
    queryParams: ListAvailablePhoneNumberMachineToMachineQueryParams;
    security: ListAvailablePhoneNumberMachineToMachineSecurity;
}
export declare class ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberMachineToMachineResponse extends SpeakeasyBase {
    contentType: string;
    listAvailablePhoneNumberMachineToMachineResponse?: ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse;
    statusCode: number;
}
