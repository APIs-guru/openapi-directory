import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IdentityGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IdentityGetRequest;
}


export class IdentityGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  identityGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
