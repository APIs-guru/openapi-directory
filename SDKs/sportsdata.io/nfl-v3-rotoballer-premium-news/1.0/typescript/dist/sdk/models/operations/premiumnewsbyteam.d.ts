import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PremiumNewsByTeamFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PremiumNewsByTeamPathParams extends SpeakeasyBase {
    format: PremiumNewsByTeamFormatEnum;
    team: string;
}
export declare class PremiumNewsByTeamRequest extends SpeakeasyBase {
    pathParams: PremiumNewsByTeamPathParams;
}
export declare class PremiumNewsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
