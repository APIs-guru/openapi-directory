import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum InjuriesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class InjuriesPathParams extends SpeakeasyBase {
    format: InjuriesFormatEnum;
}
export declare class InjuriesRequest extends SpeakeasyBase {
    pathParams: InjuriesPathParams;
}
export declare class InjuriesResponse extends SpeakeasyBase {
    contentType: string;
    injuries?: any[];
    statusCode: number;
}
