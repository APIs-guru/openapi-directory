import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaxIds
/** 
 * The tax IDs that a Location is operating under.
**/
export class TaxIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=eu_vat" })
  euVat?: string;

  @Metadata({ data: "json, name=fr_naf" })
  frNaf?: string;

  @Metadata({ data: "json, name=fr_siret" })
  frSiret?: string;
}
