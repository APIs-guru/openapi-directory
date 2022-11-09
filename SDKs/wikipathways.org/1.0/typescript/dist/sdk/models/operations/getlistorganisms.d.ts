import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListOrganismsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetListOrganismsQueryParams extends SpeakeasyBase {
    format?: GetListOrganismsFormatEnum;
}
export declare class GetListOrganismsRequest extends SpeakeasyBase {
    queryParams: GetListOrganismsQueryParams;
}
export declare class GetListOrganismsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
