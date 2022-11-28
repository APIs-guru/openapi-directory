import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PromisePostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class PromisePostRequest extends SpeakeasyBase {
    pathParams: PromisePostPathParams;
}
export declare class PromisePostResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
