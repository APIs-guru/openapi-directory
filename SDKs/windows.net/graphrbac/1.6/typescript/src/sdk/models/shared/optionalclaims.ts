import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalClaim } from "./optionalclaim";



// OptionalClaims
/** 
 * Specifying the claims to be included in the token.
**/
export class OptionalClaims extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken", elemType: OptionalClaim })
  accessToken?: OptionalClaim[];

  @SpeakeasyMetadata({ data: "json, name=idToken", elemType: OptionalClaim })
  idToken?: OptionalClaim[];

  @SpeakeasyMetadata({ data: "json, name=samlToken", elemType: OptionalClaim })
  samlToken?: OptionalClaim[];
}
