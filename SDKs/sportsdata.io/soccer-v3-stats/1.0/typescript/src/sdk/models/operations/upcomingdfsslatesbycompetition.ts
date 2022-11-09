import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpcomingDfsSlatesByCompetitionFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class UpcomingDfsSlatesByCompetitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=competitionId" })
  competitionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: UpcomingDfsSlatesByCompetitionFormatEnum;
}


export class UpcomingDfsSlatesByCompetitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpcomingDfsSlatesByCompetitionPathParams;
}


export class UpcomingDfsSlatesByCompetitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dfsSlates?: any[];

  @Metadata()
  statusCode: number;
}
