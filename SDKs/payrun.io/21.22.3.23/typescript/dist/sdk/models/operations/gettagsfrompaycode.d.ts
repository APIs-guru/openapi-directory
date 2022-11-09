import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromPayCodePathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
}
export declare class GetTagsFromPayCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromPayCodeRequest extends SpeakeasyBase {
    pathParams: GetTagsFromPayCodePathParams;
    headers: GetTagsFromPayCodeHeaders;
}
export declare class GetTagsFromPayCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
