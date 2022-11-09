import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1ContinuousChecksContinuousCheckIdHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=continuous_check_id" })
  continuousCheckId: string;
}


export class GetV1ContinuousChecksContinuousCheckIdHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV1ContinuousChecksContinuousCheckIdHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1ContinuousChecksContinuousCheckIdHistoryPathParams;

  @Metadata()
  security: GetV1ContinuousChecksContinuousCheckIdHistorySecurity;
}


export class GetV1ContinuousChecksContinuousCheckIdHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContiuousCheckHistoryOutput?: shared.GetContiuousCheckHistoryOutput;

  @Metadata()
  statusCode: number;
}
