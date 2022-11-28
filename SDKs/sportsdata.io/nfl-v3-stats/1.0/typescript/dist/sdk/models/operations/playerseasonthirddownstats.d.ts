import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerSeasonThirdDownStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonThirdDownStatsPathParams extends SpeakeasyBase {
    format: PlayerSeasonThirdDownStatsFormatEnum;
    season: string;
}
export declare class PlayerSeasonThirdDownStatsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonThirdDownStatsPathParams;
}
export declare class PlayerSeasonThirdDownStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonThirdDowns?: any[];
    statusCode: number;
}
