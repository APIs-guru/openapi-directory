import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateANewQuestionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=choices" })
  choices?: string[];

  @Metadata({ data: "json, name=question" })
  question?: string;
}


export class CreateANewQuestionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateANewQuestionRequestBody;
}


export class CreateANewQuestionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
