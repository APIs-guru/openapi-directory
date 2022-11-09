import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsEventIdParametersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: string;
}


export class GetEventsEventIdParametersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventsEventIdParametersPathParams;
}


export class GetEventsEventIdParametersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.EventParameterInfo })
  eventParameterInfos?: shared.EventParameterInfo[];

  @Metadata()
  statusCode: number;
}
