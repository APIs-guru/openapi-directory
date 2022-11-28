import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisruptionsGetAllDisruptionsDisruptionStatusEnum {
    Current = "current",
    Planned = "planned"
}
export declare class DisruptionsGetAllDisruptionsQueryParams extends SpeakeasyBase {
    devid?: string;
    disruptionModes?: number[];
    disruptionStatus?: DisruptionsGetAllDisruptionsDisruptionStatusEnum;
    routeTypes?: number[];
    signature?: string;
    token?: string;
}
export declare class DisruptionsGetAllDisruptionsRequest extends SpeakeasyBase {
    queryParams: DisruptionsGetAllDisruptionsQueryParams;
}
export declare class DisruptionsGetAllDisruptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DisruptionsResponse?: shared.V3DisruptionsResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
