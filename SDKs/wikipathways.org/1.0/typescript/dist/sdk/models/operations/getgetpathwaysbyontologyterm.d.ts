import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetPathwaysByOntologyTermFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwaysByOntologyTermQueryParams extends SpeakeasyBase {
    format?: GetGetPathwaysByOntologyTermFormatEnum;
    term: string;
}
export declare class GetGetPathwaysByOntologyTermRequest extends SpeakeasyBase {
    queryParams: GetGetPathwaysByOntologyTermQueryParams;
}
export declare class GetGetPathwaysByOntologyTermResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
