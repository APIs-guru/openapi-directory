import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetScrabbleScorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class GetScrabbleScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScrabbleScorePathParams;
}


export class GetScrabbleScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
