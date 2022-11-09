import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateScoreConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateConfigInput;
}


export class CreateScoreConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  scoreConfigOutput?: shared.ScoreConfigOutput;

  @Metadata()
  statusCode: number;
}
