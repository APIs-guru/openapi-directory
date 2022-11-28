import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TournamentHierarchyFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TournamentHierarchyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TournamentHierarchyFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TournamentHierarchyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TournamentHierarchyPathParams;
}


export class TournamentHierarchyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tournament?: any;
}
