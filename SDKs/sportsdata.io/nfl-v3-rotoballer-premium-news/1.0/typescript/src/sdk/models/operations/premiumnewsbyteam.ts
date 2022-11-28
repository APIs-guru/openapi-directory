import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PremiumNewsByTeamFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class PremiumNewsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class PremiumNewsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PremiumNewsByTeamPathParams;
}


export class PremiumNewsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
