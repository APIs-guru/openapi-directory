import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionalClaim
/** 
 * Specifying the claims to be included in a token.
**/
export class OptionalClaim extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProperties" })
  additionalProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=essential" })
  essential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
