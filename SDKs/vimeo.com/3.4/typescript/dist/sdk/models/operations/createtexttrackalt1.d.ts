import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTextTrackAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare enum CreateTextTrackAlt1RequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}
export declare class CreateTextTrackAlt1RequestBody extends SpeakeasyBase {
    active?: boolean;
    language: string;
    name: string;
    type: CreateTextTrackAlt1RequestBodyTypeEnum;
}
export declare class CreateTextTrackAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateTextTrackAlt1Request extends SpeakeasyBase {
    pathParams: CreateTextTrackAlt1PathParams;
    request: CreateTextTrackAlt1RequestBody;
    security: CreateTextTrackAlt1Security;
}
export declare class CreateTextTrackAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    textTrack?: shared.TextTrack;
}
