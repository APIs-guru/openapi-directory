import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVeteranStatusSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetVeteranStatusRequest extends SpeakeasyBase {
    request: shared.VeteranStatusRequest;
    security: GetVeteranStatusSecurity;
}
export declare class GetVeteranStatusResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    authorizationError?: shared.AuthorizationError;
    contentType: string;
    statusCode: number;
    veteranStatusConfirmation?: shared.VeteranStatusConfirmation;
}
