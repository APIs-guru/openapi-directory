import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvestorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class GetInvestorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetInvestorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetInvestorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvestorPathParams;

  @SpeakeasyMetadata()
  headers: GetInvestorHeaders;

  @SpeakeasyMetadata()
  security: GetInvestorSecurity;
}


export class GetInvestorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForInvestor?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvestor400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestor401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestor403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestor404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestor429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getInvestor500ApplicationJsonAny?: any;
}
