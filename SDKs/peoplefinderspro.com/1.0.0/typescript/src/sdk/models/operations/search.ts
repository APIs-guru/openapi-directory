import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class SearchRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;
}


export class SearchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: SearchRequestBodyAddress;

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


export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchRequestBody;
}


export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
