import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StoresListQueryParams extends SpeakeasyBase {
    ordering?: string;
    page?: number;
    pageSize?: number;
}
export declare class StoresListRequest extends SpeakeasyBase {
    queryParams: StoresListQueryParams;
}
export declare class StoresList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Store[];
}
export declare class StoresListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storesList200ApplicationJsonObject?: StoresList200ApplicationJson;
}
