import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// CatalogQuickAmount
/** 
 * Represents a Quick Amount in the Catalog.
**/
export class CatalogQuickAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: Money;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
