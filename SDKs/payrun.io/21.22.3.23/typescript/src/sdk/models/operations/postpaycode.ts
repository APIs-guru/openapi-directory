import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPayCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PostPayCodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostPayCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPayCodePathParams;

  @SpeakeasyMetadata()
  headers: PostPayCodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayCode;
}


export class PostPayCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  link?: shared.Link;

  @SpeakeasyMetadata()
  statusCode: number;
}
