import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListSystemsSortEnum {
    Id = "id"
,    DisplayName = "display_name"
,    LastEvaluation = "last_evaluation"
,    LastUpload = "last_upload"
,    RhsaCount = "rhsa_count"
,    RhbaCount = "rhba_count"
,    RheaCount = "rhea_count"
,    OtherCount = "other_count"
,    Stale = "stale"
,    PackagesInstalled = "packages_installed"
,    PackagesUpdatable = "packages_updatable"
}


export class ListSystemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[created]" })
  filterCreated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[culled_timestamp]" })
  filterCulledTimestamp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[display_name]" })
  filterDisplayName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[id]" })
  filterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[insights_id]" })
  filterInsightsId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[last_evaluation]" })
  filterLastEvaluation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[last_upload]" })
  filterLastUpload?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[other_count]" })
  filterOtherCount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[packages_installed]" })
  filterPackagesInstalled?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[packages_updatable]" })
  filterPackagesUpdatable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[rhba_count]" })
  filterRhbaCount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[rhea_count]" })
  filterRheaCount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[rhsa_count]" })
  filterRhsaCount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[stale]" })
  filterStale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[stale_timestamp]" })
  filterStaleTimestamp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[stale_warning_timestamp]" })
  filterStaleWarningTimestamp?: string;

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
  sort?: ListSystemsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ListSystemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListSystemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSystemsQueryParams;

  @Metadata()
  security: ListSystemsSecurity;
}


export class ListSystemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersSystemsResponse?: shared.ControllersSystemsResponse;
}
