import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TeamsAllFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamsAllPathParams extends SpeakeasyBase {
    format: TeamsAllFormatEnum;
}
export declare class TeamsAllRequest extends SpeakeasyBase {
    pathParams: TeamsAllPathParams;
}
export declare class TeamsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: any[];
}
