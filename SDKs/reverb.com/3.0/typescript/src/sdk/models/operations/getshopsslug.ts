import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetShopsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_listing_count" })
  includeListingCount?: boolean;
}


export class GetShopsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShopsSlugPathParams;

  @Metadata()
  queryParams: GetShopsSlugQueryParams;
}


export class GetShopsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
