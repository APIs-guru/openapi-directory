import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamScheduleFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamScheduleFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class TeamScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamSchedulePathParams;
}


export class TeamScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
