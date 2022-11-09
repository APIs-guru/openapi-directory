import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportAdvisoriesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class ExportAdvisoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ExportAdvisoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportAdvisoriesQueryParams;

  @Metadata()
  security: ExportAdvisoriesSecurity;
}


export class ExportAdvisoriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ControllersAdvisoryInlineItem })
  controllersAdvisoryInlineItems?: shared.ControllersAdvisoryInlineItem[];
}
