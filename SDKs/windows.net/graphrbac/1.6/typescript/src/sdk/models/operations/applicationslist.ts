import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" })
  dollarFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsListQueryParams;
}


export class ApplicationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationListResult?: shared.ApplicationListResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
