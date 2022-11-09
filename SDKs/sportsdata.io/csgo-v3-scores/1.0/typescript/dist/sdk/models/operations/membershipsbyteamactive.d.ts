import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MembershipsByTeamActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsByTeamActivePathParams extends SpeakeasyBase {
    format: MembershipsByTeamActiveFormatEnum;
    teamid: string;
}
export declare class MembershipsByTeamActiveRequest extends SpeakeasyBase {
    pathParams: MembershipsByTeamActivePathParams;
}
export declare class MembershipsByTeamActiveResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: any[];
    statusCode: number;
}
