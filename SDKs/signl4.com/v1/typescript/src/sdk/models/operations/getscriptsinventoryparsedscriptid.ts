import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScriptsInventoryParsedScriptIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class GetScriptsInventoryParsedScriptIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;
}


export class GetScriptsInventoryParsedScriptIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScriptsInventoryParsedScriptIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScriptsInventoryParsedScriptIdQueryParams;
}


export class GetScriptsInventoryParsedScriptIdResponse extends SpeakeasyBase {
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
