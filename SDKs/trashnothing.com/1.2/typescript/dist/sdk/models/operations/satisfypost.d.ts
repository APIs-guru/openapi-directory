import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SatisfyPostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class SatisfyPostRequest extends SpeakeasyBase {
    pathParams: SatisfyPostPathParams;
}
export declare class SatisfyPostResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
