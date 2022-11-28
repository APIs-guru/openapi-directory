import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayorByIdPathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class GetPayorByIdRequest extends SpeakeasyBase {
    pathParams: GetPayorByIdPathParams;
}
export declare class GetPayorByIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payorV1?: shared.PayorV1;
    statusCode: number;
    inlineResponse403?: any;
}
