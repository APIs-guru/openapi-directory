import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayeeDetailsUpdateV3PathParams extends SpeakeasyBase {
    payeeId: string;
}
export declare class PayeeDetailsUpdateV3Request extends SpeakeasyBase {
    pathParams: PayeeDetailsUpdateV3PathParams;
    request: shared.UpdatePayeeDetailsRequestInput;
}
export declare class PayeeDetailsUpdateV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
