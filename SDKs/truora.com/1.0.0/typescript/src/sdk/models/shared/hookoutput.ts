import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hook } from "./hook";


// HookOutput
/** 
 * Represents the output of lists hooks request.
**/
export class HookOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=hooks", elemType: shared.Hook })
  hooks?: Hook[];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=signing_key" })
  signingKey?: string;
}
