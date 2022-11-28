import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DevelopersListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class DevelopersList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Developer[];
}
export declare class DevelopersListRequest extends SpeakeasyBase {
    queryParams: DevelopersListQueryParams;
}
export declare class DevelopersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    developersList200ApplicationJsonObject?: DevelopersList200ApplicationJson;
}
