import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatisticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStatisticsQueryParams;
}


export class GetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Statistics })
  statistics?: shared.Statistics[];

  @SpeakeasyMetadata()
  statusCode: number;
}
