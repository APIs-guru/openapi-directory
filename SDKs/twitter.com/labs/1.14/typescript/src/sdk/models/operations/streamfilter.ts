import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StreamFilterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expansions" })
  expansions?: shared.TweetExpansionsParamTypeEnum[][];
}


export class StreamFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StreamFilterQueryParams;
}


export class StreamFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  streamFilter200ApplicationJsonObject?: Map<string, any>;
}
