import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1ContinuousChecksContinuousCheckIdHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=continuous_check_id" })
  continuousCheckId: string;
}


export class GetV1ContinuousChecksContinuousCheckIdHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetV1ContinuousChecksContinuousCheckIdHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1ContinuousChecksContinuousCheckIdHistoryPathParams;

  @SpeakeasyMetadata()
  security: GetV1ContinuousChecksContinuousCheckIdHistorySecurity;
}


export class GetV1ContinuousChecksContinuousCheckIdHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContiuousCheckHistoryOutput?: shared.GetContiuousCheckHistoryOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
