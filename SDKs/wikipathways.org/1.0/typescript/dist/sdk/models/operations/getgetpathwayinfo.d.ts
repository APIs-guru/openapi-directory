import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetPathwayInfoFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetPathwayInfoQueryParams extends SpeakeasyBase {
    format?: GetGetPathwayInfoFormatEnum;
    pwId: string;
}
export declare class GetGetPathwayInfoRequest extends SpeakeasyBase {
    queryParams: GetGetPathwayInfoQueryParams;
}
export declare class GetGetPathwayInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
