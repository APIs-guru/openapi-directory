import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StreamFilterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expansions" })
  expansions?: shared.TweetExpansionsParamTypeEnum[][];
}


export class StreamFilterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StreamFilterQueryParams;
}


export class StreamFilterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  problem?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  streamFilter200ApplicationJsonObject?: Map<string, any>;
}
