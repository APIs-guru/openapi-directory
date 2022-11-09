import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPayeeChangesV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPayeeChangesV4Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPayeeChangesV4QueryParams;
}


export class ListPayeeChangesV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payeeDeltaResponse2?: shared.PayeeDeltaResponse2;

  @Metadata()
  statusCode: number;
}
