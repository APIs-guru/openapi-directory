import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OptionalClaim } from "./optionalclaim";
import { OptionalClaim } from "./optionalclaim";
import { OptionalClaim } from "./optionalclaim";


// OptionalClaims
/** 
 * Specifying the claims to be included in the token.
**/
export class OptionalClaims extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken", elemType: shared.OptionalClaim })
  accessToken?: OptionalClaim[];

  @Metadata({ data: "json, name=idToken", elemType: shared.OptionalClaim })
  idToken?: OptionalClaim[];

  @Metadata({ data: "json, name=samlToken", elemType: shared.OptionalClaim })
  samlToken?: OptionalClaim[];
}
