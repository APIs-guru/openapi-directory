import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletedApplicationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class DeletedApplicationsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class DeletedApplicationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletedApplicationsListPathParams;

  @Metadata()
  queryParams: DeletedApplicationsListQueryParams;
}


export class DeletedApplicationsListResponse extends SpeakeasyBase {
  @Metadata()
  applicationListResult?: shared.ApplicationListResult;

  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;
}
