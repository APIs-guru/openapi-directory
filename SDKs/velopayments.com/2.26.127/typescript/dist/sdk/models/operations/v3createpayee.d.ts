import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class V3CreatePayeeMultipartFormData extends SpeakeasyBase {
    file?: shared.CreatePayeesCsvRequest[];
    payorId?: string;
}
export declare class V3CreatePayeeRequestsInput extends SpeakeasyBase {
    createPayeesRequest?: shared.CreatePayeesRequestInput;
    object?: V3CreatePayeeMultipartFormData;
}
export declare class V3CreatePayeeRequest extends SpeakeasyBase {
    request?: V3CreatePayeeRequestsInput;
}
export declare class V3CreatePayeeResponse extends SpeakeasyBase {
    contentType: string;
    createPayeesCsvResponse?: shared.CreatePayeesCsvResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
