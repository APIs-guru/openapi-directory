import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LinkTokenGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LinkTokenGetRequest;
}


export class LinkTokenGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linkTokenGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
