import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CompetitionHierarchyLeagueHierarchyFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class CompetitionHierarchyLeagueHierarchyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CompetitionHierarchyLeagueHierarchyFormatEnum;
}


export class CompetitionHierarchyLeagueHierarchyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompetitionHierarchyLeagueHierarchyPathParams;
}


export class CompetitionHierarchyLeagueHierarchyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  areas?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
