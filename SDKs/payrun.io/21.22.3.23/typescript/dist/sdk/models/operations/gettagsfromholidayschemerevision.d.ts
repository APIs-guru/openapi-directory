import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromHolidaySchemeRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    holidaySchemeId: string;
}
export declare class GetTagsFromHolidaySchemeRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromHolidaySchemeRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromHolidaySchemeRevisionPathParams;
    headers: GetTagsFromHolidaySchemeRevisionHeaders;
}
export declare class GetTagsFromHolidaySchemeRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
