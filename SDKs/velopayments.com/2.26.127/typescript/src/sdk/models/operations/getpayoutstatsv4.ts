import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayoutStatsV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;
}


export class GetPayoutStatsV4Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPayoutStatsV4QueryParams;
}


export class GetPayoutStatsV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPayoutStatistics?: shared.GetPayoutStatistics;

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
