import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PremiumNewsByTeamFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class PremiumNewsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class PremiumNewsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PremiumNewsByTeamPathParams;
}


export class PremiumNewsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
