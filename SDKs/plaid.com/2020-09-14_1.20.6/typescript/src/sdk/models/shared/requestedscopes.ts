import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountFilter } from "./accountfilter";
import { AccountSelectionCardinalityEnum } from "./accountselectioncardinalityenum";


// RequestedScopes
/** 
 * Scope of required and optional account features or content from a ConnectedApplication.
**/
export class RequestedScopes extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_filters" })
  accountFilters?: AccountFilter;

  @Metadata({ data: "json, name=account_selection_cardinality" })
  accountSelectionCardinality: AccountSelectionCardinalityEnum;

  @Metadata({ data: "json, name=optional_product_access" })
  optionalProductAccess: Map<string, any>;

  @Metadata({ data: "json, name=required_product_access" })
  requiredProductAccess: Map<string, any>;
}
