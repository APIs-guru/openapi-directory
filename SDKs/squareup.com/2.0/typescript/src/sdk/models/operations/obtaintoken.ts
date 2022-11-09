import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ObtainTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ObtainTokenRequest;
}


export class ObtainTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  obtainTokenResponse?: shared.ObtainTokenResponse;

  @Metadata()
  statusCode: number;
}
