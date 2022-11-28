import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetOntologyTermsByPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetOntologyTermsByPathwayQueryParams extends SpeakeasyBase {
    format?: GetGetOntologyTermsByPathwayFormatEnum;
    pwId: string;
}
export declare class GetGetOntologyTermsByPathwayRequest extends SpeakeasyBase {
    queryParams: GetGetOntologyTermsByPathwayQueryParams;
}
export declare class GetGetOntologyTermsByPathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
