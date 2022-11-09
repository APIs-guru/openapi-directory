import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdditionalRate
/** 
 * The additional pay rate model
**/
export class AdditionalRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @Metadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @Metadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @Metadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=endCheckDate" })
  endCheckDate?: string;

  @Metadata({ data: "json, name=job" })
  job?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=rateCode" })
  rateCode?: string;

  @Metadata({ data: "json, name=rateNotes" })
  rateNotes?: string;

  @Metadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @Metadata({ data: "json, name=shift" })
  shift?: string;
}
