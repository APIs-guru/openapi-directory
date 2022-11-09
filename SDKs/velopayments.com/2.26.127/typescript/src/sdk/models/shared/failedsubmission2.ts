import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailedPayee2 } from "./failedpayee2";


export class FailedSubmission2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedSubmission" })
  failedSubmission?: FailedPayee2;

  @Metadata({ data: "json, name=failureMessage" })
  failureMessage?: string;
}
