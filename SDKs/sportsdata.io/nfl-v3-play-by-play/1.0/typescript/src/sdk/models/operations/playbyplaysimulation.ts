import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayByPlaySimulationFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayByPlaySimulationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayByPlaySimulationFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=numberofplays" })
  numberofplays: string;
}


export class PlayByPlaySimulationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayByPlaySimulationPathParams;
}


export class PlayByPlaySimulationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playByPlays?: any[];

  @Metadata()
  statusCode: number;
}
