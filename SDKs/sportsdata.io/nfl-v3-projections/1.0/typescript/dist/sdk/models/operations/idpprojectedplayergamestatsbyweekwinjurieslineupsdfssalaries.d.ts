import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    format: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;
    season: string;
    week: string;
}
export declare class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesPathParams;
}
export declare class IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
