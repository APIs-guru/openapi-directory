import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoutingIdentifier
/** 
 * An electronic routing identifier.
**/
export class RoutingIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme?: string;
}
