import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LeaderboardFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LeaderboardPathParams extends SpeakeasyBase {
    format: LeaderboardFormatEnum;
    tournamentid: string;
}
export declare class LeaderboardRequest extends SpeakeasyBase {
    pathParams: LeaderboardPathParams;
}
export declare class LeaderboardResponse extends SpeakeasyBase {
    contentType: string;
    leaderboard?: any;
    statusCode: number;
}
