import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ClientForbiddenProblemReasonEnum {
    OfficialClientForbidden = "official-client-forbidden",
    ClientNotEnrolled = "client-not-enrolled"
}
/**
 * A problem that indicates your client is forbidden from making this request.
**/
export declare class ClientForbiddenProblem extends SpeakeasyBase {
    detail: string;
    reason?: ClientForbiddenProblemReasonEnum;
    registrationUrl?: string;
    title: string;
    type: string;
}
