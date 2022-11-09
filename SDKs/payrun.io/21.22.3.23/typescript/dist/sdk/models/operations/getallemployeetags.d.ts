import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllEmployeeTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllEmployeeTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllEmployeeTagsRequest extends SpeakeasyBase {
    pathParams: GetAllEmployeeTagsPathParams;
    headers: GetAllEmployeeTagsHeaders;
}
export declare class GetAllEmployeeTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
