import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class GetScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScriptsInstancesInstanceIdPathParams;
}


export class GetScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
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
