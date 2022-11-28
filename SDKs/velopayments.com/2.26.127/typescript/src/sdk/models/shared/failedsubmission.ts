import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedPayee } from "./failedpayee";



export class FailedSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedSubmission" })
  failedSubmission?: FailedPayee;

  @SpeakeasyMetadata({ data: "json, name=failureMessage" })
  failureMessage?: string;
}
