import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BoxScoresVSimulationFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class BoxScoresVSimulationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresVSimulationFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" })
  numberofplays: string;
}


export class BoxScoresVSimulationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BoxScoresVSimulationPathParams;
}


export class BoxScoresVSimulationResponse extends SpeakeasyBase {
  @Metadata()
  boxScoreV3s?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
