import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetThirdPartyJobProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JobId" })
  jobId: string;
}


export class GetThirdPartyJobProgressHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetThirdPartyJobProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetThirdPartyJobProgressPathParams;

  @SpeakeasyMetadata()
  headers: GetThirdPartyJobProgressHeaders;
}


export class GetThirdPartyJobProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
