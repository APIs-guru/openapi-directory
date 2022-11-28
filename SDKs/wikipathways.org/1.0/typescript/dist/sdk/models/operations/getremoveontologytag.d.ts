import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRemoveOntologyTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetRemoveOntologyTagQueryParams extends SpeakeasyBase {
    auth: string;
    format?: GetRemoveOntologyTagFormatEnum;
    pwId: string;
    termId: string;
    user: string;
}
export declare class GetRemoveOntologyTagRequest extends SpeakeasyBase {
    queryParams: GetRemoveOntologyTagQueryParams;
}
export declare class GetRemoveOntologyTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
