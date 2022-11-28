import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayorByIdV2PathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class GetPayorByIdV2Request extends SpeakeasyBase {
    pathParams: GetPayorByIdV2PathParams;
}
export declare class GetPayorByIdV2Response extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payorV2?: shared.PayorV2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
}
