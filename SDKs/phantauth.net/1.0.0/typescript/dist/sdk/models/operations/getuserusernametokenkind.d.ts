import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUserUsernameTokenKindKindEnum {
    Access = "'access'",
    Refresh = "'refresh'",
    Authorization = "'authorization'",
    Id = "'id'",
    Selfie = "'selfie'",
    Plain = "'plain'"
}
export declare class GetUserUsernameTokenKindPathParams extends SpeakeasyBase {
    kind: GetUserUsernameTokenKindKindEnum;
    username: string;
}
export declare class GetUserUsernameTokenKindQueryParams extends SpeakeasyBase {
    scope?: string;
}
export declare class GetUserUsernameTokenKindRequest extends SpeakeasyBase {
    pathParams: GetUserUsernameTokenKindPathParams;
    queryParams: GetUserUsernameTokenKindQueryParams;
}
export declare class GetUserUsernameTokenKindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
