import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlatformsListQueryParams extends SpeakeasyBase {
    ordering?: string;
    page?: number;
    pageSize?: number;
}
export declare class PlatformsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Platform[];
}
export declare class PlatformsListRequest extends SpeakeasyBase {
    queryParams: PlatformsListQueryParams;
}
export declare class PlatformsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    platformsList200ApplicationJsonObject?: PlatformsList200ApplicationJson;
}
