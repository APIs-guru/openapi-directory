import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllUserTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllUserTagsRequest extends SpeakeasyBase {
    headers: GetAllUserTagsHeaders;
}
export declare class GetAllUserTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
