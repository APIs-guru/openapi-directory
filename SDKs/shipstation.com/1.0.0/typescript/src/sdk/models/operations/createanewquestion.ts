import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateANewQuestionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choices" })
  choices?: string[];

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class CreateANewQuestionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateANewQuestionRequestBody;
}


export class CreateANewQuestionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
