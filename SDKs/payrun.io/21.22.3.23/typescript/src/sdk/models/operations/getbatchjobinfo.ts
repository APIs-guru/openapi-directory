import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBatchJobInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetBatchJobInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetBatchJobInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBatchJobInfoPathParams;

  @Metadata()
  headers: GetBatchJobInfoHeaders;
}


export class GetBatchJobInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  jobInfo?: shared.JobInfo;

  @Metadata()
  statusCode: number;
}
