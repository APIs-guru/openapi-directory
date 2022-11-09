import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ShowServiceCredentialPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowServiceCredentialRequest extends SpeakeasyBase {
    pathParams: ShowServiceCredentialPathParams;
}
export declare class ShowServiceCredentialResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceCredential?: shared.ServiceCredential;
    statusCode: number;
}
