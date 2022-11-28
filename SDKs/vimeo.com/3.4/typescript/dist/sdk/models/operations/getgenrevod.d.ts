import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenreVodPathParams extends SpeakeasyBase {
    genreId: string;
    ondemandId: number;
}
export declare class GetGenreVodRequest extends SpeakeasyBase {
    pathParams: GetGenreVodPathParams;
}
export declare class GetGenreVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPage?: shared.OnDemandPage;
}
