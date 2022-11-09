import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetColoredPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetColoredPathwayQueryParams extends SpeakeasyBase {
    color: any[];
    fileType: string;
    format?: GetGetColoredPathwayFormatEnum;
    graphId: any[];
    pwId: string;
    revision: string;
}
export declare class GetGetColoredPathwayRequest extends SpeakeasyBase {
    queryParams: GetGetColoredPathwayQueryParams;
}
export declare class GetGetColoredPathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
