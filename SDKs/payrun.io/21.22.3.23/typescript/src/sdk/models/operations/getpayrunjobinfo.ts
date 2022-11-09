import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayRunJobInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetPayRunJobInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayRunJobInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayRunJobInfoPathParams;

  @Metadata()
  headers: GetPayRunJobInfoHeaders;
}


export class GetPayRunJobInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  jobInfo?: shared.JobInfo;

  @Metadata()
  statusCode: number;
}
