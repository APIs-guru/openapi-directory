import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class FantasyPlayerOwnershipPercentagesSeasonLongPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class FantasyPlayerOwnershipPercentagesSeasonLongRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FantasyPlayerOwnershipPercentagesSeasonLongPathParams;
}


export class FantasyPlayerOwnershipPercentagesSeasonLongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerOwnerships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
