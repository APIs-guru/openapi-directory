import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TournamentHierarchyFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TournamentHierarchyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TournamentHierarchyFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TournamentHierarchyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TournamentHierarchyPathParams;
}


export class TournamentHierarchyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tournament?: any;
}
