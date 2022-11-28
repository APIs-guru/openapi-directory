import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersIdInstitutionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostUsersIdInstitutionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class PostUsersIdInstitutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersIdInstitutionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdInstitutionsRequestBody;
}


export class PostUsersIdInstitutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  institution?: shared.Institution;

  @SpeakeasyMetadata()
  statusCode: number;
}
