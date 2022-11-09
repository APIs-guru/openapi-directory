import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEFLEET_SERVERS: string[];
export declare class UpdateFleetPathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateFleetUpdateFleetRequestIpCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateFleetUpdateFleetRequest extends SpeakeasyBase {
    dataLimit?: number;
    ipCommandsMethod?: UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;
    ipCommandsUrl?: string;
    networkAccessProfile?: string;
    smsCommandsMethod?: UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;
    smsCommandsUrl?: string;
    uniqueName?: string;
}
export declare class UpdateFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFleetPathParams;
    request?: UpdateFleetUpdateFleetRequest;
    security: UpdateFleetSecurity;
}
export declare class UpdateFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1Fleet?: shared.SupersimV1Fleet;
}
