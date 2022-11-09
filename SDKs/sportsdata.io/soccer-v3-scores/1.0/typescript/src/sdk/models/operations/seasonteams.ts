import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SeasonTeamsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class SeasonTeamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SeasonTeamsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=seasonid" })
  seasonid: string;
}


export class SeasonTeamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SeasonTeamsPathParams;
}


export class SeasonTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seasonTeams?: any[];

  @Metadata()
  statusCode: number;
}
