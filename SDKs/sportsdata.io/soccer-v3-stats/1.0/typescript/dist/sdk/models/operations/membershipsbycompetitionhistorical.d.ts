import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MembershipsByCompetitionHistoricalFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsByCompetitionHistoricalPathParams extends SpeakeasyBase {
    competition: string;
    format: MembershipsByCompetitionHistoricalFormatEnum;
}
export declare class MembershipsByCompetitionHistoricalRequest extends SpeakeasyBase {
    pathParams: MembershipsByCompetitionHistoricalPathParams;
}
export declare class MembershipsByCompetitionHistoricalResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: any[];
    statusCode: number;
}
