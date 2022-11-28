import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1PoolsDefaultQueryParams extends SpeakeasyBase {
    skuName: string[];
}
export declare class GetApiV1PoolsDefaultRequest extends SpeakeasyBase {
    queryParams: GetApiV1PoolsDefaultQueryParams;
}
export declare class GetApiV1PoolsDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    poolStatusResponseBodies?: shared.PoolStatusResponseBody[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
