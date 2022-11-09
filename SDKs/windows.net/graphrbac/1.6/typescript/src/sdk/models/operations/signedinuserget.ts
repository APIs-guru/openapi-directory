import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SignedInUserGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantId: string;
}


export class SignedInUserGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class SignedInUserGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SignedInUserGetPathParams;

  @Metadata()
  queryParams: SignedInUserGetQueryParams;
}


export class SignedInUserGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graphError?: shared.GraphError;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: Map<string, Map<string, any>>;
}
