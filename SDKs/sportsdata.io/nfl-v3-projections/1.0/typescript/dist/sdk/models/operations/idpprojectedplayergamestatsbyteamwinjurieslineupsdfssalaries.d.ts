import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
    format: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;
    season: string;
    team: string;
    week: string;
}
export declare class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
    pathParams: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams;
}
export declare class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: any[];
    statusCode: number;
}
