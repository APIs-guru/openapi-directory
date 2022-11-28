import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportAdvisorySystemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advisory_id" })
  advisoryId: string;
}


export class ExportAdvisorySystemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[display_name]" })
  filterDisplayName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[id]" })
  filterId?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ExportAdvisorySystemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportAdvisorySystemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportAdvisorySystemsPathParams;

  @SpeakeasyMetadata()
  queryParams: ExportAdvisorySystemsQueryParams;

  @SpeakeasyMetadata()
  security: ExportAdvisorySystemsSecurity;
}


export class ExportAdvisorySystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ControllersSystemInlineItem })
  controllersSystemInlineItems?: shared.ControllersSystemInlineItem[];
}
