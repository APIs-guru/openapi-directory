import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExtensionCtrlGetAccountExtensionsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ExtensionCtrlGetAccountExtensionsQueryParams extends SpeakeasyBase {
    email?: string;
    locationId?: number;
    loginName?: string;
    page?: number;
    pageSize?: number;
    phoneNumber?: string;
}
export declare class ExtensionCtrlGetAccountExtensionsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExtensionCtrlGetAccountExtensionsRequest extends SpeakeasyBase {
    pathParams: ExtensionCtrlGetAccountExtensionsPathParams;
    queryParams: ExtensionCtrlGetAccountExtensionsQueryParams;
    security: ExtensionCtrlGetAccountExtensionsSecurity;
}
export declare class ExtensionCtrlGetAccountExtensionsResponse extends SpeakeasyBase {
    contentType: string;
    endUserRouteHalResponse?: shared.EndUserRouteHalResponse;
    statusCode: number;
    validationErrorsResponse?: shared.ValidationErrorsResponse;
}
