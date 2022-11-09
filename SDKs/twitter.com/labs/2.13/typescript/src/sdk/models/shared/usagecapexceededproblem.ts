import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UsageCapExceededProblemPeriodEnum {
    Daily = "Daily"
,    Monthly = "Monthly"
}

export enum UsageCapExceededProblemScopeEnum {
    Account = "Account"
,    Product = "Product"
}


// UsageCapExceededProblem
/** 
 * A problem that indicates that a usage cap has been exceeded.
**/
export class UsageCapExceededProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=period" })
  period?: UsageCapExceededProblemPeriodEnum;

  @Metadata({ data: "json, name=scope" })
  scope?: UsageCapExceededProblemScopeEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
