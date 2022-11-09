import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1UserSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;
}


export class DeleteApiV1UserSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteApiV1UserSubscriptionsQueryParams;
}


export class DeleteApiV1UserSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
