import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalClaim } from "./optionalclaim";
/**
 * Specifying the claims to be included in the token.
**/
export declare class OptionalClaims extends SpeakeasyBase {
    accessToken?: OptionalClaim[];
    idToken?: OptionalClaim[];
    samlToken?: OptionalClaim[];
}
