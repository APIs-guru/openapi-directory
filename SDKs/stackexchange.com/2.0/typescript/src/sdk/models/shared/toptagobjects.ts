import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TopTagObjects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  answerCount?: number;

  @SpeakeasyMetadata()
  answerScore?: number;

  @SpeakeasyMetadata()
  questionCount?: number;

  @SpeakeasyMetadata()
  questionScore?: number;

  @SpeakeasyMetadata()
  tagName?: string;

  @SpeakeasyMetadata()
  userId?: number;
}
