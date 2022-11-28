import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams extends SpeakeasyBase {
    format: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum;
    season: string;
}
export declare class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest extends SpeakeasyBase {
    pathParams: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams;
}
export declare class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
