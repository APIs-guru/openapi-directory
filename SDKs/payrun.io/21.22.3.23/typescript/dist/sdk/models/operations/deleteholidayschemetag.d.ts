import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteHolidaySchemeTagPathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
    tagId: string;
}
export declare class DeleteHolidaySchemeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteHolidaySchemeTagRequest extends SpeakeasyBase {
    pathParams: DeleteHolidaySchemeTagPathParams;
    headers: DeleteHolidaySchemeTagHeaders;
}
export declare class DeleteHolidaySchemeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
