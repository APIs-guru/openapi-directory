import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxPublicTokenCreateRequestOptionsTransactions
/** 
 * SandboxPublicTokenCreateRequestOptionsTransactions is an optional set of parameters corresponding to transactions options.
**/
export class SandboxPublicTokenCreateRequestOptionsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;
}
