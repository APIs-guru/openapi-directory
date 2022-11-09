import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection
/** 
 * A named selection for this `SELECTION`-type custom attribute definition.
**/
export class CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
