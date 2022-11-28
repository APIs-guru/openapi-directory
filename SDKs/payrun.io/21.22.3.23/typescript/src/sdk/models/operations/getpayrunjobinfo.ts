import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayRunJobInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetPayRunJobInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayRunJobInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayRunJobInfoPathParams;

  @SpeakeasyMetadata()
  headers: GetPayRunJobInfoHeaders;
}


export class GetPayRunJobInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  jobInfo?: shared.JobInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
