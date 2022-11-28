import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDpsJobInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetDpsJobInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetDpsJobInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDpsJobInfoPathParams;

  @SpeakeasyMetadata()
  headers: GetDpsJobInfoHeaders;
}


export class GetDpsJobInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  jobInfo?: shared.JobInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
