import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MembershipGetSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class MembershipGetRequest extends SpeakeasyBase {
    security: MembershipGetSecurity;
}
export declare class MembershipGetResponse extends SpeakeasyBase {
    contentType: string;
    memberDtos?: shared.MemberDto[];
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
