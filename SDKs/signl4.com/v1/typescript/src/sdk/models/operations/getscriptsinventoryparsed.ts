import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScriptsInventoryParsedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;
}


export class GetScriptsInventoryParsedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetScriptsInventoryParsedQueryParams;
}


export class GetScriptsInventoryParsedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata({ elemType: shared.InventoryScriptInfo })
  inventoryScriptInfos?: shared.InventoryScriptInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
