import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InjuriesByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class InjuriesByTeamPathParams extends SpeakeasyBase {
    format: InjuriesByTeamFormatEnum;
    season: string;
    team: string;
    week: string;
}
export declare class InjuriesByTeamRequest extends SpeakeasyBase {
    pathParams: InjuriesByTeamPathParams;
}
export declare class InjuriesByTeamResponse extends SpeakeasyBase {
    contentType: string;
    injuries?: any[];
    statusCode: number;
}
