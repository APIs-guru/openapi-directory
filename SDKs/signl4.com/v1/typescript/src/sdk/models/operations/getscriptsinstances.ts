import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScriptsInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class GetScriptsInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetScriptsInstancesQueryParams;
}


export class GetScriptsInstancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.ScriptInstanceDetails })
  scriptInstanceDetails?: shared.ScriptInstanceDetails[];

  @Metadata()
  statusCode: number;
}
