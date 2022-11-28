import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromHolidaySchemePathParams extends SpeakeasyBase {
    employerId: string;
    holidaySchemeId: string;
    tagId: string;
}
export declare class GetTagFromHolidaySchemeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromHolidaySchemeRequest extends SpeakeasyBase {
    pathParams: GetTagFromHolidaySchemePathParams;
    headers: GetTagFromHolidaySchemeHeaders;
}
export declare class GetTagFromHolidaySchemeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
