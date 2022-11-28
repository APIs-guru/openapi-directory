import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubmitPostRequestBody extends SpeakeasyBase {
    content?: string;
    expiresIn?: string;
    fairOffer?: number;
    groupIds?: string;
    latitude?: number;
    location: string;
    longitude?: number;
    photoIds?: string;
    preferences?: string;
    session: string;
    title: string;
    type: string;
}
export declare class SubmitPost200ApplicationJson extends SpeakeasyBase {
    identifier?: string;
    message?: string;
    preferenceKey?: string;
    result?: string;
    session?: Map<string, string>;
}
export declare class SubmitPostRequest extends SpeakeasyBase {
    request?: SubmitPostRequestBody;
}
export declare class SubmitPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    submitPost200ApplicationJsonObject?: SubmitPost200ApplicationJson;
}
