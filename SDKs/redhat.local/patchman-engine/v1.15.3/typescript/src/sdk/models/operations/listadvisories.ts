import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAdvisoriesSortEnum {
    Id = "id",
    Name = "name",
    AdvisoryType = "advisory_type",
    Synopsis = "synopsis",
    PublicDate = "public_date",
    ApplicableSystems = "applicable_systems"
}


export class ListAdvisoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[advisory_type]" })
  filterAdvisoryType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[applicable_systems]" })
  filterApplicableSystems?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListAdvisoriesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ListAdvisoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListAdvisoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAdvisoriesQueryParams;

  @SpeakeasyMetadata()
  security: ListAdvisoriesSecurity;
}


export class ListAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersAdvisoriesResponse?: shared.ControllersAdvisoriesResponse;
}
