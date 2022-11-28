import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContactEnrichHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class PostContactEnrichRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;
}


export class PostContactEnrichRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: PostContactEnrichRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=Age" })
  age?: number;

  @SpeakeasyMetadata({ data: "json, name=Dob" })
  dob?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;
}


export class PostContactEnrichRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostContactEnrichHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostContactEnrichRequestBody;
}


export class PostContactEnrichResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
