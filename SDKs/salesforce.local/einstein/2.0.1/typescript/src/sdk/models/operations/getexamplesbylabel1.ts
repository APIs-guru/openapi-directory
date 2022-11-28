import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExamplesByLabel1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelId" })
  labelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetExamplesByLabel1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamplesByLabel1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetExamplesByLabel1QueryParams;

  @SpeakeasyMetadata()
  security: GetExamplesByLabel1Security;
}


export class GetExamplesByLabel1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exampleList?: shared.ExampleList;

  @SpeakeasyMetadata()
  statusCode: number;
}
