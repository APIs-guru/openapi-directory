import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerTournamentStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerTournamentStatsByPlayerPathParams extends SpeakeasyBase {
    format: PlayerTournamentStatsByPlayerFormatEnum;
    playerid: string;
    tournamentid: string;
}
export declare class PlayerTournamentStatsByPlayerRequest extends SpeakeasyBase {
    pathParams: PlayerTournamentStatsByPlayerPathParams;
}
export declare class PlayerTournamentStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerTournament?: any;
    statusCode: number;
}
