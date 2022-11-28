import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProcessorAuthGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorAuthGetRequest;
}


export class ProcessorAuthGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  processorAuthGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
