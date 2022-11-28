import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpecificSentencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpecificSentence200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Sentence;
}


export class GetSpecificSentenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecificSentencePathParams;
}


export class GetSpecificSentenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSpecificSentence200ApplicationJsonObject?: GetSpecificSentence200ApplicationJson;
}
