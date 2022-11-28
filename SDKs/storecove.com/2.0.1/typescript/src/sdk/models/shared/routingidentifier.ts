import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoutingIdentifier
/** 
 * An electronic routing identifier.
**/
export class RoutingIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme?: string;
}
