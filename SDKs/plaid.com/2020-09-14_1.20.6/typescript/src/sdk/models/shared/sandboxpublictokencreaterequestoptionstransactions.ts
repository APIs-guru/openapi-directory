import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxPublicTokenCreateRequestOptionsTransactions
/** 
 * SandboxPublicTokenCreateRequestOptionsTransactions is an optional set of parameters corresponding to transactions options.
**/
export class SandboxPublicTokenCreateRequestOptionsTransactions extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;
}
