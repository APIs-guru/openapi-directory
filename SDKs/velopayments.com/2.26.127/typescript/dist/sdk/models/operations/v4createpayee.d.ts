import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class V4CreatePayeeMultipartFormData extends SpeakeasyBase {
    file?: shared.CreatePayeesCsvRequest2[];
    payorId?: string;
}
export declare class V4CreatePayeeRequestsInput extends SpeakeasyBase {
    createPayeesRequest2?: shared.CreatePayeesRequest2Input;
    object?: V4CreatePayeeMultipartFormData;
}
export declare class V4CreatePayeeRequest extends SpeakeasyBase {
    request?: V4CreatePayeeRequestsInput;
}
export declare class V4CreatePayeeResponse extends SpeakeasyBase {
    contentType: string;
    createPayeesCsvResponse2?: shared.CreatePayeesCsvResponse2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
