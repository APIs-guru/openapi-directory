import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogQuickAmount } from "./catalogquickamount";


// CatalogQuickAmountsSettings
/** 
 * A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.
**/
export class CatalogQuickAmountsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=amounts", elemType: shared.CatalogQuickAmount })
  amounts?: CatalogQuickAmount[];

  @Metadata({ data: "json, name=eligible_for_auto_amounts" })
  eligibleForAutoAmounts?: boolean;

  @Metadata({ data: "json, name=option" })
  option: string;
}
