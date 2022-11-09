import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DailyFantasyPlayersFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class DailyFantasyPlayersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DailyFantasyPlayersFormatEnum;
}


export class DailyFantasyPlayersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DailyFantasyPlayersPathParams;
}


export class DailyFantasyPlayersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dailyFantasyPlayers?: any[];

  @Metadata()
  statusCode: number;
}
