import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlatformsListsParentsListQueryParams extends SpeakeasyBase {
    ordering?: string;
    page?: number;
    pageSize?: number;
}
export declare class PlatformsListsParentsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PlatformParentSingle[];
}
export declare class PlatformsListsParentsListRequest extends SpeakeasyBase {
    queryParams: PlatformsListsParentsListQueryParams;
}
export declare class PlatformsListsParentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    platformsListsParentsList200ApplicationJsonObject?: PlatformsListsParentsList200ApplicationJson;
}
