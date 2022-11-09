import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromPayCodePathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
    tagId: string;
}
export declare class GetTagFromPayCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromPayCodeRequest extends SpeakeasyBase {
    pathParams: GetTagFromPayCodePathParams;
    headers: GetTagFromPayCodeHeaders;
}
export declare class GetTagFromPayCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
