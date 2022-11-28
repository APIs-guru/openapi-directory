import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;
}


export class SearchGroupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class SearchGroups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_index" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata({ data: "json, name=num_groups" })
  numGroups?: number;

  @SpeakeasyMetadata({ data: "json, name=num_pages" })
  numPages?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=start_index" })
  startIndex?: number;
}


export class SearchGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchGroupsQueryParams;

  @SpeakeasyMetadata()
  security: SearchGroupsSecurity;
}


export class SearchGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchGroups200ApplicationJsonObject?: SearchGroups200ApplicationJson;
}
