import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DomainsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainName" })
  domainName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DomainsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DomainsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DomainsGetPathParams;

  @Metadata()
  queryParams: DomainsGetQueryParams;
}


export class DomainsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domain?: Map<string, Map<string, any>>;

  @Metadata()
  statusCode: number;
}
