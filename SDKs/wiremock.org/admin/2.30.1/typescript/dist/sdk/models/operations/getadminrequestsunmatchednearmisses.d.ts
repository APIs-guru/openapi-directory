import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Map<string, any>;
    headers?: Map<string, any>;
    method?: string;
    url?: string;
}
export declare class GetAdminRequestsUnmatchedNearMisses200ApplicationJson extends SpeakeasyBase {
    nearMisses?: GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses[];
}
export declare class GetAdminRequestsUnmatchedNearMissesResponse extends SpeakeasyBase {
    contentType: string;
    getAdminRequestsUnmatchedNearMisses200ApplicationJsonObject?: GetAdminRequestsUnmatchedNearMisses200ApplicationJson;
    statusCode: number;
}
