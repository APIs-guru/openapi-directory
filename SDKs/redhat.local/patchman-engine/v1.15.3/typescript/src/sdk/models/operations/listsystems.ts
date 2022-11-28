import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListSystemsSortEnum {
    Id = "id",
    DisplayName = "display_name",
    LastEvaluation = "last_evaluation",
    LastUpload = "last_upload",
    RhsaCount = "rhsa_count",
    RhbaCount = "rhba_count",
    RheaCount = "rhea_count",
    OtherCount = "other_count",
    Stale = "stale",
    PackagesInstalled = "packages_installed",
    PackagesUpdatable = "packages_updatable"
}


export class ListSystemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[created]" })
  filterCreated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[culled_timestamp]" })
  filterCulledTimestamp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[display_name]" })
  filterDisplayName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" })
  filterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[insights_id]" })
  filterInsightsId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_evaluation]" })
  filterLastEvaluation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[last_upload]" })
  filterLastUpload?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[other_count]" })
  filterOtherCount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[packages_installed]" })
  filterPackagesInstalled?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[packages_updatable]" })
  filterPackagesUpdatable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhba_count]" })
  filterRhbaCount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhea_count]" })
  filterRheaCount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[rhsa_count]" })
  filterRhsaCount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale]" })
  filterStale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale_timestamp]" })
  filterStaleTimestamp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[stale_warning_timestamp]" })
  filterStaleWarningTimestamp?: string;

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
  sort?: ListSystemsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ListSystemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ListSystemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSystemsQueryParams;

  @SpeakeasyMetadata()
  security: ListSystemsSecurity;
}


export class ListSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersSystemsResponse?: shared.ControllersSystemsResponse;
}
