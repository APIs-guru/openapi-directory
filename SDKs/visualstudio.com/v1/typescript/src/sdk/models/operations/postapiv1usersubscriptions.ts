import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostApiV1UserSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;
}


export class PostApiV1UserSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostApiV1UserSubscriptionsQueryParams;
}


export class PostApiV1UserSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
