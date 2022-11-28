import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBatchJobInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetBatchJobInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetBatchJobInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBatchJobInfoPathParams;

  @SpeakeasyMetadata()
  headers: GetBatchJobInfoHeaders;
}


export class GetBatchJobInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  jobInfo?: shared.JobInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
