import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCallsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=validate" })
  validate?: number;
}


export class GetCallsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCallsQueryParams;
}


export class GetCallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneGetResponses200ContentApplication1jsonSchema?: shared.OneGetResponses200ContentApplication1jsonSchema;

  @Metadata()
  oneannouncementsPostResponses400ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses400ContentApplication1jsonSchema;

  @Metadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
