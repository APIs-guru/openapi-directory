import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogTax
/** 
 * A tax applicable to an item.
**/
export class CatalogTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=applies_to_custom_amounts" })
  appliesToCustomAmounts?: boolean;

  @Metadata({ data: "json, name=calculation_phase" })
  calculationPhase?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=inclusion_type" })
  inclusionType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: string;
}
