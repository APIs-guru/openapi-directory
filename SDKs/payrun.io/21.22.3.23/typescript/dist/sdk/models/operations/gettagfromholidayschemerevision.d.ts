import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromHolidaySchemeRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    holidaySchemeId: string;
    tagId: string;
}
export declare class GetTagFromHolidaySchemeRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromHolidaySchemeRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagFromHolidaySchemeRevisionPathParams;
    headers: GetTagFromHolidaySchemeRevisionHeaders;
}
export declare class GetTagFromHolidaySchemeRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
