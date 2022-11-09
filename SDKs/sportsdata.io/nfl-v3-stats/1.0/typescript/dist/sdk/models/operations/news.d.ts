import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class NewsPathParams extends SpeakeasyBase {
    format: string;
}
export declare class NewsRequest extends SpeakeasyBase {
    pathParams: NewsPathParams;
}
export declare class NewsResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
