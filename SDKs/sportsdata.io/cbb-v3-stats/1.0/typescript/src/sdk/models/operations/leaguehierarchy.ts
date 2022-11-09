import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LeagueHierarchyFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class LeagueHierarchyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeagueHierarchyFormatEnum;
}


export class LeagueHierarchyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LeagueHierarchyPathParams;
}


export class LeagueHierarchyResponse extends SpeakeasyBase {
  @Metadata()
  conferences?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
