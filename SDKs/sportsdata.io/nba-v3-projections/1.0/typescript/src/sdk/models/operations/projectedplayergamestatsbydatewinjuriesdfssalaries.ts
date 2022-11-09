import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum;
}


export class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
