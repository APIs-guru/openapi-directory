import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreatorRolesListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class CreatorRolesListRequest extends SpeakeasyBase {
    queryParams: CreatorRolesListQueryParams;
}
export declare class CreatorRolesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Position[];
}
export declare class CreatorRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    creatorRolesList200ApplicationJsonObject?: CreatorRolesList200ApplicationJson;
}
