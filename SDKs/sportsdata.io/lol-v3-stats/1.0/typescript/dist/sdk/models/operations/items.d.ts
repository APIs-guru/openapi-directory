import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItemsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ItemsPathParams extends SpeakeasyBase {
    format: ItemsFormatEnum;
}
export declare class ItemsRequest extends SpeakeasyBase {
    pathParams: ItemsPathParams;
}
export declare class ItemsResponse extends SpeakeasyBase {
    contentType: string;
    items?: any[];
    statusCode: number;
}
