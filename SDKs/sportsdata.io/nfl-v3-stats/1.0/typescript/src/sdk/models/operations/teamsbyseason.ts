import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsBySeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamsBySeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsBySeasonPathParams;
}


export class TeamsBySeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teams?: any[];
}
