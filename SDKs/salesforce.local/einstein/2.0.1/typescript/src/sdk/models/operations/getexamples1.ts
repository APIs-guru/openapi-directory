import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExamples1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export enum GetExamples1SourceEnum {
    All = "all",
    Feedback = "feedback",
    Upload = "upload"
}


export class GetExamples1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetExamples1SourceEnum;
}


export class GetExamples1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetExamples1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExamples1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetExamples1QueryParams;

  @SpeakeasyMetadata()
  security: GetExamples1Security;
}


export class GetExamples1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exampleList?: shared.ExampleList;

  @SpeakeasyMetadata()
  statusCode: number;
}
