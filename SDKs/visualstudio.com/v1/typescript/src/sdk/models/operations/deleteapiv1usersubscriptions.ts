import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiV1UserSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;
}


export class DeleteApiV1UserSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteApiV1UserSubscriptionsQueryParams;
}


export class DeleteApiV1UserSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
