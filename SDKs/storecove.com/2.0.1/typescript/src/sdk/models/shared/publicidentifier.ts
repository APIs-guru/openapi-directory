import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicIdentifier
/** 
 * A public identifier for this customer.
**/
export class PublicIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=scheme" })
  scheme: string;
}
