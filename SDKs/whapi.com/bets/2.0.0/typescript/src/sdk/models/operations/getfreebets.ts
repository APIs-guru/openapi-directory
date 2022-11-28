import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFreeBetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=exclude" })
  exclude?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: string[];
}


export class GetFreeBetsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class GetFreeBetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFreeBetsQueryParams;

  @SpeakeasyMetadata()
  headers: GetFreeBetsHeaders;
}


export class GetFreeBetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.FreeBetDetail })
  freeBet?: shared.FreeBetDetail[];
}
