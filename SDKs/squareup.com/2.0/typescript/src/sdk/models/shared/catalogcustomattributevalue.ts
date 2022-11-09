import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogCustomAttributeValue
/** 
 * An instance of a custom attribute. Custom attributes can be defined and
 * added to `ITEM` and `ITEM_VARIATION` type catalog objects.
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).
**/
export class CatalogCustomAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolean_value" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=custom_attribute_definition_id" })
  customAttributeDefinitionId?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number_value" })
  numberValue?: string;

  @Metadata({ data: "json, name=selection_uid_values" })
  selectionUidValues?: string[];

  @Metadata({ data: "json, name=string_value" })
  stringValue?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
