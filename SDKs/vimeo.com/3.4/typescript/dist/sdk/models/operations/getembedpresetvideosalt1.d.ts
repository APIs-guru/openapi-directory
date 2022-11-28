import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmbedPresetVideosAlt1PathParams extends SpeakeasyBase {
    presetId: number;
}
export declare class GetEmbedPresetVideosAlt1QueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetEmbedPresetVideosAlt1Request extends SpeakeasyBase {
    pathParams: GetEmbedPresetVideosAlt1PathParams;
    queryParams: GetEmbedPresetVideosAlt1QueryParams;
}
export declare class GetEmbedPresetVideosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
