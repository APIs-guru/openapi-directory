import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportSystemAdvisoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class ExportSystemAdvisoriesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportSystemAdvisoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportSystemAdvisoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExportSystemAdvisoriesPathParams;

  @Metadata()
  queryParams: ExportSystemAdvisoriesQueryParams;

  @Metadata()
  security: ExportSystemAdvisoriesSecurity;
}


export class ExportSystemAdvisoriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ControllersSystemAdvisoriesDbLookup })
  controllersSystemAdvisoriesDbLookups?: shared.ControllersSystemAdvisoriesDbLookup[];
}
