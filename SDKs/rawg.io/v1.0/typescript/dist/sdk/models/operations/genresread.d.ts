import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenresReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GenresReadRequest extends SpeakeasyBase {
    pathParams: GenresReadPathParams;
}
export declare class GenresReadResponse extends SpeakeasyBase {
    contentType: string;
    genreSingle?: shared.GenreSingle;
    statusCode: number;
}
