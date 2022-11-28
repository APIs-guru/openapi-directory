import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsEventIdOverviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventsEventIdOverviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventsEventIdOverviewPathParams;
}


export class GetEventsEventIdOverviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  overviewEvent?: shared.OverviewEvent;

  @SpeakeasyMetadata()
  statusCode: number;
}
