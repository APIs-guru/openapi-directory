import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CompetitionFixturesLeagueDetailsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CompetitionFixturesLeagueDetailsPathParams extends SpeakeasyBase {
    competition: string;
    format: CompetitionFixturesLeagueDetailsFormatEnum;
}
export declare class CompetitionFixturesLeagueDetailsRequest extends SpeakeasyBase {
    pathParams: CompetitionFixturesLeagueDetailsPathParams;
}
export declare class CompetitionFixturesLeagueDetailsResponse extends SpeakeasyBase {
    competitionDetail?: any;
    contentType: string;
    statusCode: number;
}
