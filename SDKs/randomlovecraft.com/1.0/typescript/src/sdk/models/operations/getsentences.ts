import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSentencesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetSentences200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Sentence })
  data?: shared.Sentence[];
}


export class GetSentencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSentencesQueryParams;
}


export class GetSentencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSentences200ApplicationJsonObject?: GetSentences200ApplicationJson;
}
