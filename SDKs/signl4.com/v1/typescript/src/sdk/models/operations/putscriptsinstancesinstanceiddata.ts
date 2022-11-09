import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutScriptsInstancesInstanceIdDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class PutScriptsInstancesInstanceIdDataRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scriptInstanceCustomUserData?: shared.ScriptInstanceCustomUserData;

  @Metadata({ data: "request, media_type=application/json" })
  scriptInstanceCustomUserData1?: shared.ScriptInstanceCustomUserData;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scriptInstanceCustomUserData2?: shared.ScriptInstanceCustomUserData;

  @Metadata({ data: "request, media_type=text/json" })
  scriptInstanceCustomUserData3?: shared.ScriptInstanceCustomUserData;
}


export class PutScriptsInstancesInstanceIdDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutScriptsInstancesInstanceIdDataPathParams;

  @Metadata()
  request?: PutScriptsInstancesInstanceIdDataRequests;
}


export class PutScriptsInstancesInstanceIdDataResponse extends SpeakeasyBase {
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
