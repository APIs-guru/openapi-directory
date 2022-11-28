import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplicationsRemoveOwnerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" })
  applicationObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownerObjectId" })
  ownerObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class ApplicationsRemoveOwnerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class ApplicationsRemoveOwnerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplicationsRemoveOwnerPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplicationsRemoveOwnerQueryParams;
}


export class ApplicationsRemoveOwnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
