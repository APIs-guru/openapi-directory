import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdatePathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetUpdatePathwayQueryParams extends SpeakeasyBase {
    auth: string;
    description: string;
    format?: GetUpdatePathwayFormatEnum;
    gpml: string;
    pwId: string;
    revision: number;
    username: string;
}
export declare class GetUpdatePathwayRequest extends SpeakeasyBase {
    queryParams: GetUpdatePathwayQueryParams;
}
export declare class GetUpdatePathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
