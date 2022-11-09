import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllCisLineTypeTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllCisLineTypeTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllCisLineTypeTagsRequest extends SpeakeasyBase {
    pathParams: GetAllCisLineTypeTagsPathParams;
    headers: GetAllCisLineTypeTagsHeaders;
}
export declare class GetAllCisLineTypeTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
