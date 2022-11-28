import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetCurationTagsByNameFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetCurationTagsByNameQueryParams extends SpeakeasyBase {
    format?: GetGetCurationTagsByNameFormatEnum;
    tagName: string;
}
export declare class GetGetCurationTagsByNameRequest extends SpeakeasyBase {
    queryParams: GetGetCurationTagsByNameQueryParams;
}
export declare class GetGetCurationTagsByNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
