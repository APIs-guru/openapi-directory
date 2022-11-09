import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetClientClientIdTokenKindKindEnum {
    Registration = "'registration'",
    Selfie = "'selfie'",
    Plain = "'plain'"
}
export declare class GetClientClientIdTokenKindPathParams extends SpeakeasyBase {
    clientId: string;
    kind: GetClientClientIdTokenKindKindEnum;
}
export declare class GetClientClientIdTokenKindRequest extends SpeakeasyBase {
    pathParams: GetClientClientIdTokenKindPathParams;
}
export declare class GetClientClientIdTokenKindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
