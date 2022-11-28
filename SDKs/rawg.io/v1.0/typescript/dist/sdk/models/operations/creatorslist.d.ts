import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatorsListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class CreatorsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Person[];
}
export declare class CreatorsListRequest extends SpeakeasyBase {
    queryParams: CreatorsListQueryParams;
}
export declare class CreatorsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    creatorsList200ApplicationJsonObject?: CreatorsList200ApplicationJson;
}
