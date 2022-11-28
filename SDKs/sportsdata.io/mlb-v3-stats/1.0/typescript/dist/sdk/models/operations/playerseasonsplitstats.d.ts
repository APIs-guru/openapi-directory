import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerSeasonSplitStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare enum PlayerSeasonSplitStatsSplitEnum {
    L = "L",
    R = "R",
    S = "S"
}
export declare class PlayerSeasonSplitStatsPathParams extends SpeakeasyBase {
    format: PlayerSeasonSplitStatsFormatEnum;
    season: string;
    split: PlayerSeasonSplitStatsSplitEnum;
}
export declare class PlayerSeasonSplitStatsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonSplitStatsPathParams;
}
export declare class PlayerSeasonSplitStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
