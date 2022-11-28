import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeeByIdV3PathParams extends SpeakeasyBase {
    payeeId: string;
}
export declare class GetPayeeByIdV3QueryParams extends SpeakeasyBase {
    sensitive?: boolean;
}
export declare class GetPayeeByIdV3Request extends SpeakeasyBase {
    pathParams: GetPayeeByIdV3PathParams;
    queryParams: GetPayeeByIdV3QueryParams;
}
export declare class GetPayeeByIdV3Response extends SpeakeasyBase {
    contentType: string;
    payeeDetailResponse?: shared.PayeeDetailResponse;
    statusCode: number;
}
