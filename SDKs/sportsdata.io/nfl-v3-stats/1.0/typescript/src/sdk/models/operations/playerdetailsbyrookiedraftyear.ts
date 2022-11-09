import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerDetailsByRookieDraftYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerDetailsByRookieDraftYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerDetailsByRookieDraftYearPathParams;
}


export class PlayerDetailsByRookieDraftYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  players?: any[];

  @Metadata()
  statusCode: number;
}
