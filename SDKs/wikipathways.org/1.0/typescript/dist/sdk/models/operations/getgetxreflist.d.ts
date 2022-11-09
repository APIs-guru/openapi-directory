import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetXrefListFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetXrefListQueryParams extends SpeakeasyBase {
    code: string;
    format?: GetGetXrefListFormatEnum;
    pwId: string;
}
export declare class GetGetXrefListRequest extends SpeakeasyBase {
    queryParams: GetGetXrefListQueryParams;
}
export declare class GetGetXrefListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
