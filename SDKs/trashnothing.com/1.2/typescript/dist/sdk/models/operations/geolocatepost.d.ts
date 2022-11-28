import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GeolocatePostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class GeolocatePostRequestBody extends SpeakeasyBase {
    latitude: number;
    location?: string;
    longitude: number;
}
export declare class GeolocatePostRequest extends SpeakeasyBase {
    pathParams: GeolocatePostPathParams;
    request: GeolocatePostRequestBody;
}
export declare class GeolocatePostResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
