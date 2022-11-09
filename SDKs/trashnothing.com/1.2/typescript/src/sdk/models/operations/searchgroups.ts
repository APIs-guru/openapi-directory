import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distance" })
  distance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;
}


export class SearchGroupsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class SearchGroupsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class SearchGroupsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class SearchGroupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SearchGroupsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SearchGroupsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SearchGroupsSecurityOption3;
}


export class SearchGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchGroupsQueryParams;

  @Metadata()
  security: SearchGroupsSecurity;
}


export class SearchGroups200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_index" })
  endIndex?: number;

  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: shared.Group[];

  @Metadata({ data: "json, name=num_groups" })
  numGroups?: number;

  @Metadata({ data: "json, name=num_pages" })
  numPages?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=start_index" })
  startIndex?: number;
}


export class SearchGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchGroups200ApplicationJsonObject?: SearchGroups200ApplicationJson;
}
