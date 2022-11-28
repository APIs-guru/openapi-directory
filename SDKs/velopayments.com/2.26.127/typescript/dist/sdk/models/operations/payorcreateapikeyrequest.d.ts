import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayorCreateApiKeyRequestPathParams extends SpeakeasyBase {
    applicationId: string;
    payorId: string;
}
export declare class PayorCreateApiKeyRequestRequest extends SpeakeasyBase {
    pathParams: PayorCreateApiKeyRequestPathParams;
    request: shared.PayorCreateApiKeyRequest;
}
export declare class PayorCreateApiKeyRequestResponse extends SpeakeasyBase {
    contentType: string;
    payorCreateApiKeyResponse?: shared.PayorCreateApiKeyResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
