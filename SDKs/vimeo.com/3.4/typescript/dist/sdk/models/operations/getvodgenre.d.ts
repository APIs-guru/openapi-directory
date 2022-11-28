import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodGenrePathParams extends SpeakeasyBase {
    genreId: string;
}
export declare class GetVodGenreRequest extends SpeakeasyBase {
    pathParams: GetVodGenrePathParams;
}
export declare class GetVodGenreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandGenre?: shared.OnDemandGenre;
}
