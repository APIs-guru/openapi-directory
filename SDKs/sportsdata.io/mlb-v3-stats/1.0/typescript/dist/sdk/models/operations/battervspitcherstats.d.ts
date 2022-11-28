import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BatterVsPitcherStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BatterVsPitcherStatsPathParams extends SpeakeasyBase {
    format: BatterVsPitcherStatsFormatEnum;
    hitterid: string;
    pitcherid: string;
}
export declare class BatterVsPitcherStatsRequest extends SpeakeasyBase {
    pathParams: BatterVsPitcherStatsPathParams;
}
export declare class BatterVsPitcherStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: any[];
    statusCode: number;
}
