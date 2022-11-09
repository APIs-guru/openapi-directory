import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection } from "./catalogcustomattributedefinitionselectionconfigcustomattributeselection";


// CatalogCustomAttributeDefinitionSelectionConfig
/** 
 * Configuration associated with `SELECTION`-type custom attribute definitions.
**/
export class CatalogCustomAttributeDefinitionSelectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_selections", elemType: shared.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection })
  allowedSelections?: CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[];

  @Metadata({ data: "json, name=max_allowed_selections" })
  maxAllowedSelections?: number;
}
