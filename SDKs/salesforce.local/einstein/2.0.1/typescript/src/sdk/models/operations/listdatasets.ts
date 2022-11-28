import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDatasetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=global" })
  global?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ListDatasetsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ListDatasetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListDatasetsQueryParams;

  @SpeakeasyMetadata()
  security: ListDatasetsSecurity;
}


export class ListDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  datasetList?: shared.DatasetList;

  @SpeakeasyMetadata()
  statusCode: number;
}
