import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostListingsListingIdBumpBudgetTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_type" })
  budgetType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class PostListingsListingIdBumpBudgetTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostListingsListingIdBumpBudgetTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostListingsListingIdBumpBudgetTypePathParams;

  @Metadata()
  security: PostListingsListingIdBumpBudgetTypeSecurity;
}


export class PostListingsListingIdBumpBudgetTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
