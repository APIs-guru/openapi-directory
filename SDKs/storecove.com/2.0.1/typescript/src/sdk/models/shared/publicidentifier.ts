import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicIdentifier
/** 
 * A public identifier for this customer.
**/
export class PublicIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme: string;
}
