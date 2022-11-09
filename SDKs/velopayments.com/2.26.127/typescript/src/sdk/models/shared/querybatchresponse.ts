import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedSubmission } from "./failedsubmission";

export enum QueryBatchResponseStatusEnum {
    Submitted = "SUBMITTED"
,    Accepted = "ACCEPTED"
}


export class QueryBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @Metadata({ data: "json, name=failures", elemType: shared.FailedSubmission })
  failures?: FailedSubmission[];

  @Metadata({ data: "json, name=pendingCount" })
  pendingCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: QueryBatchResponseStatusEnum;
}
