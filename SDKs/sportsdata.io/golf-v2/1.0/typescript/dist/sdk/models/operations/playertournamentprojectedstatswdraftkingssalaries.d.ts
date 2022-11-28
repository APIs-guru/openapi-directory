import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams extends SpeakeasyBase {
    format: PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum;
    tournamentid: string;
}
export declare class PlayerTournamentProjectedStatsWDraftkingsSalariesRequest extends SpeakeasyBase {
    pathParams: PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams;
}
export declare class PlayerTournamentProjectedStatsWDraftkingsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerTournamentProjections?: any[];
    statusCode: number;
}
