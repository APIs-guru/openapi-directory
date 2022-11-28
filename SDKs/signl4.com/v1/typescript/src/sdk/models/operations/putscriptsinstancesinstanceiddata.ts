import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutScriptsInstancesInstanceIdDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class PutScriptsInstancesInstanceIdDataRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scriptInstanceCustomUserData?: shared.ScriptInstanceCustomUserData;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scriptInstanceCustomUserData1?: shared.ScriptInstanceCustomUserData;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scriptInstanceCustomUserData2?: shared.ScriptInstanceCustomUserData;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scriptInstanceCustomUserData3?: shared.ScriptInstanceCustomUserData;
}


export class PutScriptsInstancesInstanceIdDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutScriptsInstancesInstanceIdDataPathParams;

  @SpeakeasyMetadata()
  request?: PutScriptsInstancesInstanceIdDataRequests;
}


export class PutScriptsInstancesInstanceIdDataResponse extends SpeakeasyBase {
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
