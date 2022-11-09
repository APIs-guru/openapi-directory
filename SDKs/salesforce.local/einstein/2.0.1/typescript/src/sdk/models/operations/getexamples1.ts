import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExamples1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export enum GetExamples1SourceEnum {
    All = "all"
,    Feedback = "feedback"
,    Upload = "upload"
}


export class GetExamples1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetExamples1SourceEnum;
}


export class GetExamples1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamples1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExamples1PathParams;

  @Metadata()
  queryParams: GetExamples1QueryParams;

  @Metadata()
  security: GetExamples1Security;
}


export class GetExamples1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exampleList?: shared.ExampleList;

  @Metadata()
  statusCode: number;
}
