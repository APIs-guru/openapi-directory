import { SpeakeasyBase } from "../../../internal/utils";
export declare class SharePostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class SharePostRequest extends SpeakeasyBase {
    pathParams: SharePostPathParams;
}
export declare class SharePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
