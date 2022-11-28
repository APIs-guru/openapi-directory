import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamsBySeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamsBySeasonFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamsBySeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsBySeasonPathParams;
}


export class TeamsBySeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teams?: any[];
}
