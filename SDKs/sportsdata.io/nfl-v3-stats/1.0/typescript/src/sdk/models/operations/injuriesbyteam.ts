import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InjuriesByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class InjuriesByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: InjuriesByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class InjuriesByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InjuriesByTeamPathParams;
}


export class InjuriesByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  injuries?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
