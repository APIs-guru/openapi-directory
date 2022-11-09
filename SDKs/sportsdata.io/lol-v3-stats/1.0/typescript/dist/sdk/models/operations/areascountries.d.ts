import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AreasCountriesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class AreasCountriesPathParams extends SpeakeasyBase {
    format: AreasCountriesFormatEnum;
}
export declare class AreasCountriesRequest extends SpeakeasyBase {
    pathParams: AreasCountriesPathParams;
}
export declare class AreasCountriesResponse extends SpeakeasyBase {
    areas?: any[];
    contentType: string;
    statusCode: number;
}
