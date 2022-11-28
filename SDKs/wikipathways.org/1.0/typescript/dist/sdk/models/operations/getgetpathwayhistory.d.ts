import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetPathwayHistoryFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayHistoryQueryParams extends SpeakeasyBase {
    format?: GetGetPathwayHistoryFormatEnum;
    pwId: string;
    timestamp: string;
}
export declare class GetGetPathwayHistoryRequest extends SpeakeasyBase {
    queryParams: GetGetPathwayHistoryQueryParams;
}
export declare class GetGetPathwayHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
