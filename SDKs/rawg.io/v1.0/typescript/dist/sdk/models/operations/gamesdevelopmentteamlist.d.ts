import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesDevelopmentTeamListPathParams extends SpeakeasyBase {
    gamePk: string;
}
export declare class GamesDevelopmentTeamListQueryParams extends SpeakeasyBase {
    ordering?: string;
    page?: number;
    pageSize?: number;
}
export declare class GamesDevelopmentTeamListRequest extends SpeakeasyBase {
    pathParams: GamesDevelopmentTeamListPathParams;
    queryParams: GamesDevelopmentTeamListQueryParams;
}
export declare class GamesDevelopmentTeamList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.GamePersonList[];
}
export declare class GamesDevelopmentTeamListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gamesDevelopmentTeamList200ApplicationJsonObject?: GamesDevelopmentTeamList200ApplicationJson;
}
