import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DomainsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DomainsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DomainsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DomainsListPathParams;

  @Metadata()
  queryParams: DomainsListQueryParams;
}


export class DomainsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainListResult?: shared.DomainListResult;

  @Metadata()
  statusCode: number;
}
