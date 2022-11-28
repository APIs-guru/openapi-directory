import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateScoreConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateConfigInput;
}


export class CreateScoreConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  scoreConfigOutput?: shared.ScoreConfigOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
