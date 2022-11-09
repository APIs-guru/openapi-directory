import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InjuriesByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class InjuriesByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: InjuriesByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class InjuriesByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InjuriesByTeamPathParams;
}


export class InjuriesByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  injuries?: any[];

  @Metadata()
  statusCode: number;
}
