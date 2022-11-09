import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum;
}


export class ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
