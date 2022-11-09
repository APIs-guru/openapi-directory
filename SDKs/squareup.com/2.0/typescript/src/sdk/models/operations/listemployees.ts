import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEmployeesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=batch_token" })
  batchToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_created_at" })
  beginCreatedAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_updated_at" })
  beginUpdatedAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_created_at" })
  endCreatedAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_updated_at" })
  endUpdatedAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class ListEmployeesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListEmployeesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEmployeesQueryParams;

  @Metadata()
  security: ListEmployeesSecurity;
}


export class ListEmployeesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.V1Employee })
  v1Employees?: shared.V1Employee[];
}
