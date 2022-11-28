import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamHittingVsStartingPitcherFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamHittingVsStartingPitcherPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamHittingVsStartingPitcherFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gameid" })
  gameid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class TeamHittingVsStartingPitcherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamHittingVsStartingPitcherPathParams;
}


export class TeamHittingVsStartingPitcherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
