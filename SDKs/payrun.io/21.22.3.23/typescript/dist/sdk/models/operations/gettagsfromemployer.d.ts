import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetTagsFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetTagsFromEmployerPathParams;
    headers: GetTagsFromEmployerHeaders;
}
export declare class GetTagsFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
