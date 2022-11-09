import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailedPayee } from "./failedpayee";


export class FailedSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedSubmission" })
  failedSubmission?: FailedPayee;

  @Metadata({ data: "json, name=failureMessage" })
  failureMessage?: string;
}
