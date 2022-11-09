import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CompetitionFixturesLeagueDetailsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class CompetitionFixturesLeagueDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=competitionid" })
  competitionid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CompetitionFixturesLeagueDetailsFormatEnum;
}


export class CompetitionFixturesLeagueDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompetitionFixturesLeagueDetailsPathParams;
}


export class CompetitionFixturesLeagueDetailsResponse extends SpeakeasyBase {
  @Metadata()
  competitionDetail?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
