import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HooksPostActionEnum {
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe"
}
export declare enum HooksPostEventTypeEnum {
    All = "all",
    SmsMo = "sms_mo",
    Dlr = "dlr",
    VoiceStatus = "voice_status"
}
export declare enum HooksPostRequestMethodEnum {
    Post = "POST",
    Json = "JSON",
    Get = "GET"
}
export declare class HooksPostQueryParams extends SpeakeasyBase {
    action: HooksPostActionEnum;
    eventType?: HooksPostEventTypeEnum;
    id?: number;
    requestMethod?: HooksPostRequestMethodEnum;
    targetUrl?: string;
}
export declare class HooksPost200ApplicationJson extends SpeakeasyBase {
    id?: number;
    success?: boolean;
}
export declare class HooksPostRequest extends SpeakeasyBase {
    queryParams: HooksPostQueryParams;
}
export declare class HooksPostResponse extends SpeakeasyBase {
    contentType: string;
    hooksPost200ApplicationJsonObject?: HooksPost200ApplicationJson;
    statusCode: number;
}
