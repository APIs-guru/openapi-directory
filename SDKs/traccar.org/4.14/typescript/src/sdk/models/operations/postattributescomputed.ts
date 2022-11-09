import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAttributesComputedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Attribute;
}


export class PostAttributesComputedResponse extends SpeakeasyBase {
  @Metadata()
  attribute?: shared.Attribute;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
