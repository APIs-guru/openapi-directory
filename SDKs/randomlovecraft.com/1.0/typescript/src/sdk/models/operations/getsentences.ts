import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSentencesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetSentencesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSentencesQueryParams;
}


export class GetSentences200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Sentence })
  data?: shared.Sentence[];
}


export class GetSentencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSentences200ApplicationJsonObject?: GetSentences200ApplicationJson;
}
