import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScriptsInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class GetScriptsInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetScriptsInstancesQueryParams;
}


export class GetScriptsInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata({ elemType: shared.ScriptInstanceDetails })
  scriptInstanceDetails?: shared.ScriptInstanceDetails[];

  @SpeakeasyMetadata()
  statusCode: number;
}
