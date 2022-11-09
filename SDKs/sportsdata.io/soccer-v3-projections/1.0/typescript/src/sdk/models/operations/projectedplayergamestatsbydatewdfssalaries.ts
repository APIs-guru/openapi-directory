import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class ProjectedPlayerGameStatsByDateWDfsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum;
}


export class ProjectedPlayerGameStatsByDateWDfsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerGameStatsByDateWDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByDateWDfsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
