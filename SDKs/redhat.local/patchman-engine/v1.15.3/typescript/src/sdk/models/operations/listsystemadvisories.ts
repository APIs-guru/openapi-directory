import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSystemAdvisoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}

export enum ListSystemAdvisoriesSortEnum {
    Id = "id",
    Name = "name",
    Type = "type",
    Synopsis = "synopsis",
    PublicDate = "public_date"
}


export class ListSystemAdvisoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" })
  filterAdvisoryType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[description]" })
  filterDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" })
  filterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[public_date]" })
  filterPublicDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[severity]" })
  filterSeverity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[synopsis]" })
  filterSynopsis?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListSystemAdvisoriesSortEnum;
}


export class ListSystemAdvisoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListSystemAdvisoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSystemAdvisoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSystemAdvisoriesQueryParams;

  @SpeakeasyMetadata()
  security: ListSystemAdvisoriesSecurity;
}


export class ListSystemAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersSystemAdvisoriesResponse?: shared.ControllersSystemAdvisoriesResponse;
}
