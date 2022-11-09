import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams extends SpeakeasyBase {
    format: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum;
    season: string;
    week: string;
}
export declare class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest extends SpeakeasyBase {
    pathParams: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams;
}
export declare class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse extends SpeakeasyBase {
    contentType: string;
    games?: any[];
    statusCode: number;
}
