import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LeaderboardFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LeaderboardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeaderboardFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class LeaderboardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LeaderboardPathParams;
}


export class LeaderboardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  leaderboard?: any;

  @Metadata()
  statusCode: number;
}
