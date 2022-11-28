import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteHolidaySchemeRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    holidaySchemeId: string;
}
export declare class DeleteHolidaySchemeRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteHolidaySchemeRevisionRequest extends SpeakeasyBase {
    pathParams: DeleteHolidaySchemeRevisionPathParams;
    headers: DeleteHolidaySchemeRevisionHeaders;
}
export declare class DeleteHolidaySchemeRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
