import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StreamSampleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expansions" })
  expansions?: shared.TweetExpansionsParamTypeEnum[][];
}


export class StreamSampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StreamSampleQueryParams;
}


export class StreamSampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  streamSample200ApplicationJsonObject?: Map<string, any>;
}
