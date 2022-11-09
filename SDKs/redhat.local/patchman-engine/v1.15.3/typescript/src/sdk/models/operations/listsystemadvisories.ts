import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSystemAdvisoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}

export enum ListSystemAdvisoriesSortEnum {
    Id = "id"
,    Name = "name"
,    Type = "type"
,    Synopsis = "synopsis"
,    PublicDate = "public_date"
}


export class ListSystemAdvisoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" })
  filterAdvisoryType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[description]" })
  filterDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[id]" })
  filterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[public_date]" })
  filterPublicDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[severity]" })
  filterSeverity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[synopsis]" })
  filterSynopsis?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListSystemAdvisoriesSortEnum;
}


export class ListSystemAdvisoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListSystemAdvisoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListSystemAdvisoriesPathParams;

  @Metadata()
  queryParams: ListSystemAdvisoriesQueryParams;

  @Metadata()
  security: ListSystemAdvisoriesSecurity;
}


export class ListSystemAdvisoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersSystemAdvisoriesResponse?: shared.ControllersSystemAdvisoriesResponse;
}
