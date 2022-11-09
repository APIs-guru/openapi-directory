import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListPathwaysFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetListPathwaysQueryParams extends SpeakeasyBase {
    format?: GetListPathwaysFormatEnum;
    organism?: string;
}
export declare class GetListPathwaysRequest extends SpeakeasyBase {
    queryParams: GetListPathwaysQueryParams;
}
export declare class GetListPathwaysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
