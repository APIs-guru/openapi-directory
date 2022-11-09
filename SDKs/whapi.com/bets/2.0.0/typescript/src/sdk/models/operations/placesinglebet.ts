import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlaceSingleBetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=exclude" })
  exclude?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: string[];
}


export class PlaceSingleBetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class PlaceSingleBetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PlaceSingleBetQueryParams;

  @Metadata()
  headers: PlaceSingleBetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SingleBetRequestBody;
}


export class PlaceSingleBetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.BetDelayed })
  betDelayedResponse?: shared.BetDelayed[];

  @Metadata({ elemType: shared.BetPlaced })
  betPlacedResponse?: shared.BetPlaced[];

  @Metadata()
  errors?: shared.Errors;
}
