import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisruptionsGetDisruptionModesQueryParams extends SpeakeasyBase {
    devid?: string;
    signature?: string;
    token?: string;
}
export declare class DisruptionsGetDisruptionModesRequest extends SpeakeasyBase {
    queryParams: DisruptionsGetDisruptionModesQueryParams;
}
export declare class DisruptionsGetDisruptionModesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DisruptionModesResponse?: shared.V3DisruptionModesResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
