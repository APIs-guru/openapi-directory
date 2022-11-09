import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesStoresListPathParams extends SpeakeasyBase {
    gamePk: string;
}
export declare class GamesStoresListQueryParams extends SpeakeasyBase {
    ordering?: string;
    page?: number;
    pageSize?: number;
}
export declare class GamesStoresListRequest extends SpeakeasyBase {
    pathParams: GamesStoresListPathParams;
    queryParams: GamesStoresListQueryParams;
}
export declare class GamesStoresList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.GameStoreFull[];
}
export declare class GamesStoresListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gamesStoresList200ApplicationJsonObject?: GamesStoresList200ApplicationJson;
}
