import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnpromisePostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class UnpromisePostRequest extends SpeakeasyBase {
    pathParams: UnpromisePostPathParams;
}
export declare class UnpromisePostResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
