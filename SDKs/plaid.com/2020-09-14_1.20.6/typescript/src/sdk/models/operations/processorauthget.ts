import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProcessorAuthGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorAuthGetRequest;
}


export class ProcessorAuthGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  processorAuthGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
