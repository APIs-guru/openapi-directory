import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayByPlaySimulationFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayByPlaySimulationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayByPlaySimulationFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" })
  numberofplays: string;
}


export class PlayByPlaySimulationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayByPlaySimulationPathParams;
}


export class PlayByPlaySimulationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playByPlays?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
