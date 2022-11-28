import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllHolidaySchemeTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllHolidaySchemeTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllHolidaySchemeTagsRequest extends SpeakeasyBase {
    pathParams: GetAllHolidaySchemeTagsPathParams;
    headers: GetAllHolidaySchemeTagsHeaders;
}
export declare class GetAllHolidaySchemeTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
