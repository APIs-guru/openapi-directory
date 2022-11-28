import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostListingsListingIdBumpBudgetTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=budget_type" })
  budgetType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class PostListingsListingIdBumpBudgetTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostListingsListingIdBumpBudgetTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostListingsListingIdBumpBudgetTypePathParams;

  @SpeakeasyMetadata()
  security: PostListingsListingIdBumpBudgetTypeSecurity;
}


export class PostListingsListingIdBumpBudgetTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
