import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExamplesByLabelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelId" })
  labelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetExamplesByLabelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamplesByLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetExamplesByLabelQueryParams;

  @SpeakeasyMetadata()
  security: GetExamplesByLabelSecurity;
}


export class GetExamplesByLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exampleList?: shared.ExampleList;

  @SpeakeasyMetadata()
  statusCode: number;
}
