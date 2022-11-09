import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StreamSampleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expansions" })
  expansions?: shared.TweetExpansionsParamTypeEnum[][];
}


export class StreamSampleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StreamSampleQueryParams;
}


export class StreamSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  problem?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  streamSample200ApplicationJsonObject?: Map<string, any>;
}
