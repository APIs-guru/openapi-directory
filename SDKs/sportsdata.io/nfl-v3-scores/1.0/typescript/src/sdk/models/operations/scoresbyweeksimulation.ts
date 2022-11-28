import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScoresByWeekSimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ScoresByWeekSimulationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScoresByWeekSimulationFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" })
  numberofplays: string;
}


export class ScoresByWeekSimulationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScoresByWeekSimulationPathParams;
}


export class ScoresByWeekSimulationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scores?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
