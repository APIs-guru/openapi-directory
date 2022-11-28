import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProfileImages200ApplicationJson extends SpeakeasyBase {
    image?: string;
    source?: string;
}
export declare class GetProfileImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getProfileImages200ApplicationJsonObjects?: GetProfileImages200ApplicationJson[];
}
