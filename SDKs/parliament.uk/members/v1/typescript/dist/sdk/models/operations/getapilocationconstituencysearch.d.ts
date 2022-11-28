import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencySearchQueryParams extends SpeakeasyBase {
    searchText?: string;
    skip?: number;
    take?: number;
}
export declare class GetApiLocationConstituencySearchRequest extends SpeakeasyBase {
    queryParams: GetApiLocationConstituencySearchQueryParams;
}
export declare class GetApiLocationConstituencySearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    constituencyMembersServiceSearchResult?: shared.ConstituencyMembersServiceSearchResult;
    contentType: string;
    statusCode: number;
}
