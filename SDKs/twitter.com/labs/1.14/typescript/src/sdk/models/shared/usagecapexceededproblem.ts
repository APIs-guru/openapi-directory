import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UsageCapExceededProblemPeriodEnum {
    Daily = "Daily",
    Monthly = "Monthly"
}

export enum UsageCapExceededProblemScopeEnum {
    Account = "Account",
    Product = "Product"
}


// UsageCapExceededProblem
/** 
 * A problem that indicates that a usage cap has been exceeded.
**/
export class UsageCapExceededProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: UsageCapExceededProblemPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: UsageCapExceededProblemScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
