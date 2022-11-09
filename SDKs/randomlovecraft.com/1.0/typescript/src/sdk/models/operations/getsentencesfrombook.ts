import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSentencesFromBookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSentencesFromBookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetSentencesFromBookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSentencesFromBookPathParams;

  @Metadata()
  queryParams: GetSentencesFromBookQueryParams;
}


export class GetSentencesFromBook200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Sentence })
  data?: shared.Sentence[];
}


export class GetSentencesFromBookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSentencesFromBook200ApplicationJsonObject?: GetSentencesFromBook200ApplicationJson;
}
