import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesMoviesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GamesMoviesReadRequest extends SpeakeasyBase {
    pathParams: GamesMoviesReadPathParams;
}
export declare class GamesMoviesReadResponse extends SpeakeasyBase {
    contentType: string;
    movie?: shared.Movie;
    statusCode: number;
}
