import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LiabilitiesGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LiabilitiesGetRequest;
}


export class LiabilitiesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  liabilitiesGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
