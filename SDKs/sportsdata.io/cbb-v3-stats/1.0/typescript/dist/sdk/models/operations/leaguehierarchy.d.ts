import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum LeagueHierarchyFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LeagueHierarchyPathParams extends SpeakeasyBase {
    format: LeagueHierarchyFormatEnum;
}
export declare class LeagueHierarchyRequest extends SpeakeasyBase {
    pathParams: LeagueHierarchyPathParams;
}
export declare class LeagueHierarchyResponse extends SpeakeasyBase {
    conferences?: any[];
    contentType: string;
    statusCode: number;
}
