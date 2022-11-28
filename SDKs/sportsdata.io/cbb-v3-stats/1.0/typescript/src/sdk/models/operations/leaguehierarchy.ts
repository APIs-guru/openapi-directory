import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LeagueHierarchyFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class LeagueHierarchyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: LeagueHierarchyFormatEnum;
}


export class LeagueHierarchyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LeagueHierarchyPathParams;
}


export class LeagueHierarchyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conferences?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
