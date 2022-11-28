import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVideoVersionPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare enum CreateVideoVersionRequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare class CreateVideoVersionRequestBodyUpload extends SpeakeasyBase {
    approach: CreateVideoVersionRequestBodyUploadApproachEnum;
    link?: string;
    redirectUrl?: string;
    size?: string;
}
export declare class CreateVideoVersionRequestBody extends SpeakeasyBase {
    fileName: string;
    upload: CreateVideoVersionRequestBodyUpload;
}
export declare class CreateVideoVersionRequest extends SpeakeasyBase {
    pathParams: CreateVideoVersionPathParams;
    request: CreateVideoVersionRequestBody;
}
export declare class CreateVideoVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    videoVersions?: shared.VideoVersions;
}
