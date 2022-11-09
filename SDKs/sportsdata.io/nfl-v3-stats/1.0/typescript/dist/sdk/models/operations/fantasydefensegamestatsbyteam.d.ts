import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FantasyDefenseGameStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class FantasyDefenseGameStatsByTeamPathParams extends SpeakeasyBase {
    format: FantasyDefenseGameStatsByTeamFormatEnum;
    season: string;
    team: string;
    week: string;
}
export declare class FantasyDefenseGameStatsByTeamRequest extends SpeakeasyBase {
    pathParams: FantasyDefenseGameStatsByTeamPathParams;
}
export declare class FantasyDefenseGameStatsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    fantasyDefenseGame?: any;
    statusCode: number;
}
