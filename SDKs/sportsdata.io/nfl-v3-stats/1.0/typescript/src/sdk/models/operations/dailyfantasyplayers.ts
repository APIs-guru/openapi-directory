import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DailyFantasyPlayersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class DailyFantasyPlayersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DailyFantasyPlayersFormatEnum;
}


export class DailyFantasyPlayersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DailyFantasyPlayersPathParams;
}


export class DailyFantasyPlayersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dailyFantasyPlayers?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
