import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScoresByWeekSimulationFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ScoresByWeekSimulationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScoresByWeekSimulationFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" })
  numberofplays: string;
}


export class ScoresByWeekSimulationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScoresByWeekSimulationPathParams;
}


export class ScoresByWeekSimulationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scores?: any[];

  @Metadata()
  statusCode: number;
}
