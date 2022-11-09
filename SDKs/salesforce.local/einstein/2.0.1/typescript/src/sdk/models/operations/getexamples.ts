import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExamplesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export enum GetExamplesSourceEnum {
    All = "all"
,    Feedback = "feedback"
,    Upload = "upload"
}


export class GetExamplesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetExamplesSourceEnum;
}


export class GetExamplesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamplesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExamplesPathParams;

  @Metadata()
  queryParams: GetExamplesQueryParams;

  @Metadata()
  security: GetExamplesSecurity;
}


export class GetExamplesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exampleList?: shared.ExampleList;

  @Metadata()
  statusCode: number;
}
