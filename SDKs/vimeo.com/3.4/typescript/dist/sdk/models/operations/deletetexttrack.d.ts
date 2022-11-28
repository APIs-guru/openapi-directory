import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTextTrackPathParams extends SpeakeasyBase {
    texttrackId: number;
    videoId: number;
}
export declare class DeleteTextTrackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteTextTrackRequest extends SpeakeasyBase {
    pathParams: DeleteTextTrackPathParams;
    security: DeleteTextTrackSecurity;
}
export declare class DeleteTextTrackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
