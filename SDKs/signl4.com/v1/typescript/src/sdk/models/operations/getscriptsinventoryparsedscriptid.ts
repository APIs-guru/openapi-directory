import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScriptsInventoryParsedScriptIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class GetScriptsInventoryParsedScriptIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;
}


export class GetScriptsInventoryParsedScriptIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScriptsInventoryParsedScriptIdPathParams;

  @Metadata()
  queryParams: GetScriptsInventoryParsedScriptIdQueryParams;
}


export class GetScriptsInventoryParsedScriptIdResponse extends SpeakeasyBase {
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
