import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetUserByOrcidFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetGetUserByOrcidQueryParams extends SpeakeasyBase {
    format?: GetGetUserByOrcidFormatEnum;
    orcid: string;
}
export declare class GetGetUserByOrcidRequest extends SpeakeasyBase {
    queryParams: GetGetUserByOrcidQueryParams;
}
export declare class GetGetUserByOrcidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
