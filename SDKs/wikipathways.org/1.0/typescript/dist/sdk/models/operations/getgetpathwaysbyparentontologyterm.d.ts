import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetPathwaysByParentOntologyTermFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwaysByParentOntologyTermQueryParams extends SpeakeasyBase {
    format?: GetGetPathwaysByParentOntologyTermFormatEnum;
    term: string;
}
export declare class GetGetPathwaysByParentOntologyTermRequest extends SpeakeasyBase {
    queryParams: GetGetPathwaysByParentOntologyTermQueryParams;
}
export declare class GetGetPathwaysByParentOntologyTermResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
