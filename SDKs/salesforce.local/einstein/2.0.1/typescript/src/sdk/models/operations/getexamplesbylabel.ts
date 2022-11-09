import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExamplesByLabelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=labelId" })
  labelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetExamplesByLabelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamplesByLabelRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExamplesByLabelQueryParams;

  @Metadata()
  security: GetExamplesByLabelSecurity;
}


export class GetExamplesByLabelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exampleList?: shared.ExampleList;

  @Metadata()
  statusCode: number;
}
