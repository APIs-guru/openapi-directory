import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayeeByIdV4PathParams extends SpeakeasyBase {
    payeeId: string;
}
export declare class GetPayeeByIdV4QueryParams extends SpeakeasyBase {
    sensitive?: boolean;
}
export declare class GetPayeeByIdV4Request extends SpeakeasyBase {
    pathParams: GetPayeeByIdV4PathParams;
    queryParams: GetPayeeByIdV4QueryParams;
}
export declare class GetPayeeByIdV4Response extends SpeakeasyBase {
    contentType: string;
    payeeDetailResponse2?: shared.PayeeDetailResponse2;
    statusCode: number;
}
