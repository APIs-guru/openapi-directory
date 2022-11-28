import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum;
}


export class ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
