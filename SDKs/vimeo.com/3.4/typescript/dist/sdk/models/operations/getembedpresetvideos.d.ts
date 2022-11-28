import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmbedPresetVideosPathParams extends SpeakeasyBase {
    presetId: number;
    userId: number;
}
export declare class GetEmbedPresetVideosQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetEmbedPresetVideosRequest extends SpeakeasyBase {
    pathParams: GetEmbedPresetVideosPathParams;
    queryParams: GetEmbedPresetVideosQueryParams;
}
export declare class GetEmbedPresetVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
