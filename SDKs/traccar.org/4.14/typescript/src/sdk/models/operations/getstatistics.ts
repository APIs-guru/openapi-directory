import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class GetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStatisticsQueryParams;
}


export class GetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Statistics })
  statistics?: shared.Statistics[];

  @Metadata()
  statusCode: number;
}
