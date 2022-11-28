import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateEndUserServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateEndUserCreateEndUserRequest extends SpeakeasyBase {
    attributes?: any;
    friendlyName: string;
    type: shared.EndUserEnumTypeEnum;
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
    numbersV2RegulatoryComplianceEndUser?: shared.NumbersV2RegulatoryComplianceEndUser;
}
