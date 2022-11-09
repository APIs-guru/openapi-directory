import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisruptionsGetDisruptionModesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class DisruptionsGetDisruptionModesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DisruptionsGetDisruptionModesQueryParams;
}


export class DisruptionsGetDisruptionModesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3DisruptionModesResponse?: shared.V3DisruptionModesResponse;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;
}
