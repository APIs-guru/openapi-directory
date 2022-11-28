import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromUserPathParams extends SpeakeasyBase {
    tagId: string;
    userId: string;
}
export declare class GetTagFromUserHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromUserRequest extends SpeakeasyBase {
    pathParams: GetTagFromUserPathParams;
    headers: GetTagFromUserHeaders;
}
export declare class GetTagFromUserResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
