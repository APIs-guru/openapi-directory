import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetFindPathwaysByXrefFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class GetFindPathwaysByXrefQueryParams extends SpeakeasyBase {
    codes?: any[];
    format?: GetFindPathwaysByXrefFormatEnum;
    ids: any[];
}
export declare class GetFindPathwaysByXrefRequest extends SpeakeasyBase {
    queryParams: GetFindPathwaysByXrefQueryParams;
}
export declare class GetFindPathwaysByXrefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
