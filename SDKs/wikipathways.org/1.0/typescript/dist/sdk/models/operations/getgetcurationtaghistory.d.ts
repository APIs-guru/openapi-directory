import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetCurationTagHistoryFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetCurationTagHistoryQueryParams extends SpeakeasyBase {
    format?: GetGetCurationTagHistoryFormatEnum;
    pwId: string;
    timestamp?: string;
}
export declare class GetGetCurationTagHistoryRequest extends SpeakeasyBase {
    queryParams: GetGetCurationTagHistoryQueryParams;
}
export declare class GetGetCurationTagHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
