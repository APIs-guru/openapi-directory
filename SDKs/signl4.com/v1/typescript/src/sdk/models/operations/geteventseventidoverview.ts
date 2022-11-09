import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsEventIdOverviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventsEventIdOverviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventsEventIdOverviewPathParams;
}


export class GetEventsEventIdOverviewResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  overviewEvent?: shared.OverviewEvent;

  @Metadata()
  statusCode: number;
}
