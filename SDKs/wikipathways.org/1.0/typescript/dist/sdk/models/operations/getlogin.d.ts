import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetLoginFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetLoginQueryParams extends SpeakeasyBase {
    format?: GetLoginFormatEnum;
    name: string;
    pass: string;
}
export declare class GetLoginRequest extends SpeakeasyBase {
    queryParams: GetLoginQueryParams;
}
export declare class GetLoginResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
