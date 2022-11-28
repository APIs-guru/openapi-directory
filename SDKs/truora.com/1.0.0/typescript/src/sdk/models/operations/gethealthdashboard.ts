import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHealthDashboardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unixTimestampSeconds" })
  unixTimestampSeconds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unixtimezoneOffsetSeconds" })
  unixtimezoneOffsetSeconds?: string;
}


export class GetHealthDashboardSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetHealthDashboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHealthDashboardQueryParams;

  @SpeakeasyMetadata()
  security: GetHealthDashboardSecurity;
}


export class GetHealthDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Database })
  databases?: shared.Database[];

  @SpeakeasyMetadata()
  statusCode: number;
}
