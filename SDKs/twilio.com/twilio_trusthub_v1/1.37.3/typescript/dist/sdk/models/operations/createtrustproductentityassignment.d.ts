import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTrustProductEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
    trustProductSid: string;
}
export declare class CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    objectSid: string;
}
export declare class CreateTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTrustProductEntityAssignmentPathParams;
    request?: CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest;
    security: CreateTrustProductEntityAssignmentSecurity;
}
export declare class CreateTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
