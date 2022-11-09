import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAttributesComputedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=refresh" })
  refresh?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetAttributesComputedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttributesComputedQueryParams;
}


export class GetAttributesComputedResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Attribute })
  attributes?: shared.Attribute[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
