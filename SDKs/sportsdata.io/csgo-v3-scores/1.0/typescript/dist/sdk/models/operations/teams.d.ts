import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TeamsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class TeamsPathParams extends SpeakeasyBase {
    format: TeamsFormatEnum;
}
export declare class TeamsRequest extends SpeakeasyBase {
    pathParams: TeamsPathParams;
}
export declare class TeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: any[];
}
