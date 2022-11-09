import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerGameRedZoneStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameRedZoneStatsPathParams extends SpeakeasyBase {
    format: PlayerGameRedZoneStatsFormatEnum;
    season: string;
    week: string;
}
export declare class PlayerGameRedZoneStatsRequest extends SpeakeasyBase {
    pathParams: PlayerGameRedZoneStatsPathParams;
}
export declare class PlayerGameRedZoneStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerGameRedZones?: any[];
    statusCode: number;
}
