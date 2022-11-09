import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPayeeChangesV3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedSince" })
  updatedSince: Date;
}


export class ListPayeeChangesV3Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPayeeChangesV3QueryParams;
}


export class ListPayeeChangesV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payeeDeltaResponse?: shared.PayeeDeltaResponse;

  @Metadata()
  statusCode: number;
}
