import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QueryBatchStatusV4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchId" })
  batchId: string;
}


export class QueryBatchStatusV4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: QueryBatchStatusV4PathParams;
}


export class QueryBatchStatusV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queryBatchResponse2?: shared.QueryBatchResponse2;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
