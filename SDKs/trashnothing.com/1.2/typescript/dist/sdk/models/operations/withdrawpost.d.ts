import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WithdrawPostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class WithdrawPostRequest extends SpeakeasyBase {
    pathParams: WithdrawPostPathParams;
}
export declare class WithdrawPostResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
