import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NewsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class NewsPathParams extends SpeakeasyBase {
    format: NewsFormatEnum;
}
export declare class NewsRequest extends SpeakeasyBase {
    pathParams: NewsPathParams;
}
export declare class NewsResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
