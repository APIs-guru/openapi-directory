import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogCustomAttributeDefinitionStringConfig
/** 
 * Configuration associated with Custom Attribute Definitions of type `STRING`.
**/
export class CatalogCustomAttributeDefinitionStringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enforce_uniqueness" })
  enforceUniqueness?: boolean;
}
