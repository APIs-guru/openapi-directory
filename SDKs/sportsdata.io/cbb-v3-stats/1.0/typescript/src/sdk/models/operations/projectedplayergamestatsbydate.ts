import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerGameStatsByDateFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerGameStatsByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByDateFormatEnum;
}


export class ProjectedPlayerGameStatsByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerGameStatsByDatePathParams;
}


export class ProjectedPlayerGameStatsByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGameProjections?: any[];

  @Metadata()
  statusCode: number;
}
