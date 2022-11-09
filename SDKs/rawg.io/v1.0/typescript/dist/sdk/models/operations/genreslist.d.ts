import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GenresListQueryParams extends SpeakeasyBase {
    ordering?: string;
    page?: number;
    pageSize?: number;
}
export declare class GenresListRequest extends SpeakeasyBase {
    queryParams: GenresListQueryParams;
}
export declare class GenresList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Genre[];
}
export declare class GenresListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    genresList200ApplicationJsonObject?: GenresList200ApplicationJson;
}
