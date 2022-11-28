import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisruptionsGetDisruptionByIdPathParams extends SpeakeasyBase {
    disruptionId: number;
}
export declare class DisruptionsGetDisruptionByIdQueryParams extends SpeakeasyBase {
    devid?: string;
    signature?: string;
    token?: string;
}
export declare class DisruptionsGetDisruptionByIdRequest extends SpeakeasyBase {
    pathParams: DisruptionsGetDisruptionByIdPathParams;
    queryParams: DisruptionsGetDisruptionByIdQueryParams;
}
export declare class DisruptionsGetDisruptionByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3DisruptionResponse?: shared.V3DisruptionResponse;
    v3ErrorResponse?: shared.V3ErrorResponse;
}
