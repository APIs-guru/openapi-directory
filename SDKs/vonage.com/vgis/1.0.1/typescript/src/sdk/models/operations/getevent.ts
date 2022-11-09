import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventPathParams;
}


export class GetEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];

  @Metadata()
  statusCode: number;
}
