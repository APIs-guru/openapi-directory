import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MembershipPostRequest extends SpeakeasyBase {
    request: shared.MemberDto;
}
export declare class MembershipPostResponse extends SpeakeasyBase {
    contentType: string;
    membershipPost200ApplicationJsonBoolean?: boolean;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
