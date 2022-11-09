import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamScheduleFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamScheduleFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class TeamScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamSchedulePathParams;
}


export class TeamScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
