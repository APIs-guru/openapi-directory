import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DfsSlatesByDateFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class DfsSlatesByDatePathParams extends SpeakeasyBase {
    date: string;
    format: DfsSlatesByDateFormatEnum;
}
export declare class DfsSlatesByDateRequest extends SpeakeasyBase {
    pathParams: DfsSlatesByDatePathParams;
}
export declare class DfsSlatesByDateResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlates?: any[];
    statusCode: number;
}
