import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedPayee2 } from "./failedpayee2";



export class FailedSubmission2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedSubmission" })
  failedSubmission?: FailedPayee2;

  @SpeakeasyMetadata({ data: "json, name=failureMessage" })
  failureMessage?: string;
}
