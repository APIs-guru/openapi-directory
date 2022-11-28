import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutInstitutionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutInstitutionsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PutInstitutionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutInstitutionsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutInstitutionsIdRequestBody;
}


export class PutInstitutionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  institution?: shared.Institution;

  @SpeakeasyMetadata()
  statusCode: number;
}
