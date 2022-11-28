import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hook } from "./hook";



// HookOutput
/** 
 * Represents the output of lists hooks request.
**/
export class HookOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hooks", elemType: Hook })
  hooks?: Hook[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=signing_key" })
  signingKey?: string;
}
