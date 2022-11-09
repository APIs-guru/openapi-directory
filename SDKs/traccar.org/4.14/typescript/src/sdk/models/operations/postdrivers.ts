import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDriversRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Driver;
}


export class PostDriversResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  driver?: shared.Driver;

  @Metadata()
  statusCode: number;
}
