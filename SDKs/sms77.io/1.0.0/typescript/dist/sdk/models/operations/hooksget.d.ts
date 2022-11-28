import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HooksGetActionEnum {
    Read = "read"
}
export declare class HooksGetQueryParams extends SpeakeasyBase {
    action: HooksGetActionEnum;
}
export declare class HooksGet200ApplicationJsonHooks extends SpeakeasyBase {
    created?: string;
    eventType?: string;
    id?: string;
    requestMethod?: string;
    targetUrl?: string;
}
export declare class HooksGet200ApplicationJson extends SpeakeasyBase {
    hooks?: HooksGet200ApplicationJsonHooks[];
    success?: boolean;
}
export declare class HooksGetRequest extends SpeakeasyBase {
    queryParams: HooksGetQueryParams;
}
export declare class HooksGetResponse extends SpeakeasyBase {
    contentType: string;
    hooksGet200ApplicationJsonObject?: HooksGet200ApplicationJson;
    statusCode: number;
}
