import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRtiJobInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetRtiJobInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetRtiJobInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRtiJobInfoPathParams;

  @Metadata()
  headers: GetRtiJobInfoHeaders;
}


export class GetRtiJobInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  jobInfo?: shared.JobInfo;

  @Metadata()
  statusCode: number;
}
