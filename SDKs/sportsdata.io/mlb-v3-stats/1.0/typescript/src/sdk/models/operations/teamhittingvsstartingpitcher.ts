import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamHittingVsStartingPitcherFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamHittingVsStartingPitcherPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamHittingVsStartingPitcherFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=gameid" })
  gameid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class TeamHittingVsStartingPitcherRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamHittingVsStartingPitcherPathParams;
}


export class TeamHittingVsStartingPitcherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
