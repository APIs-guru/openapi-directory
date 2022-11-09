import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesTeamIdCategoryIdSubscriptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdCategoryIdSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesTeamIdCategoryIdSubscriptionsPathParams;
}


export class GetCategoriesTeamIdCategoryIdSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos?: shared.CategorySubscriptionInfo[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
