import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetFindInteractionsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindInteractionsQueryParams extends SpeakeasyBase {
    format?: GetFindInteractionsFormatEnum;
    query: string;
}
export declare class GetFindInteractionsRequest extends SpeakeasyBase {
    queryParams: GetFindInteractionsQueryParams;
}
export declare class GetFindInteractionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
