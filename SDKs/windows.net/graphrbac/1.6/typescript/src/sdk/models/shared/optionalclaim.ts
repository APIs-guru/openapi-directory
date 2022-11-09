import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OptionalClaim
/** 
 * Specifying the claims to be included in a token.
**/
export class OptionalClaim extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProperties" })
  additionalProperties?: Map<string, any>;

  @Metadata({ data: "json, name=essential" })
  essential?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
