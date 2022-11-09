import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetFindPathwaysByTextFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindPathwaysByTextQueryParams extends SpeakeasyBase {
    format?: GetFindPathwaysByTextFormatEnum;
    query: string;
    species?: string;
}
export declare class GetFindPathwaysByTextRequest extends SpeakeasyBase {
    queryParams: GetFindPathwaysByTextQueryParams;
}
export declare class GetFindPathwaysByTextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
