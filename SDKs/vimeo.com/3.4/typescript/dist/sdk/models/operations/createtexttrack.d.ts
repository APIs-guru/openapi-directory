import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTextTrackPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare enum CreateTextTrackRequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}
export declare class CreateTextTrackRequestBody extends SpeakeasyBase {
    active?: boolean;
    language: string;
    name: string;
    type: CreateTextTrackRequestBodyTypeEnum;
}
export declare class CreateTextTrackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateTextTrackRequest extends SpeakeasyBase {
    pathParams: CreateTextTrackPathParams;
    request: CreateTextTrackRequestBody;
    security: CreateTextTrackSecurity;
}
export declare class CreateTextTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    textTrack?: shared.TextTrack;
}
