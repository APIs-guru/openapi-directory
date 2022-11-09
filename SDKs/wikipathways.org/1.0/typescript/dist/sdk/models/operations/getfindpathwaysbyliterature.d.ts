import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetFindPathwaysByLiteratureFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindPathwaysByLiteratureQueryParams extends SpeakeasyBase {
    format?: GetFindPathwaysByLiteratureFormatEnum;
    query: string;
}
export declare class GetFindPathwaysByLiteratureRequest extends SpeakeasyBase {
    queryParams: GetFindPathwaysByLiteratureQueryParams;
}
export declare class GetFindPathwaysByLiteratureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
