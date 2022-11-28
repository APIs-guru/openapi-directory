import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChangelogsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetChangelogsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetChangelogsRequest extends SpeakeasyBase {
    queryParams: GetChangelogsQueryParams;
    security: GetChangelogsSecurity;
}
export declare class GetChangelogsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
