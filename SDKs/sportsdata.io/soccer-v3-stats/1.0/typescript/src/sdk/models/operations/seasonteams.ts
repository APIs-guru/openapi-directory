import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SeasonTeamsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class SeasonTeamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SeasonTeamsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=seasonid" })
  seasonid: string;
}


export class SeasonTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SeasonTeamsPathParams;
}


export class SeasonTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seasonTeams?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
