import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FantasyDefenseSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class FantasyDefenseSeasonStatsPathParams extends SpeakeasyBase {
    format: FantasyDefenseSeasonStatsFormatEnum;
    season: string;
}
export declare class FantasyDefenseSeasonStatsRequest extends SpeakeasyBase {
    pathParams: FantasyDefenseSeasonStatsPathParams;
}
export declare class FantasyDefenseSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    fantasyDefenseSeasons?: any[];
    statusCode: number;
}
