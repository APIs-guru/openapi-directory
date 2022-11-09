import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAdvisoriesSortEnum {
    Id = "id"
,    Name = "name"
,    AdvisoryType = "advisory_type"
,    Synopsis = "synopsis"
,    PublicDate = "public_date"
,    ApplicableSystems = "applicable_systems"
}


export class ListAdvisoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" })
  filterAdvisoryType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[applicable_systems]" })
  filterApplicableSystems?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListAdvisoriesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ListAdvisoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListAdvisoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAdvisoriesQueryParams;

  @Metadata()
  security: ListAdvisoriesSecurity;
}


export class ListAdvisoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersAdvisoriesResponse?: shared.ControllersAdvisoriesResponse;
}
