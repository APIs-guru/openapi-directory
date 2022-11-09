import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class FantasyPlayerOwnershipPercentagesSeasonLongPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class FantasyPlayerOwnershipPercentagesSeasonLongRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FantasyPlayerOwnershipPercentagesSeasonLongPathParams;
}


export class FantasyPlayerOwnershipPercentagesSeasonLongResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerOwnerships?: any[];

  @Metadata()
  statusCode: number;
}
