import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetPathwayAsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayAsQueryParams extends SpeakeasyBase {
    fileType: string;
    format?: GetGetPathwayAsFormatEnum;
    pwId: string;
    revision?: number;
}
export declare class GetGetPathwayAsRequest extends SpeakeasyBase {
    queryParams: GetGetPathwayAsQueryParams;
}
export declare class GetGetPathwayAsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
