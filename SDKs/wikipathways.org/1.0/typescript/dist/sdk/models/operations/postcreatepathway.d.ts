import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreatePathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}
export declare class PostCreatePathwayQueryParams extends SpeakeasyBase {
    auth: string;
    format?: PostCreatePathwayFormatEnum;
    gpml: string;
    username: string;
}
export declare class PostCreatePathwayRequest extends SpeakeasyBase {
    queryParams: PostCreatePathwayQueryParams;
}
export declare class PostCreatePathwayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
