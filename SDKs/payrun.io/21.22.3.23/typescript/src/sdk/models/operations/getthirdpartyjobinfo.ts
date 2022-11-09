import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetThirdPartyJobInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetThirdPartyJobInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetThirdPartyJobInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetThirdPartyJobInfoPathParams;

  @Metadata()
  headers: GetThirdPartyJobInfoHeaders;
}


export class GetThirdPartyJobInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  jobInfo?: shared.JobInfo;

  @Metadata()
  statusCode: number;
}
