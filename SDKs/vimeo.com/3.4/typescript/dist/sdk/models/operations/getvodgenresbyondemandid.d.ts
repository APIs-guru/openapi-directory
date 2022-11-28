import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodGenresByOndemandIdPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class GetVodGenresByOndemandIdRequest extends SpeakeasyBase {
    pathParams: GetVodGenresByOndemandIdPathParams;
}
export declare class GetVodGenresByOndemandIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandGenres?: shared.OnDemandGenre[];
}
