import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdditionalRate
/** 
 * The additional pay rate model
**/
export class AdditionalRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeReason" })
  changeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=endCheckDate" })
  endCheckDate?: string;

  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=rateCode" })
  rateCode?: string;

  @SpeakeasyMetadata({ data: "json, name=rateNotes" })
  rateNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePer" })
  ratePer?: string;

  @SpeakeasyMetadata({ data: "json, name=shift" })
  shift?: string;
}
