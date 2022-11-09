import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSaveOntologyTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetSaveOntologyTagQueryParams extends SpeakeasyBase {
    auth: string;
    format?: GetSaveOntologyTagFormatEnum;
    pwId: string;
    term: string;
    termId: string;
    user: string;
}
export declare class GetSaveOntologyTagRequest extends SpeakeasyBase {
    queryParams: GetSaveOntologyTagQueryParams;
}
export declare class GetSaveOntologyTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
