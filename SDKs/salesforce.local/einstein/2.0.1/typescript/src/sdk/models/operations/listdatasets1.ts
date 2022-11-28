import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDatasets1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=global" })
  global?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ListDatasets1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ListDatasets1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListDatasets1QueryParams;

  @SpeakeasyMetadata()
  security: ListDatasets1Security;
}


export class ListDatasets1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  datasetList?: shared.DatasetList;

  @SpeakeasyMetadata()
  statusCode: number;
}
