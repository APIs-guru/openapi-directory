import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamGameStatsByDateFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class TeamGameStatsByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamGameStatsByDateFormatEnum;
}


export class TeamGameStatsByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamGameStatsByDatePathParams;
}


export class TeamGameStatsByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamGames?: any[];
}
