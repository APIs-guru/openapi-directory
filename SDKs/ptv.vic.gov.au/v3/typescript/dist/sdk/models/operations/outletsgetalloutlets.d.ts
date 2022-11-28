import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OutletsGetAllOutletsQueryParams extends SpeakeasyBase {
    devid?: string;
    maxResults?: number;
    signature?: string;
    token?: string;
}
export declare class OutletsGetAllOutletsRequest extends SpeakeasyBase {
    queryParams: OutletsGetAllOutletsQueryParams;
}
export declare class OutletsGetAllOutletsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3OutletResponse?: shared.V3OutletResponse;
}
