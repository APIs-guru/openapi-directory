import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCallsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validate" })
  validate?: number;
}


export class GetCallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCallsQueryParams;
}


export class GetCallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneGetResponses200ContentApplication1jsonSchema?: shared.OneGetResponses200ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses400ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses400ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
