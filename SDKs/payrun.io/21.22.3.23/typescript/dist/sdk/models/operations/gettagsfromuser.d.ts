import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetTagsFromUserHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromUserRequest extends SpeakeasyBase {
    pathParams: GetTagsFromUserPathParams;
    headers: GetTagsFromUserHeaders;
}
export declare class GetTagsFromUserResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
