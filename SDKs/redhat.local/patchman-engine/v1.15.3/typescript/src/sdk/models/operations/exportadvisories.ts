import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportAdvisoriesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAdvisoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportAdvisoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportAdvisoriesQueryParams;

  @SpeakeasyMetadata()
  security: ExportAdvisoriesSecurity;
}


export class ExportAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ControllersAdvisoryInlineItem })
  controllersAdvisoryInlineItems?: shared.ControllersAdvisoryInlineItem[];
}
