import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDatasetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=global" })
  global?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ListDatasetsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ListDatasetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDatasetsQueryParams;

  @Metadata()
  security: ListDatasetsSecurity;
}


export class ListDatasetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  datasetList?: shared.DatasetList;

  @Metadata()
  statusCode: number;
}
