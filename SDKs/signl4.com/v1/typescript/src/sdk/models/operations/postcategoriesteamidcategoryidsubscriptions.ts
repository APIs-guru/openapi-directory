import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCategoriesTeamIdCategoryIdSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostCategoriesTeamIdCategoryIdSubscriptionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos?: shared.CategorySubscriptionInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos1?: shared.CategorySubscriptionInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos2?: shared.CategorySubscriptionInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos3?: shared.CategorySubscriptionInfo[];
}


export class PostCategoriesTeamIdCategoryIdSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCategoriesTeamIdCategoryIdSubscriptionsPathParams;

  @SpeakeasyMetadata()
  request?: PostCategoriesTeamIdCategoryIdSubscriptionsRequests;
}


export class PostCategoriesTeamIdCategoryIdSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata({ elemType: shared.CategorySubscriptionInfo })
  categorySubscriptionInfos?: shared.CategorySubscriptionInfo[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
