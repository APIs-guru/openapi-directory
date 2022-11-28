import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tax } from "./tax";



export class AllowanceCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountExcludingVat" })
  amountExcludingVat: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax: Tax;

  @SpeakeasyMetadata({ data: "json, name=taxes_duties_fees", elemType: Tax })
  taxesDutiesFees?: Tax[];
}
