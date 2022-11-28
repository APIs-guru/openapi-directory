import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MembershipsByCompetitionActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsByCompetitionActivePathParams extends SpeakeasyBase {
    competition: string;
    format: MembershipsByCompetitionActiveFormatEnum;
}
export declare class MembershipsByCompetitionActiveRequest extends SpeakeasyBase {
    pathParams: MembershipsByCompetitionActivePathParams;
}
export declare class MembershipsByCompetitionActiveResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: any[];
    statusCode: number;
}
