import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ShowServiceCredentialTypePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowServiceCredentialTypeRequest extends SpeakeasyBase {
    pathParams: ShowServiceCredentialTypePathParams;
}
export declare class ShowServiceCredentialTypeResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    serviceCredentialType?: shared.ServiceCredentialType;
    statusCode: number;
}
