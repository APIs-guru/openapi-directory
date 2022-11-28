import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWebhooksQueryParams;
}


export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWebhooksResponse?: shared.ListWebhooksResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
