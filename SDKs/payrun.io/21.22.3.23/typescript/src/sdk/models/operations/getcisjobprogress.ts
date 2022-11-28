import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCisJobProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetCisJobProgressHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCisJobProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCisJobProgressPathParams;

  @SpeakeasyMetadata()
  headers: GetCisJobProgressHeaders;
}


export class GetCisJobProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
