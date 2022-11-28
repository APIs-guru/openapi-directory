import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVodGenrePathParams extends SpeakeasyBase {
    genreId: string;
    ondemandId: number;
}
export declare class DeleteVodGenreSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVodGenreRequest extends SpeakeasyBase {
    pathParams: DeleteVodGenrePathParams;
    security: DeleteVodGenreSecurity;
}
export declare class DeleteVodGenreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
