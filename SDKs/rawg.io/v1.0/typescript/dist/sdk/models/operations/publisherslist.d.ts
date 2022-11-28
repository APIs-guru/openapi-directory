import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishersListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class PublishersList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Publisher[];
}
export declare class PublishersListRequest extends SpeakeasyBase {
    queryParams: PublishersListQueryParams;
}
export declare class PublishersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    publishersList200ApplicationJsonObject?: PublishersList200ApplicationJson;
}
