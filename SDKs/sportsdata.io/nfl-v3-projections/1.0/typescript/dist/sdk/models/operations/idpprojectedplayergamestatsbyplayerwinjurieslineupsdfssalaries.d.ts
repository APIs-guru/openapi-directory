import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    format: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;
    playerid: string;
    season: string;
    week: string;
}
export declare class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams;
}
export declare class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjection?: any;
    statusCode: number;
}
