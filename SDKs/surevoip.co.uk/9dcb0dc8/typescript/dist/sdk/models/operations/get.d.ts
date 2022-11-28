import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetContentTypeEnum {
    ApplicationJson = "application/json",
    TextHtml = "text/html",
    TextXml = "text/xml",
    ApplicationXml = "application/xml"
}
export declare enum GetHypermediaEnum {
    Yes = "yes",
    No = "no"
}
export declare class GetQueryParams extends SpeakeasyBase {
    contentType?: GetContentTypeEnum;
    hypermedia?: GetHypermediaEnum;
}
export declare enum Get200ApplicationJsonStatusEnum {
    Ok = "OK"
}
export declare class Get200ApplicationJson extends SpeakeasyBase {
    status?: Get200ApplicationJsonStatusEnum;
}
export declare class GetRequest extends SpeakeasyBase {
    queryParams: GetQueryParams;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    get200ApplicationJsonObject?: Get200ApplicationJson;
    statusCode: number;
}
