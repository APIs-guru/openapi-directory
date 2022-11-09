import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesAdditionsListPathParams extends SpeakeasyBase {
    gamePk: string;
}
export declare class GamesAdditionsListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GamesAdditionsListRequest extends SpeakeasyBase {
    pathParams: GamesAdditionsListPathParams;
    queryParams: GamesAdditionsListQueryParams;
}
export declare class GamesAdditionsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Game[];
}
export declare class GamesAdditionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gamesAdditionsList200ApplicationJsonObject?: GamesAdditionsList200ApplicationJson;
}
