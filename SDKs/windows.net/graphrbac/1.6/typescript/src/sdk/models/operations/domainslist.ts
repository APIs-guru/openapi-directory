import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DomainsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DomainsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DomainsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DomainsListQueryParams;
}


export class DomainsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainListResult?: shared.DomainListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
