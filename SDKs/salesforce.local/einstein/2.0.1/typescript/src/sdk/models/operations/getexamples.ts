import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExamplesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export enum GetExamplesSourceEnum {
    All = "all",
    Feedback = "feedback",
    Upload = "upload"
}


export class GetExamplesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetExamplesSourceEnum;
}


export class GetExamplesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamplesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExamplesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetExamplesQueryParams;

  @SpeakeasyMetadata()
  security: GetExamplesSecurity;
}


export class GetExamplesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exampleList?: shared.ExampleList;

  @SpeakeasyMetadata()
  statusCode: number;
}
