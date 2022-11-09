import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCategoriesTeamIdCategoryIdSubscriptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostCategoriesTeamIdCategoryIdSubscriptionsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos?: shared.CategorySubscriptionInfo[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos1?: shared.CategorySubscriptionInfo[];

  @Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos2?: shared.CategorySubscriptionInfo[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos3?: shared.CategorySubscriptionInfo[];
}


export class PostCategoriesTeamIdCategoryIdSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCategoriesTeamIdCategoryIdSubscriptionsPathParams;

  @Metadata()
  request?: PostCategoriesTeamIdCategoryIdSubscriptionsRequests;
}


export class PostCategoriesTeamIdCategoryIdSubscriptionsResponse extends SpeakeasyBase {
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
