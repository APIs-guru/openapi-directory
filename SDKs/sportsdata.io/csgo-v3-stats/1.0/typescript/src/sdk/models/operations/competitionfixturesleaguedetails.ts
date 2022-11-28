import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CompetitionFixturesLeagueDetailsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class CompetitionFixturesLeagueDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=competitionid" })
  competitionid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CompetitionFixturesLeagueDetailsFormatEnum;
}


export class CompetitionFixturesLeagueDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompetitionFixturesLeagueDetailsPathParams;
}


export class CompetitionFixturesLeagueDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  competitionDetail?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
