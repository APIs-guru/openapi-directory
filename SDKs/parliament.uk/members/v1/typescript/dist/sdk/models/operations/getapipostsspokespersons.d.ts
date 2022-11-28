import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPostsSpokespersonsQueryParams extends SpeakeasyBase {
    partyId?: number;
}
export declare class GetApiPostsSpokespersonsRequest extends SpeakeasyBase {
    queryParams: GetApiPostsSpokespersonsQueryParams;
}
export declare class GetApiPostsSpokespersonsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];
    statusCode: number;
}
