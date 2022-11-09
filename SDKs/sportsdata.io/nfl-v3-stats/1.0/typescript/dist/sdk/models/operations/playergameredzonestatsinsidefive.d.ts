import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlayerGameRedZoneStatsInsideFiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameRedZoneStatsInsideFivePathParams extends SpeakeasyBase {
    format: PlayerGameRedZoneStatsInsideFiveFormatEnum;
    season: string;
    week: string;
}
export declare class PlayerGameRedZoneStatsInsideFiveRequest extends SpeakeasyBase {
    pathParams: PlayerGameRedZoneStatsInsideFivePathParams;
}
export declare class PlayerGameRedZoneStatsInsideFiveResponse extends SpeakeasyBase {
    contentType: string;
    playerGameRedZones?: any[];
    statusCode: number;
}
