import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ApplicationGetRequest;
}


export class ApplicationGetResponse extends SpeakeasyBase {
  @Metadata()
  applicationGetResponse?: shared.ApplicationGetResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
