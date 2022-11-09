import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetCurationTagsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetCurationTagsQueryParams extends SpeakeasyBase {
    format?: GetGetCurationTagsFormatEnum;
    pwId: string;
}
export declare class GetGetCurationTagsRequest extends SpeakeasyBase {
    queryParams: GetGetCurationTagsQueryParams;
}
export declare class GetGetCurationTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
