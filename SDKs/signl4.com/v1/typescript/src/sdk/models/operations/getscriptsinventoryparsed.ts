import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScriptsInventoryParsedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;
}


export class GetScriptsInventoryParsedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetScriptsInventoryParsedQueryParams;
}


export class GetScriptsInventoryParsedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.InventoryScriptInfo })
  inventoryScriptInfos?: shared.InventoryScriptInfo[];

  @Metadata()
  statusCode: number;
}
