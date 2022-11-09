import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProcessorTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorTokenCreateRequest;
}


export class ProcessorTokenCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  processorTokenCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
