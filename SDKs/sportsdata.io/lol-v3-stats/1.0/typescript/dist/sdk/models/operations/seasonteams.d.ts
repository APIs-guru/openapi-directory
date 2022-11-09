import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SeasonTeamsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class SeasonTeamsPathParams extends SpeakeasyBase {
    format: SeasonTeamsFormatEnum;
    seasonid: string;
}
export declare class SeasonTeamsRequest extends SpeakeasyBase {
    pathParams: SeasonTeamsPathParams;
}
export declare class SeasonTeamsResponse extends SpeakeasyBase {
    contentType: string;
    seasonTeams?: any[];
    statusCode: number;
}
