import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QueryBatchStatusV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchId" })
  batchId: string;
}


export class QueryBatchStatusV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: QueryBatchStatusV3PathParams;
}


export class QueryBatchStatusV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queryBatchResponse?: shared.QueryBatchResponse;

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
