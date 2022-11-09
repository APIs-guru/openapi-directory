import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayorLinksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=descendantsOfPayor" })
  descendantsOfPayor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentOfPayor" })
  parentOfPayor?: string;
}


export class PayorLinksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PayorLinksQueryParams;
}


export class PayorLinksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payorLinksResponse?: shared.PayorLinksResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
