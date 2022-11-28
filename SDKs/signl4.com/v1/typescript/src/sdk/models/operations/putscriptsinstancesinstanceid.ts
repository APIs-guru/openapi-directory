import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class PutScriptsInstancesInstanceIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scriptInstanceDetails1?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scriptInstanceDetails2?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scriptInstanceDetails3?: shared.ScriptInstanceDetails;
}


export class PutScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutScriptsInstancesInstanceIdPathParams;

  @SpeakeasyMetadata()
  request?: PutScriptsInstancesInstanceIdRequests;
}


export class PutScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
