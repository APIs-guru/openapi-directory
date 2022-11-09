import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=json;json=true" })
  json?: shared.SeldonMessage;
}


export class RouteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: RouteRequestBody;
}


export class RouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seldonMessage?: shared.SeldonMessage;

  @Metadata()
  statusCode: number;
}
