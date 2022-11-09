import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExamplesByLabel1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=labelId" })
  labelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetExamplesByLabel1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamplesByLabel1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExamplesByLabel1QueryParams;

  @Metadata()
  security: GetExamplesByLabel1Security;
}


export class GetExamplesByLabel1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exampleList?: shared.ExampleList;

  @Metadata()
  statusCode: number;
}
