import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExtensionCtrlGetAccountExtensionByIdPathParams extends SpeakeasyBase {
    accountId: string;
    extensionNumber: number;
}
export declare class ExtensionCtrlGetAccountExtensionByIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExtensionCtrlGetAccountExtensionByIdRequest extends SpeakeasyBase {
    pathParams: ExtensionCtrlGetAccountExtensionByIdPathParams;
    security: ExtensionCtrlGetAccountExtensionByIdSecurity;
}
export declare class ExtensionCtrlGetAccountExtensionByIdResponse extends SpeakeasyBase {
    contentType: string;
    endUserRouteHalResponse?: shared.EndUserRouteHalResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
