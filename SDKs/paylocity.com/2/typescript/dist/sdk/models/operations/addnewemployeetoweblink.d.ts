import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddNewEmployeeToWebLinkPathParams extends SpeakeasyBase {
    companyId: string;
}
export declare class AddNewEmployeeToWebLinkSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddNewEmployeeToWebLinkRequest extends SpeakeasyBase {
    pathParams: AddNewEmployeeToWebLinkPathParams;
    request: shared.StagedEmployee;
    security: AddNewEmployeeToWebLinkSecurity;
}
export declare class AddNewEmployeeToWebLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
    trackingNumberResponses?: shared.TrackingNumberResponse[];
}
