import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CompetitionHierarchyLeagueHierarchyFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class CompetitionHierarchyLeagueHierarchyPathParams extends SpeakeasyBase {
    format: CompetitionHierarchyLeagueHierarchyFormatEnum;
}
export declare class CompetitionHierarchyLeagueHierarchyRequest extends SpeakeasyBase {
    pathParams: CompetitionHierarchyLeagueHierarchyPathParams;
}
export declare class CompetitionHierarchyLeagueHierarchyResponse extends SpeakeasyBase {
    areas?: any[];
    contentType: string;
    statusCode: number;
}
