import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFormServerList: readonly ["https://verify.twilio.com"];
export declare class FetchFormPathParams extends SpeakeasyBase {
    formType: shared.FormEnumFormTypesEnum;
}
export declare class FetchFormSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFormRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFormPathParams;
    security: FetchFormSecurity;
}
export declare class FetchFormResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2Form?: shared.VerifyV2Form;
}
