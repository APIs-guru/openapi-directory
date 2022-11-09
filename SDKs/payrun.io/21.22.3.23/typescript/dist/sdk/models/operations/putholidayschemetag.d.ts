import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutHolidaySchemeTagPathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
    tagId: string;
}
export declare class PutHolidaySchemeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutHolidaySchemeTagRequest extends SpeakeasyBase {
    pathParams: PutHolidaySchemeTagPathParams;
    headers: PutHolidaySchemeTagHeaders;
}
export declare class PutHolidaySchemeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
