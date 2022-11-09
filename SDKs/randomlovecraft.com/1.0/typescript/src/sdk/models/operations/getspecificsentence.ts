import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpecificSentencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpecificSentenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecificSentencePathParams;
}


export class GetSpecificSentence200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.Sentence;
}


export class GetSpecificSentenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSpecificSentence200ApplicationJsonObject?: GetSpecificSentence200ApplicationJson;
}
