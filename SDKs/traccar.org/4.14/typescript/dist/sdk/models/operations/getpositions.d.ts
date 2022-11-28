import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPositionsQueryParams extends SpeakeasyBase {
    deviceId?: number;
    from?: Date;
    id?: number;
    to?: Date;
}
export declare class GetPositionsRequest extends SpeakeasyBase {
    queryParams: GetPositionsQueryParams;
}
export declare class GetPositionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    positions?: shared.Position[];
    statusCode: number;
}
