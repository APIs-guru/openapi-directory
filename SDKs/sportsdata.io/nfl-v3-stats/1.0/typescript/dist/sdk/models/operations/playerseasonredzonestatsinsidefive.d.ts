import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerSeasonRedZoneStatsInsideFiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonRedZoneStatsInsideFivePathParams extends SpeakeasyBase {
    format: PlayerSeasonRedZoneStatsInsideFiveFormatEnum;
    season: string;
}
export declare class PlayerSeasonRedZoneStatsInsideFiveRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonRedZoneStatsInsideFivePathParams;
}
export declare class PlayerSeasonRedZoneStatsInsideFiveResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonRedZones?: any[];
    statusCode: number;
}
