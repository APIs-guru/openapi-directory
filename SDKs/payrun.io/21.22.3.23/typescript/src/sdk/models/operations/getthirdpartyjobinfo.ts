import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetThirdPartyJobInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetThirdPartyJobInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetThirdPartyJobInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetThirdPartyJobInfoPathParams;

  @SpeakeasyMetadata()
  headers: GetThirdPartyJobInfoHeaders;
}


export class GetThirdPartyJobInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  jobInfo?: shared.JobInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
