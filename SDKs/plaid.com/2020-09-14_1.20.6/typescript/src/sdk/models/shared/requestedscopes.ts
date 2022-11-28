import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountFilter } from "./accountfilter";
import { AccountSelectionCardinalityEnum } from "./accountselectioncardinalityenum";



// RequestedScopes
/** 
 * Scope of required and optional account features or content from a ConnectedApplication.
**/
export class RequestedScopes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_filters" })
  accountFilters?: AccountFilter;

  @SpeakeasyMetadata({ data: "json, name=account_selection_cardinality" })
  accountSelectionCardinality: AccountSelectionCardinalityEnum;

  @SpeakeasyMetadata({ data: "json, name=optional_product_access" })
  optionalProductAccess: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=required_product_access" })
  requiredProductAccess: Map<string, any>;
}
