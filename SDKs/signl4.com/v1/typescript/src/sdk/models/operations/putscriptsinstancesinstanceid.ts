import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class PutScriptsInstancesInstanceIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @Metadata({ data: "request, media_type=application/json" })
  scriptInstanceDetails1?: shared.ScriptInstanceDetails;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scriptInstanceDetails2?: shared.ScriptInstanceDetails;

  @Metadata({ data: "request, media_type=text/json" })
  scriptInstanceDetails3?: shared.ScriptInstanceDetails;
}


export class PutScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutScriptsInstancesInstanceIdPathParams;

  @Metadata()
  request?: PutScriptsInstancesInstanceIdRequests;
}


export class PutScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @Metadata()
  statusCode: number;
}
