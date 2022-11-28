import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSentencesFromBookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSentencesFromBookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetSentencesFromBook200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Sentence })
  data?: shared.Sentence[];
}


export class GetSentencesFromBookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSentencesFromBookPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSentencesFromBookQueryParams;
}


export class GetSentencesFromBookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSentencesFromBook200ApplicationJsonObject?: GetSentencesFromBook200ApplicationJson;
}
