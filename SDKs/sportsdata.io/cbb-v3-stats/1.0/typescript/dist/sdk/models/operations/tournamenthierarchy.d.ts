import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TournamentHierarchyFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TournamentHierarchyPathParams extends SpeakeasyBase {
    format: TournamentHierarchyFormatEnum;
    season: string;
}
export declare class TournamentHierarchyRequest extends SpeakeasyBase {
    pathParams: TournamentHierarchyPathParams;
}
export declare class TournamentHierarchyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tournament?: any;
}
