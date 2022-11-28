import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportSystemAdvisoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" })
  inventoryId: string;
}


export class ExportSystemAdvisoriesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportSystemAdvisoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportSystemAdvisoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportSystemAdvisoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: ExportSystemAdvisoriesQueryParams;

  @SpeakeasyMetadata()
  security: ExportSystemAdvisoriesSecurity;
}


export class ExportSystemAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ControllersSystemAdvisoriesDbLookup })
  controllersSystemAdvisoriesDbLookups?: shared.ControllersSystemAdvisoriesDbLookup[];
}
