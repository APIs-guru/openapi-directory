import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerSeasonRedZoneStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonRedZoneStatsPathParams extends SpeakeasyBase {
    format: PlayerSeasonRedZoneStatsFormatEnum;
    season: string;
}
export declare class PlayerSeasonRedZoneStatsRequest extends SpeakeasyBase {
    pathParams: PlayerSeasonRedZoneStatsPathParams;
}
export declare class PlayerSeasonRedZoneStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonRedZones?: any[];
    statusCode: number;
}
