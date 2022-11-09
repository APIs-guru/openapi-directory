import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedSubmission2 } from "./failedsubmission2";

export enum QueryBatchResponse2StatusEnum {
    Submitted = "SUBMITTED"
,    Accepted = "ACCEPTED"
}


export class QueryBatchResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @Metadata({ data: "json, name=failures", elemType: shared.FailedSubmission2 })
  failures?: FailedSubmission2[];

  @Metadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: QueryBatchResponse2StatusEnum;
}
