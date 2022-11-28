import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpcomingDfsSlatesByCompetitionFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class UpcomingDfsSlatesByCompetitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=competitionId" })
  competitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: UpcomingDfsSlatesByCompetitionFormatEnum;
}


export class UpcomingDfsSlatesByCompetitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpcomingDfsSlatesByCompetitionPathParams;
}


export class UpcomingDfsSlatesByCompetitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dfsSlates?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
