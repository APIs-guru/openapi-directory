import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerGameRedZoneStatsInsideTenFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameRedZoneStatsInsideTenPathParams extends SpeakeasyBase {
    format: PlayerGameRedZoneStatsInsideTenFormatEnum;
    season: string;
    week: string;
}
export declare class PlayerGameRedZoneStatsInsideTenRequest extends SpeakeasyBase {
    pathParams: PlayerGameRedZoneStatsInsideTenPathParams;
}
export declare class PlayerGameRedZoneStatsInsideTenResponse extends SpeakeasyBase {
    contentType: string;
    playerGameRedZones?: any[];
    statusCode: number;
}
