import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LeaderboardFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LeaderboardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeaderboardFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class LeaderboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LeaderboardPathParams;
}


export class LeaderboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  leaderboard?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
