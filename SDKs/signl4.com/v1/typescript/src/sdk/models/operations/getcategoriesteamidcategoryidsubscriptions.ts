import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesTeamIdCategoryIdSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdCategoryIdSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesTeamIdCategoryIdSubscriptionsPathParams;
}


export class GetCategoriesTeamIdCategoryIdSubscriptionsResponse extends SpeakeasyBase {
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
