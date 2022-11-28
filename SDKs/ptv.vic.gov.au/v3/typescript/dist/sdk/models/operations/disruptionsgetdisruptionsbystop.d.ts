import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisruptionsGetDisruptionsByStopPathParams extends SpeakeasyBase {
    stopId: number;
}
export declare enum DisruptionsGetDisruptionsByStopDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}
export declare class DisruptionsGetDisruptionsByStopQueryParams extends SpeakeasyBase {
    devid?: string;
    disruptionStatus?: DisruptionsGetDisruptionsByStopDisruptionStatusEnum;
    signature?: string;
    token?: string;
}
export declare class DisruptionsGetDisruptionsByStopRequest extends SpeakeasyBase {
    pathParams: DisruptionsGetDisruptionsByStopPathParams;
    queryParams: DisruptionsGetDisruptionsByStopQueryParams;
}
export declare class DisruptionsGetDisruptionsByStopResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DisruptionsResponse?: shared.V3DisruptionsResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
