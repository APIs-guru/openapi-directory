import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllEmployerTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllEmployerTagsRequest extends SpeakeasyBase {
    headers: GetAllEmployerTagsHeaders;
}
export declare class GetAllEmployerTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
