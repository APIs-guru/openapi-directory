import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" })
  galaxyApName?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" })
  galaxyApPassword?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" })
  galaxySearchType?: string;
}


export class SearchRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;
}


export class SearchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: SearchRequestBodyAddress;

  @Metadata({ data: "json, name=Age" })
  age?: number;

  @Metadata({ data: "json, name=Dob" })
  dob?: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;
}


export class SearchRequest extends SpeakeasyBase {
  @Metadata()
  headers: SearchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SearchRequestBody;
}


export class SearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
