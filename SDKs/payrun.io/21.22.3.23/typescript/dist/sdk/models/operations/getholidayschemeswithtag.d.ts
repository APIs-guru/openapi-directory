import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHolidaySchemesWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetHolidaySchemesWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidaySchemesWithTagRequest extends SpeakeasyBase {
    pathParams: GetHolidaySchemesWithTagPathParams;
    headers: GetHolidaySchemesWithTagHeaders;
}
export declare class GetHolidaySchemesWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
