import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromHolidaySchemePathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
}
export declare class GetTagsFromHolidaySchemeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromHolidaySchemeRequest extends SpeakeasyBase {
    pathParams: GetTagsFromHolidaySchemePathParams;
    headers: GetTagsFromHolidaySchemeHeaders;
}
export declare class GetTagsFromHolidaySchemeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
