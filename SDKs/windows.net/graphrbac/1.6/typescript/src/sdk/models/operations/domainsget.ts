import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DomainsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DomainsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DomainsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: DomainsGetQueryParams;
}


export class DomainsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domain?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  statusCode: number;
}
