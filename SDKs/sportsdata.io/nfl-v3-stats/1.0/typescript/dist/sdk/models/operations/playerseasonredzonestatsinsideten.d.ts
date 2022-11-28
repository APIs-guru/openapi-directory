import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlayerSeasonRedZoneStatsInsideTenFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonRedZoneStatsInsideTenPathParams extends SpeakeasyBase {
    format: PlayerSeasonRedZoneStatsInsideTenFormatEnum;
    season: string;
}
export declare class PlayerSeasonRedZoneStatsInsideTenRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonRedZoneStatsInsideTenPathParams;
}
export declare class PlayerSeasonRedZoneStatsInsideTenResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonRedZones?: any[];
    statusCode: number;
}
