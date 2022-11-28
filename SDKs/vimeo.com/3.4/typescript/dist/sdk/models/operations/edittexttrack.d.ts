import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditTextTrackPathParams extends SpeakeasyBase {
    texttrackId: number;
    videoId: number;
}
export declare enum EditTextTrackRequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}
export declare class EditTextTrackRequestBody extends SpeakeasyBase {
    active?: boolean;
    language?: string;
    name?: string;
    type?: EditTextTrackRequestBodyTypeEnum;
}
export declare class EditTextTrackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditTextTrackRequest extends SpeakeasyBase {
    pathParams: EditTextTrackPathParams;
    request?: EditTextTrackRequestBody;
    security: EditTextTrackSecurity;
}
export declare class EditTextTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    textTrack?: shared.TextTrack;
}
