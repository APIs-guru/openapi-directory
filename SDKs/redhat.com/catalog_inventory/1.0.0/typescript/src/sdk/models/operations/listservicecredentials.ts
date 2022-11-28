import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListServiceCredentialsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListServiceCredentialsQueryParams;
}


export class ListServiceCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceCredentialsCollection?: shared.ServiceCredentialsCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
