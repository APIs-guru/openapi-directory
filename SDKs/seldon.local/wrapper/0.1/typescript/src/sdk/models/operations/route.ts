import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=json;json=true" })
  json?: shared.SeldonMessage;
}


export class RouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: RouteRequestBody;
}


export class RouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seldonMessage?: shared.SeldonMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
