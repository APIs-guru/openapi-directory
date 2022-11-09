import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRemoveCurationTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetRemoveCurationTagQueryParams extends SpeakeasyBase {
    auth: string;
    format?: GetRemoveCurationTagFormatEnum;
    pwId: string;
    tagName: string;
    username: string;
}
export declare class GetRemoveCurationTagRequest extends SpeakeasyBase {
    queryParams: GetRemoveCurationTagQueryParams;
}
export declare class GetRemoveCurationTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
