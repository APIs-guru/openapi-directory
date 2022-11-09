import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFreeBetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=exclude" })
  exclude?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: string[];
}


export class GetFreeBetsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiSecret" })
  apiSecret: string;

  @Metadata({ data: "header, style=simple;explode=false;name=apiTicket" })
  apiTicket: string;
}


export class GetFreeBetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFreeBetsQueryParams;

  @Metadata()
  headers: GetFreeBetsHeaders;
}


export class GetFreeBetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.FreeBetDetail })
  freeBet?: shared.FreeBetDetail[];
}
