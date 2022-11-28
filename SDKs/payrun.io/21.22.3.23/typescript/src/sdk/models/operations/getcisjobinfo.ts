import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCisJobInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetCisJobInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCisJobInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCisJobInfoPathParams;

  @SpeakeasyMetadata()
  headers: GetCisJobInfoHeaders;
}


export class GetCisJobInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  jobInfo?: shared.JobInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
