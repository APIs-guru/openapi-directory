import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class UpdatePostRequestBody extends SpeakeasyBase {
    content?: string;
    expiresIn?: string;
    fairOffer?: number;
    latitude?: number;
    location: string;
    longitude?: number;
    photoIds?: string;
    preferences?: string;
    session: string;
    title: string;
    type: string;
}
export declare class UpdatePost200ApplicationJson extends SpeakeasyBase {
    identifier?: string;
    message?: string;
    preferenceKey?: string;
    result?: string;
    session?: Map<string, string>;
}
export declare class UpdatePostRequest extends SpeakeasyBase {
    pathParams: UpdatePostPathParams;
    request: UpdatePostRequestBody;
}
export declare class UpdatePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatePost200ApplicationJsonObject?: UpdatePost200ApplicationJson;
}
