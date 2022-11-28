import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateEndUserServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateEndUserCreateEndUserRequest extends SpeakeasyBase {
    attributes?: any;
    friendlyName: string;
    type: string;
}
export declare class CreateEndUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateEndUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateEndUserCreateEndUserRequest;
    security: CreateEndUserSecurity;
}
export declare class CreateEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1EndUser?: shared.TrusthubV1EndUser;
}
