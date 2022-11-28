import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LiabilitiesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LiabilitiesGetRequest;
}


export class LiabilitiesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  liabilitiesGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
