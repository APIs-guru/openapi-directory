import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutUsersIdRequestBody extends SpeakeasyBase {
    alwaysShowBaseCurrency?: boolean;
    baseCurrencyCode?: string;
    betaUser?: boolean;
    email?: string;
    name?: string;
    timeZone?: string;
    weekStartDay?: number;
}
export declare class PutUsersIdRequest extends SpeakeasyBase {
    pathParams: PutUsersIdPathParams;
    request?: PutUsersIdRequestBody;
}
export declare class PutUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    user?: shared.User;
}
