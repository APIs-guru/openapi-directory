import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpcomingDfsSlatesByCompetitionFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class UpcomingDfsSlatesByCompetitionPathParams extends SpeakeasyBase {
    competitionId: string;
    format: UpcomingDfsSlatesByCompetitionFormatEnum;
}
export declare class UpcomingDfsSlatesByCompetitionRequest extends SpeakeasyBase {
    pathParams: UpcomingDfsSlatesByCompetitionPathParams;
}
export declare class UpcomingDfsSlatesByCompetitionResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlates?: any[];
    statusCode: number;
}
