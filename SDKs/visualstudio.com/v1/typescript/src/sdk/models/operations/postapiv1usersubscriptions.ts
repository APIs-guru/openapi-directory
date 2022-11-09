import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostApiV1UserSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;
}


export class PostApiV1UserSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApiV1UserSubscriptionsQueryParams;
}


export class PostApiV1UserSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
