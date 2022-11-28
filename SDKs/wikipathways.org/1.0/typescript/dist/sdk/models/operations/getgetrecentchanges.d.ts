import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetRecentChangesFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetRecentChangesQueryParams extends SpeakeasyBase {
    format?: GetGetRecentChangesFormatEnum;
    timestamp: string;
}
export declare class GetGetRecentChangesRequest extends SpeakeasyBase {
    queryParams: GetGetRecentChangesQueryParams;
}
export declare class GetGetRecentChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
