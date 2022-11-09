import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSaveCurationTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetSaveCurationTagQueryParams extends SpeakeasyBase {
    auth: string;
    format?: GetSaveCurationTagFormatEnum;
    pwId: string;
    revision: number;
    tagName: string;
    text: string;
    username: string;
}
export declare class GetSaveCurationTagRequest extends SpeakeasyBase {
    queryParams: GetSaveCurationTagQueryParams;
}
export declare class GetSaveCurationTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
