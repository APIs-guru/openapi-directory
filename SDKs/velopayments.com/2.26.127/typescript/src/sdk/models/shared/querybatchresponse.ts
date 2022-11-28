import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedSubmission } from "./failedsubmission";


export enum QueryBatchResponseStatusEnum {
    Submitted = "SUBMITTED",
    Accepted = "ACCEPTED"
}


export class QueryBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @SpeakeasyMetadata({ data: "json, name=failures", elemType: FailedSubmission })
  failures?: FailedSubmission[];

  @SpeakeasyMetadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: QueryBatchResponseStatusEnum;
}
