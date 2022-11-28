import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BoxScoresVSimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class BoxScoresVSimulationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: BoxScoresVSimulationFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" })
  numberofplays: string;
}


export class BoxScoresVSimulationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BoxScoresVSimulationPathParams;
}


export class BoxScoresVSimulationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScoreV3s?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
