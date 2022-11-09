import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tax } from "./tax";
import { Tax } from "./tax";


export class AllowanceCharge extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountExcludingVat" })
  amountExcludingVat: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @Metadata({ data: "json, name=tax" })
  tax: Tax;

  @Metadata({ data: "json, name=taxes_duties_fees", elemType: shared.Tax })
  taxesDutiesFees?: Tax[];
}
