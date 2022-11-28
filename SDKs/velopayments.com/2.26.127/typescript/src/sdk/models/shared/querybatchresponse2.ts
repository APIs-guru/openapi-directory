import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedSubmission2 } from "./failedsubmission2";


export enum QueryBatchResponse2StatusEnum {
    Submitted = "SUBMITTED",
    Accepted = "ACCEPTED"
}


export class QueryBatchResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @SpeakeasyMetadata({ data: "json, name=failures", elemType: FailedSubmission2 })
  failures?: FailedSubmission2[];

  @SpeakeasyMetadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: QueryBatchResponse2StatusEnum;
}
