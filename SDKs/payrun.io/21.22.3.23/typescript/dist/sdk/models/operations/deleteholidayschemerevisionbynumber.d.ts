import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteHolidaySchemeRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
    revisionNumber: string;
}
export declare class DeleteHolidaySchemeRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteHolidaySchemeRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: DeleteHolidaySchemeRevisionByNumberPathParams;
    headers: DeleteHolidaySchemeRevisionByNumberHeaders;
}
export declare class DeleteHolidaySchemeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
