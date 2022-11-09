import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHealthDashboardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unixTimestampSeconds" })
  unixTimestampSeconds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unixtimezoneOffsetSeconds" })
  unixtimezoneOffsetSeconds?: string;
}


export class GetHealthDashboardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetHealthDashboardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHealthDashboardQueryParams;

  @Metadata()
  security: GetHealthDashboardSecurity;
}


export class GetHealthDashboardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Database })
  databases?: shared.Database[];

  @Metadata()
  statusCode: number;
}
