import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlaceComplexBetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=exclude" })
  exclude?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: string[];
}


export class PlaceComplexBetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class PlaceComplexBetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PlaceComplexBetQueryParams;

  @SpeakeasyMetadata()
  headers: PlaceComplexBetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ComplexBetRequestBody;
}


export class PlaceComplexBetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.BetDelayed })
  betDelayedResponse?: shared.BetDelayed[];

  @SpeakeasyMetadata({ elemType: shared.BetPlaced })
  betPlacedResponse?: shared.BetPlaced[];

  @SpeakeasyMetadata()
  errors?: shared.Errors;
}
