import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchDpsMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DpsMessageId" })
  dpsMessageId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PatchDpsMessageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchDpsMessageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchDpsMessagePathParams;

  @Metadata()
  headers: PatchDpsMessageHeaders;
}


export class PatchDpsMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dpsMessage?: shared.DpsMessage;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
