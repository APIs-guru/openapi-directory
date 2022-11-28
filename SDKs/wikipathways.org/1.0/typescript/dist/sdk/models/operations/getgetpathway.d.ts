import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayQueryParams extends SpeakeasyBase {
    format?: GetGetPathwayFormatEnum;
    pwId: string;
    revision?: number;
}
export declare class GetGetPathwayRequest extends SpeakeasyBase {
    queryParams: GetGetPathwayQueryParams;
}
export declare class GetGetPathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
