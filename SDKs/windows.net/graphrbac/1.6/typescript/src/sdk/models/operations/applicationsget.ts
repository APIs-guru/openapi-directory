import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplicationsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplicationsGetPathParams;

  @Metadata()
  queryParams: ApplicationsGetQueryParams;
}


export class ApplicationsGetResponse extends SpeakeasyBase {
  @Metadata()
  application?: Map<string, Map<string, any>>;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
