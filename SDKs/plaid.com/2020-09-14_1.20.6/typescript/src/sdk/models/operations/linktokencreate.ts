import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LinkTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LinkTokenCreateRequest;
}


export class LinkTokenCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linkTokenCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
