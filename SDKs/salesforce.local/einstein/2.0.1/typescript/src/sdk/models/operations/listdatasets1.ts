import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDatasets1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=global" })
  global?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ListDatasets1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ListDatasets1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDatasets1QueryParams;

  @Metadata()
  security: ListDatasets1Security;
}


export class ListDatasets1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  datasetList?: shared.DatasetList;

  @Metadata()
  statusCode: number;
}
