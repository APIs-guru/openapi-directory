import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateFleetServerList: readonly ["https://supersim.twilio.com"];
export declare enum CreateFleetCreateFleetRequestIpCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateFleetCreateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateFleetCreateFleetRequest extends SpeakeasyBase {
    dataEnabled?: boolean;
    dataLimit?: number;
    ipCommandsMethod?: CreateFleetCreateFleetRequestIpCommandsMethodEnum;
    ipCommandsUrl?: string;
    networkAccessProfile: string;
    smsCommandsEnabled?: boolean;
    smsCommandsMethod?: CreateFleetCreateFleetRequestSmsCommandsMethodEnum;
    smsCommandsUrl?: string;
    uniqueName?: string;
}
export declare class CreateFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateFleetCreateFleetRequest;
    security: CreateFleetSecurity;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1Fleet?: shared.SupersimV1Fleet;
}
