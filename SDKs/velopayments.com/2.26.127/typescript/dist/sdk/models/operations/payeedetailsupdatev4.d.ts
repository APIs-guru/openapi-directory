import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayeeDetailsUpdateV4PathParams extends SpeakeasyBase {
    payeeId: string;
}
export declare class PayeeDetailsUpdateV4Request extends SpeakeasyBase {
    pathParams: PayeeDetailsUpdateV4PathParams;
    request: shared.UpdatePayeeDetailsRequest2Input;
}
export declare class PayeeDetailsUpdateV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
