import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LinkTokenGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LinkTokenGetRequest;
}


export class LinkTokenGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linkTokenGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
