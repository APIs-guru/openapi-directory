import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NewsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class NewsByTeamPathParams extends SpeakeasyBase {
    format: NewsByTeamFormatEnum;
    team: string;
}
export declare class NewsByTeamRequest extends SpeakeasyBase {
    pathParams: NewsByTeamPathParams;
}
export declare class NewsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
