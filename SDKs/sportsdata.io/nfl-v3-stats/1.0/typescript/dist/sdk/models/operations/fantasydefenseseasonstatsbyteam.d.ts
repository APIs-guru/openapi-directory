import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FantasyDefenseSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class FantasyDefenseSeasonStatsByTeamPathParams extends SpeakeasyBase {
    format: FantasyDefenseSeasonStatsByTeamFormatEnum;
    season: string;
    team: string;
}
export declare class FantasyDefenseSeasonStatsByTeamRequest extends SpeakeasyBase {
    pathParams: FantasyDefenseSeasonStatsByTeamPathParams;
}
export declare class FantasyDefenseSeasonStatsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    fantasyDefenseSeason?: any;
    statusCode: number;
}
