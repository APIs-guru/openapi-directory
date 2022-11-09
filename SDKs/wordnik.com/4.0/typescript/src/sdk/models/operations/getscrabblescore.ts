import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetScrabbleScorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class GetScrabbleScoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScrabbleScorePathParams;
}


export class GetScrabbleScoreResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
