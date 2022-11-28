import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVodGenrePathParams extends SpeakeasyBase {
    genreId: string;
    ondemandId: number;
}
export declare class AddVodGenreSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVodGenreRequest extends SpeakeasyBase {
    pathParams: AddVodGenrePathParams;
    security: AddVodGenreSecurity;
}
export declare class AddVodGenreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandGenre?: shared.OnDemandGenre;
}
