import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodGenreByOndemandIdPathParams extends SpeakeasyBase {
    genreId: string;
    ondemandId: number;
}
export declare class GetVodGenreByOndemandIdRequest extends SpeakeasyBase {
    pathParams: GetVodGenreByOndemandIdPathParams;
}
export declare class GetVodGenreByOndemandIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandGenre?: shared.OnDemandGenre;
}
