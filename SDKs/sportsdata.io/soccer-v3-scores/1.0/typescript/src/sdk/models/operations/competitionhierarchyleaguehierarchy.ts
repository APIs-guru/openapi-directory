import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CompetitionHierarchyLeagueHierarchyFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class CompetitionHierarchyLeagueHierarchyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CompetitionHierarchyLeagueHierarchyFormatEnum;
}


export class CompetitionHierarchyLeagueHierarchyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompetitionHierarchyLeagueHierarchyPathParams;
}


export class CompetitionHierarchyLeagueHierarchyResponse extends SpeakeasyBase {
  @Metadata()
  areas?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
