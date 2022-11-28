import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsEventIdParametersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventsEventIdParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventsEventIdParametersPathParams;
}


export class GetEventsEventIdParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata({ elemType: shared.EventParameterInfo })
  eventParameterInfos?: shared.EventParameterInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
