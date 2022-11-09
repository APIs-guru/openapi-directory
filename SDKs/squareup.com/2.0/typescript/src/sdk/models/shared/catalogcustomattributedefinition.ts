import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CatalogCustomAttributeDefinitionNumberConfig } from "./catalogcustomattributedefinitionnumberconfig";
import { CatalogCustomAttributeDefinitionSelectionConfig } from "./catalogcustomattributedefinitionselectionconfig";
import { SourceApplication } from "./sourceapplication";
import { CatalogCustomAttributeDefinitionStringConfig } from "./catalogcustomattributedefinitionstringconfig";


// CatalogCustomAttributeDefinition
/** 
 * Contains information defining a custom attribute. Custom attributes are
 * intended to store additional information about a catalog object or to associate a
 * catalog object with an entity in another system. Do not use custom attributes
 * to store any sensitive information (personally identifiable information, card details, etc.).
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
**/
export class CatalogCustomAttributeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_object_types" })
  allowedObjectTypes: string[];

  @Metadata({ data: "json, name=app_visibility" })
  appVisibility?: string;

  @Metadata({ data: "json, name=custom_attribute_usage_count" })
  customAttributeUsageCount?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=number_config" })
  numberConfig?: CatalogCustomAttributeDefinitionNumberConfig;

  @Metadata({ data: "json, name=selection_config" })
  selectionConfig?: CatalogCustomAttributeDefinitionSelectionConfig;

  @Metadata({ data: "json, name=seller_visibility" })
  sellerVisibility?: string;

  @Metadata({ data: "json, name=source_application" })
  sourceApplication?: SourceApplication;

  @Metadata({ data: "json, name=string_config" })
  stringConfig?: CatalogCustomAttributeDefinitionStringConfig;

  @Metadata({ data: "json, name=type" })
  type: string;
}
