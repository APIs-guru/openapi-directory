import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDpsMessageFromEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DpsMessageId" })
  dpsMessageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetDpsMessageFromEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetDpsMessageFromEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDpsMessageFromEmployerPathParams;

  @SpeakeasyMetadata()
  headers: GetDpsMessageFromEmployerHeaders;
}


export class GetDpsMessageFromEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dpsMessage?: shared.DpsMessage;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
