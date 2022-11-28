import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MembershipsByTeamHistoricalFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsByTeamHistoricalPathParams extends SpeakeasyBase {
    format: MembershipsByTeamHistoricalFormatEnum;
    teamid: string;
}
export declare class MembershipsByTeamHistoricalRequest extends SpeakeasyBase {
    pathParams: MembershipsByTeamHistoricalPathParams;
}
export declare class MembershipsByTeamHistoricalResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: any[];
    statusCode: number;
}
