import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FantasyDefenseGameStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class FantasyDefenseGameStatsPathParams extends SpeakeasyBase {
    format: FantasyDefenseGameStatsFormatEnum;
    season: string;
    week: string;
}
export declare class FantasyDefenseGameStatsRequest extends SpeakeasyBase {
    pathParams: FantasyDefenseGameStatsPathParams;
}
export declare class FantasyDefenseGameStatsResponse extends SpeakeasyBase {
    contentType: string;
    fantasyDefenseGames?: any[];
    statusCode: number;
}
