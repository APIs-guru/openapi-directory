import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteHolidaySchemePathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
}
export declare class DeleteHolidaySchemeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteHolidaySchemeRequest extends SpeakeasyBase {
    pathParams: DeleteHolidaySchemePathParams;
    headers: DeleteHolidaySchemeHeaders;
}
export declare class DeleteHolidaySchemeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
