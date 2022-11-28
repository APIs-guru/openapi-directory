import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScoresByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class ScoresByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScoresByDatePathParams;
}


export class ScoresByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scores?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
