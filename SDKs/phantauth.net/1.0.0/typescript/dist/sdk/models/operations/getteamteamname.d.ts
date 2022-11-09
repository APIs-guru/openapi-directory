import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTeamTeamnamePathParams extends SpeakeasyBase {
    teamname: string;
}
export declare class GetTeamTeamnameRequest extends SpeakeasyBase {
    pathParams: GetTeamTeamnamePathParams;
}
export declare class GetTeamTeamname200ApplicationJson extends SpeakeasyBase {
    atId?: string;
    logo?: string;
    logoEmail?: string;
    members?: any[];
    name?: string;
    profile?: string;
    sub: string;
}
export declare class GetTeamTeamnameResponse extends SpeakeasyBase {
    contentType: string;
    getTeamTeamname200ApplicationJsonObject?: GetTeamTeamname200ApplicationJson;
    statusCode: number;
}
