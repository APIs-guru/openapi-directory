import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAdvisorySystemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=advisory_id" })
  advisoryId: string;
}


export class ExportAdvisorySystemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[display_name]" })
  filterDisplayName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[id]" })
  filterId?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_sids][in]" })
  filterSystemProfileSapSidsIn?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter[system_profile][sap_system]" })
  filterSystemProfileSapSystem?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];
}


export class ExportAdvisorySystemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportAdvisorySystemsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExportAdvisorySystemsPathParams;

  @Metadata()
  queryParams: ExportAdvisorySystemsQueryParams;

  @Metadata()
  security: ExportAdvisorySystemsSecurity;
}


export class ExportAdvisorySystemsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ControllersSystemInlineItem })
  controllersSystemInlineItems?: shared.ControllersSystemInlineItem[];
}
