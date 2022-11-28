import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShopsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_listing_count" })
  includeListingCount?: boolean;
}


export class GetShopsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShopsSlugPathParams;

  @SpeakeasyMetadata()
  queryParams: GetShopsSlugQueryParams;
}


export class GetShopsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
